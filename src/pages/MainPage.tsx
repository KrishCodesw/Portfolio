import Hero from "./Hero";

import { motion } from "framer-motion";
import myimg from "../assets/myimg.jpeg";
import { RevealBento } from "../components/RevealBento";

import InfiniteScrollCarousel from "../components/Carasouel";
import FeaturedProjects from "../components/FeaturedProjects";
import ReachOutSection from "../components/ReachOutSection";

const MainPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black text-white"
      >
        <Hero
          title="Krish Jain"
          imageSrc={myimg}
          imageAlt=""
          subtitle="Hi, I am an computer science engineering student and I specialize in Full Stack dev and AI"
        ></Hero>
      </motion.div>

      <div className="">
        <RevealBento />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black text-white"
      >
        <InfiniteScrollCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black text-white"
      >
        <FeaturedProjects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black text-white"
      >
        <ReachOutSection />
      </motion.div>
    </div>
  );
};

export default MainPage;
