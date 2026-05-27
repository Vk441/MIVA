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

    // Send email via Resend
    await resend.emails.send({
      from: "MIVA <noreply@miva-aerospace.com>", // You'll need to verify a domain in Resend
      to: [MIVA_EMAIL],
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

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

    if (!name || !email || !jobId) {
      return { success: false, error: "Required fields missing" };
    }

    // Optionally save application to database here (if we add an Application model)

    // Send email via Resend
    await resend.emails.send({
      from: "MIVA Careers <noreply@miva-aerospace.com>", 
      to: [MIVA_EMAIL],
      subject: `New Job Application from ${name} (Job ID: ${jobId})`,
      text: `Name: ${name}\nEmail: ${email}\nJob ID: ${jobId}\n\nCover Letter:\n${coverLetter}`,
    });

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
