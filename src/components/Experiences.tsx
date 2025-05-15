// components/Experiences.tsx

type Experience = {
  position: string;
  company: string;
  duration: string;
  description: string;
};

const experiences: Experience[] = [
  {
    position: "Frontend Developer",
    company: "Tech Company A",
    duration: "Jan 2023 - Present",
    description:
      "Developed responsive user interfaces using React and Tailwind. Collaborated with backend team to integrate APIs.",
  },
  {
    position: "Web Developer Intern",
    company: "Startup B",
    duration: "Jul 2022 - Dec 2022",
    description:
      "Assisted in developing the company’s main website and optimizing performance using Lighthouse and Web Vitals.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#111] text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] rounded-lg p-6 border-l-4 border-cyan-400"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <div className="text-sm text-gray-400 mb-2">
              {exp.company} · {exp.duration}
            </div>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
