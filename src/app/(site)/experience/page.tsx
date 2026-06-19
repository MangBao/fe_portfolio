import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Experience",
};

export default function ExperiencePage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-cyan">Experience</h1>
        <p className="mt-4 text-slate">Experience Page</p>
      </div>
    </div>
  );
}
