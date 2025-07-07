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
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="md:col-span-2 text-3xl leading-snug relative overflow-hidden">
    <div className="absolute -inset-1 blur-xl opacity-10 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-xl pointer-events-none z-0" />

    <section className="relative z-10 bg-black text-white py-16 px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gradient bg-gradient-to-r bg-white bg-clip-text text-transparent">
            Experience
          </h2>
          <ul className="text-lg text-zinc-400 leading-relaxed space-y-2">
            <li className="list-none hover:text-white transition duration-200">
              ► Full Stack Developer at{" "}
              <strong className="text-white">Aetheron.AI</strong> – Working on
              AI-driven and full-stack solutions for the first product launch
              <strong className="text-white"> Spaciefy.</strong>
            </li>
            <li className="list-none hover:text-white transition duration-200">
              ► Full Stack Developer Intern at{" "}
              <a
                href="https://www.effilearn.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                <strong className="text-white">Effilearn</strong>
              </a>
              – Built and enhanced a production-grade course selling application
              .
            </li>
            <li className="list-none hover:text-white transition duration-200">
              ► Personal Projects – Created full-stack apps with user
              authentication, dashboards, voting systems, and more.
            </li>
          </ul>
        </motion.div>

        {/* ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r text-white bg-clip-text ">
            About Me
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed hover:text-white transition duration-200">
            ► I love everything about where the world of technology is going.
            <br />► I don't have many hobbies outside coding. I am not athletic,
            bad at singing, &nbsp;&nbsp;&nbsp;&nbsp;don't drink & can't dance.
            <br />►{" "}
            <span className="text-shadow-white font-semibold">
              Building is the only thing I am good at.
            </span>
            <br />► At this point, I want to be a part of taking something from
            0-1 or 1 - 100.
            <br />► I just want to be heads down chasing that goal.
          </p>
        </motion.div>

        {/* DESCRIPTION / PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-rtext-white bg-clip-text ">
            What Drives Me
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed hover:text-white transition duration-200">
            I believe in building{" "}
            <span className="text-white font-medium">meaningful products</span>{" "}
            that improve lives — whether it’s simplifying user flows, optimizing
            backend performance, or helping others learn.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed hover:text-white transition duration-200">
            Outside of coding, I’m exploring{" "}
            <span className="text-white font-medium">AI tools</span>, diving
            into design systems, and sharing what I learn with the dev
            community.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed hover:text-white transition duration-200">
            Other than this I also participated in multiple Tech Ideathons ,
            Events and even won one in my 1st semester Called Datavision
            <span className="text-white font-medium">AI tools</span>, diving
            into design systems, and sharing what I learn with the dev
            community.
          </p>
        </motion.div>
      </div>
    </section>
  </Block>
);
