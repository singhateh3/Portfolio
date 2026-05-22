const skills = [
  "Laravel",
  "React",
  "WordPress",
  "MySQL",
  "Tailwind CSS",
  "JavaScript",
];

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-16 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-900 p-4 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
