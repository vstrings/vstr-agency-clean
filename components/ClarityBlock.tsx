import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const lines = [
  "Before the visuals, before the vibe — there has to be clarity.",
  "Most brands look good but feel off because they skipped the thinking.",
  "",
  "What do you stand for?",
  "Who is it really for?",
  "Why should anyone care?",
  "",
  "That’s the hard part.",
  "That’s what V STR brings to life.",
  "",
  "Clarity first.",
  "Direction before design.",
];

const ClarityBlock = () => {
  return (
    <section className="py-20 px-6 text-white" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-3xl mx-auto space-y-4">
        {lines.map((line, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className={`text-lg md:text-xl leading-relaxed ${line === "" ? "h-4" : ""}`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default ClarityBlock;
