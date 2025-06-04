import { useAnimationFrame, motion } from "framer-motion";

import { useRef, useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiSass,
  SiBootstrap,
} from "react-icons/si";

interface CardType {
  icon: IconType;
  title: string;
  id: number;
}

const cards: CardType[] = [
  { id: 1, title: "HTML5", icon: SiHtml5 },
  { id: 2, title: "CSS3", icon: SiCss3 },
  { id: 3, title: "JavaScript", icon: SiJavascript },
  { id: 4, title: "TypeScript", icon: SiTypescript },
  { id: 5, title: "React", icon: SiReact },
  { id: 6, title: "Next.js", icon: SiNextdotjs },
  { id: 7, title: "Tailwind CSS", icon: SiTailwindcss },
  { id: 8, title: "Sass", icon: SiSass },
  { id: 9, title: "Bootstrap", icon: SiBootstrap },
  { id: 10, title: "Node.js", icon: SiNodedotjs },
  { id: 11, title: "Express.js", icon: SiExpress },
  { id: 12, title: "MongoDB", icon: SiMongodb },
  { id: 13, title: "PostgreSQL", icon: SiPostgresql },
  { id: 14, title: "MySQL", icon: SiMysql },
  { id: 15, title: "Firebase", icon: SiFirebase },
  { id: 18, title: "Git", icon: SiGit },
  { id: 19, title: "GitHub", icon: SiGithub },
  { id: 20, title: "Vercel", icon: SiVercel },
  { id: 21, title: "Netlify", icon: SiNetlify },
];

const InfiniteScrollCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, []);

  useAnimationFrame((delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.0001; // Adjust speed
      if (Math.abs(x.current) >= width / 2) x.current = 0;

      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const repeatedCards = [...cards, ...cards];

  return (
    <div className="bg-black py-5 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-black  text-white p-2 text-center mb-4 border-3 rounded-2xl"
        >
          <h1 id="title" className="text-4xl">
            Tools I use
          </h1>
        </motion.div>
        <div ref={containerRef} className="flex gap-4 w-max">
          {repeatedCards.map((card, index) => (
            <Card key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {
  const Icon = card.icon;

  return (
    <>
      <div className="group relative h-[60px] w-[60px] bg-cover bg-white rounded-lg flex items-center justify-center text-6xl text-neutral-800 shrink-0 shadow-md hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
    </>
  );
};

export default InfiniteScrollCarousel;
