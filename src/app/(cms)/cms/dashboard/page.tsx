import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard - CMS Management",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Dashboard
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          CMS Dashboard Page
        </p>
      </main>
    </div>
  );
}
