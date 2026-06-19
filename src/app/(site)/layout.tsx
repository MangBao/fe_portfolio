import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Providers from "../providers";

export const metadata = {
  title: {
    default: "mbao-dev",
    template: "%s | mbao-dev",
  },
  description: "Frontend Developer Portfolio",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light antialiased">
        <CustomCursor />
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
