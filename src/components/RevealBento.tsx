import type { FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

// import { FiMapPin } from "react-icons/fi";
import { SiGithub, SiX } from "react-icons/si";

export const RevealBento: FC = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        // Adjusted grid:
        // On small screens, still 1 column.
        // On medium screens (md), 2 columns to put Github and X side-by-side.
        // On larger screens (lg), still 2 columns for the top row, but the about section will span both.
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl" // Added max-w-4xl for better readability on large screens
      >
        {/* SocialsBlock will now inherently share columns if the parent is md:grid-cols-2 */}
        <SocialsBlock />

        {/* AboutBlock will span both columns on md and larger screens */}
        <AboutBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = HTMLMotionProps<"div"> & {
  className?: string;
};

const Block: FC<BlockProps> = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`rounded-lg border mb-0 border-zinc-500 bg-black p-1 ${
        className ?? ""
      }`}
      {...rest}
    />
  );
};

const SocialsBlock: FC = () => (
  <>
    {/* No col-span needed here directly if the parent grid handles it */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="bg-black" // Removed col-span-1 from here
    >
      <a
        href="https://github.com/KrishCodesw/"
        target="_blank"
        className="grid place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="bg-black" // Removed col-span-1 from here
    >
      <a
        href="https://X.com/KrishJainw/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  // Updated col-span to span 2 columns on medium and larger screens
  <Block className="md:col-span-2 text-3xl leading-snug">
    <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-24 lg:px-48">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Hey! I'm Krish — a passionate developer who loves building sleek,
          interactive digital experiences. I primarily work with technologies
          like NextJS,React, Tailwind CSS, and Framer Motion for Frontend and on
          Backend side tech like ExpressJS,NodeJS,PostgreSQL, .My goal is to
          combine creativity and performance to deliver elegant and impactful
          web applications.
        </p>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Outside of coding, I enjoy learning about design, exploring the world
          of AI, and creating content to help others grow in tech. Let's build
          something awesome together!
        </p>
      </div>
    </section>
  </Block>
);
