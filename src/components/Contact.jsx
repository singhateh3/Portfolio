export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 border-t border-gray-800 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Contact
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-10">
          Open for freelance work and collaborations.
        </p>

        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg break-words">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            <span className="text-gray-400">ebrimasnghateh67@email.com</span>
          </p>

          <p>
            <span className="font-semibold text-white">GitHub:</span>{" "}
            <a
              href="https://github.com/singhateh3"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              github.com/singhateh3
            </a>
          </p>

          <p>
            <span className="font-semibold text-white">Upwork:</span>{" "}
            <a
              href="https://www.upwork.com/freelancers/~0167e5551f3a1077ec?viewMode=1"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              Upwork Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
