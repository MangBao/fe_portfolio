import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-cyan">About</h1>
        <p className="mt-4 text-slate">About Page</p>
      </div>
    </div>
  );
}
