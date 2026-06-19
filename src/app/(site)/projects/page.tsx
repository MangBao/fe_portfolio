import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-cyan">Projects</h1>
        <p className="mt-4 text-slate">Projects Page</p>
      </div>
    </div>
  );
}
