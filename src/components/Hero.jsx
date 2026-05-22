import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Full-Stack Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-4 max-w-xl mx-auto"
      >
        I build scalable web apps using Laravel, React, and WordPress. I
        specialize in APIs, dashboards, and business websites.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 space-x-4"
      >
        <a href="#projects" className="bg-blue-600 px-5 py-2 rounded-md">
          View Projects
        </a>

        <a href="/cv.pdf" download className="border px-5 py-2 rounded-md">
          Download CV
        </a>

        <a href="#contact" className="border px-5 py-2 rounded-md">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
