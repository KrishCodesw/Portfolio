import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

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
      </div>
    </section>
  );
}
