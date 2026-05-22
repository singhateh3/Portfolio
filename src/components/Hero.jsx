import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        Full-Stack Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto"
      >
        I build scalable web apps using Laravel, React, and WordPress. I
        specialize in APIs, dashboards, and business websites.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md w-full sm:w-auto"
        >
          View Projects
        </a>

        <a
          href="/cv.pdf"
          download
          className="border border-gray-500 hover:border-white transition px-5 py-2 rounded-md w-full sm:w-auto"
        >
          Download CV
        </a>

        <a
          href="#contact"
          className="border border-gray-500 hover:border-white transition px-5 py-2 rounded-md w-full sm:w-auto"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
