import { motion } from 'framer-motion';

const Hero = () => (
  <section className="h-screen bg-[#111111] text-white flex items-center justify-center text-center px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#DDB3C6]">
        We Don’t Build Brands. We Create Obsessions.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        Bold visuals. Magnetic strategy. Clean execution. We bring vision to life with radical clarity.
      </p>
      <a
        href="/contact"
        className="inline-block bg-[#DDB3C6] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90"
      >
        Book Your Strategy Call
      </a>
    </motion.div>
  </section>
);

export default Hero;
