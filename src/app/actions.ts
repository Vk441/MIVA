"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key_for_build");
const MIVA_EMAIL = process.env.MIVA_EMAIL || "contact@miva.com";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" };
    }

    // Save to Database
    await prisma.contactMessage.create({
      data: { name, email, message }
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "MIVA <noreply@miva-aerospace.com>", // Note: requires miva-aerospace.com to be verified in Resend. For testing, onboarding@resend.dev can be used.
      to: [MIVA_EMAIL],
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error sending contact form email:", error);
      // We return success: true because it successfully saved in the database!
      // But we mention that the email alert was not sent.
      return { success: true, emailError: true, error: "Saved to database, but notification email failed to send: " + error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error.message || "Failed to submit form" };
  }
}

export async function submitCareerApplication(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const jobId = formData.get("jobId") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !jobId) {
      return { success: false, error: "Required fields missing" };
    }

    // Process file upload (Resume)
    let resumeName: string | null = null;
    let resumeData: string | null = null;
    const attachments: any[] = [];

    if (resumeFile && resumeFile.size > 0) {
      // 4MB limit check (4 * 1024 * 1024 bytes)
      if (resumeFile.size > 4194304) {
        return { success: false, error: "Resume file exceeds the 4MB size limit." };
      }
      resumeName = resumeFile.name;
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      resumeData = buffer.toString("base64");
      attachments.push({
        filename: resumeName,
        content: buffer,
      });
    }

    // Get Job Title
    let jobTitle = "General Application";
    if (jobId !== "general") {
      const job = await prisma.job.findUnique({ where: { id: jobId } });
      if (job) {
        jobTitle = job.title;
      }
    }

    // Save to Database
    await prisma.application.create({
      data: {
        name,
        email,
        jobId,
        jobTitle,
        coverLetter,
        resumeName,
        resumeData
      }
    });

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "MIVA Careers <noreply@miva-aerospace.com>", // Note: requires miva-aerospace.com to be verified in Resend.
      to: [MIVA_EMAIL],
      subject: `New Job Application: ${name} - ${jobTitle}`,
      text: `Name: ${name}\nEmail: ${email}\nPosition: ${jobTitle}\n\nCover Letter:\n${coverLetter}\n\nAttached: ${resumeName || "No CV uploaded"}`,
      attachments,
    });

    if (error) {
      console.error("Resend error sending career application email:", error);
      return { success: true, emailError: true, error: "Saved to database, but notification email failed to send: " + error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Error submitting application:", error);
    return { success: false, error: error.message || "Failed to submit application" };
  }
}

export async function getActiveJobs() {
  try {
    const jobs = await prisma.job.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }
    });
    return { success: true, jobs };
  } catch (error) {
    // Return empty jobs array if database is not connected yet
    return { success: false, jobs: [] };
  }
}
