import { checkAuth } from "@/lib/auth";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { getActiveJobs } from "@/app/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Command Center | MIVA",
  robots: {
    index: false,
    follow: false,
  }
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full">
          <AdminLogin />
        </div>
      </div>
    );
  }

  const result = await getActiveJobs();
  const jobs = result.success ? result.jobs : [];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-background">
      <AdminDashboard jobs={jobs} />
    </div>
  );
}
