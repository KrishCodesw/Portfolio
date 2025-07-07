import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MetaStash",
    description:
      "MetaStash helps users curate and store tweets, YouTube videos, articles, links, and personal notes. ",
    tech: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
    ],
    githubUrl: "https://github.com/KrishCodesw/Metastash1",
    liveUrl: "https://metastash1final.vercel.app/",
  },
  {
    id: 2,
    title: "FurnishAR ",
    description:
      "A Landing page for a startup Project related to AR/VR planned with entire UI/UX ",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "Figma"],
    githubUrl: "https://github.com/KrishCodesw/Furnish-AR",
    liveUrl: "https://furnish-ar-ekqw.vercel.app/",
  },
  {
    id: 3,
    title: "Room-based Chat App",
    description:
      "A real-time,room-based chat server,made to enable scalable communication in chat rooms. ",
    tech: ["React", "Websockets", "Tailwind", "ExpressJS", "NodeJS"],
    githubUrl: "https://github.com/KrishCodesw/Room-based-ChatAPP",
  },
  {
    id: 4,
    title: "Paytm,with a twist",
    description:
      "A real-time,money transfer wallet,made to enable scalable transactions in the app itself. ",
    tech: ["React", "Tailwind", "MongoDB", "Vercel", "ExpressJS", "NodeJS"],
    githubUrl: "https://github.com/KrishCodesw/paytm-end-to-end",
    liveUrl: "https://paytm-roan.vercel.app/",
  },
  {
    id: 5,
    title: "VastuAI",
    description:
      "A Rule Engine that gives you Vastu suggestions for both Indian and Chinese Vastu according to the directions of rooms,objects etc. ",
    tech: ["Python", "json"],
    githubUrl: "https://github.com/KrishCodesw/vastuai",
  },
  {
    id: 6,
    title: "Auto Email AI AGENT",
    description:
      "A Rule Engine that gives you Vastu suggestions for both Indian and Chinese Vastu according to the directions of rooms,objects etc. ",
    tech: ["Python", "json", "GCP", "Gemeni"],
    githubUrl: "https://github.com/KrishCodesw/build-with-ai",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-700 rounded-2xl p-6 hover:shadow-lg hover:border-zinc-500 transition-all duration-300 bg-zinc-900"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-zinc-300 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 px-2 py-1 rounded-full border border-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white text-xl"
                    aria-label="GitHub"
                  >
                    <SiGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white text-xl"
                    aria-label="Live Site"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold tracking-tight bg-gradient-to-r bg-white bg-clip-text text-transparent">
            Achievements & Events
          </h2>
          <ul className="text-lg text-zinc-400 leading-relaxed space-y-2">
            <li className="list-none hover:text-white transition duration-200">
              ► Participated in various tech ideathons, developer meets, and
              events organized by Google and college.
            </li>
            <li className="list-none hover:text-white transition duration-200">
              ► One of the Winners of{" "}
              <span className="text-white font-semibold">
                <strong>Datavision</strong>
              </span>{" "}
              — a 3 day Ideathon focused on data innovation.
            </li>
            <li className="list-none hover:text-white transition duration-200">
              ► Authored (not-published) a research paper on{" "}
              <span className=" font-medium">
                Brain-Computer Interfaces (BCIs)
              </span>
              , exploring neural signal integration and future applications in
              human-computer interaction.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
