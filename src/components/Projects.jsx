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
    <section id="projects" className="px-8 py-16 border-t border-gray-800">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-blue-400 text-sm mt-1">{p.tech}</p>
            <p className="text-gray-400 mt-3">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
