// components/Skills.tsx

type Skill = {
  name: string;
  level: number; // % từ 0 đến 100
};

const skills: Skill[] = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "TailwindCSS", level: 70 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#111] text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-cyan-400 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
