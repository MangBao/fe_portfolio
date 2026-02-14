import "@/app/globals.css";

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 dark:bg-zinc-900">{children}</body>
    </html>
  );
}
