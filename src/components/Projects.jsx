const projects = [
  {
    title: "Library Management System",
    tech: "Laravel + MySQL",
    desc: "System for managing books, borrowing, and admin approvals.",
  },
  {
    title: "Invoice Management System",
    tech: "Laravel API, React",
    desc: "A system for invoice creation and tracking.",
  },
  {
    title: "Browser Extension Manager",
    tech: "JavaScript",
    desc: "UI app for managing extensions with filters.",
  },
  {
    title: "Blog API",
    tech: "Laravel",
    desc: "REST API for blog posts, comments, and categories.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 border-t border-gray-800"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>

            <p className="text-blue-400 text-xs sm:text-sm mt-1">{p.tech}</p>

            <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
