import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-cyan">Contact</h1>
        <p className="mt-4 text-slate">Contact Page</p>
      </div>
    </div>
  );
}
