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
    <section
      id="skills"
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 border-t border-gray-800"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-900 p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base border border-gray-800 hover:border-blue-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
