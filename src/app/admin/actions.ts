"use server";

import prisma from "@/lib/prisma";
import { login, logout, checkAuth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function adminLogin(formData: FormData) {
  const password = formData.get("password") as string;
  const success = await login(password);
  if (success) {
    revalidatePath("/admin");
    return { success: true };
  }
  return { success: false, error: "Invalid password" };
}

export async function adminLogout() {
  await logout();
  revalidatePath("/admin");
}

export async function createJob(formData: FormData) {
  if (!(await checkAuth())) return { success: false, error: "Unauthorized" };

  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;
    const department = formData.get("department") as string;

    await prisma.job.create({
      data: { title, description, location, type, department, isActive: true }
    });

    revalidatePath("/careers");
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteJob(id: string) {
  if (!(await checkAuth())) return { success: false, error: "Unauthorized" };
  
  try {
    await prisma.job.delete({ where: { id } });
    revalidatePath("/careers");
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
