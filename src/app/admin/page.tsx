import { checkAuth } from "@/lib/auth";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { getActiveJobs } from "@/app/actions";
import { getApplications, getContactMessages } from "@/app/admin/actions";
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

  const jobsResult = await getActiveJobs();
  const jobs = jobsResult.success ? jobsResult.jobs : [];

  const appsResult = await getApplications();
  const applications = appsResult.success ? appsResult.applications : [];

  const contactsResult = await getContactMessages();
  const contactMessages = contactsResult.success ? contactsResult.messages : [];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-background pt-36">
      <AdminDashboard 
        jobs={jobs} 
        applications={applications} 
        contactMessages={contactMessages} 
      />
    </div>
  );
}
