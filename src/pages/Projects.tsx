import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Mô tả ngắn về Project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Mô tả ngắn về Project 2.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Mô tả ngắn về Project 3.",
      link: "#",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, link }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
