import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { BrandC } from "../components/BrandC";
import '../components/home.css';
import { Hometitle } from "../components/Hometitle";
import { NewArrivals } from "../components/NewArrivals";
import { NewsLetter } from "../components/NewsLetter";
import { ShopSection } from "../components/ShopSection";
import { SocialMedia } from "../components/SocialMedia";


// Animation like @keyframes appear
const scrollVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollVariant}
    >
      {children}
    </motion.div>
  );
};

export const Home= () => {
  return (
    <div className="w-screen md:max-w-[170vh] mx-auto">
      {/* Hometitle - No animation */}
      <Hometitle />

      {/* Animated sections */}
      <RevealOnScroll>
        <ShopSection/>
      </RevealOnScroll>

      <RevealOnScroll>
        <NewsLetter />
      </RevealOnScroll>

      <RevealOnScroll>
        <SocialMedia />
      </RevealOnScroll>
      <BrandC/>
      <RevealOnScroll>
        <NewArrivals/>
      </RevealOnScroll>
    </div>
  );
};
