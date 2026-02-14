import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "My Skills",
};

export default function SkillsPage() {
  return (
    <div className="section">
      <div className="content-wrapper">
        <h1 className="text-cyan">Skills</h1>
        <p className="mt-4 text-slate">Skills Page</p>
      </div>
    </div>
  );
}
