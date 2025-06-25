import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Arrivals } from "../components/Arrivals";
import { BrandC } from "../components/BrandC";
import { Footer } from "../components/Footer";
import '../components/home.css';
import { Hometitle } from "../components/Hometitle";
import { NewArrivals } from "../components/NewArrivals";
import { NewsLetter } from "../components/NewsLetter";
import { ShopSection } from "../components/ShopSection";
import { SocialMedia } from "../components/SocialMedia";



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
    <div className="w-screen  mt-10 mx-auto">
      {/* Hometitle - No animation */}
      <Hometitle />
        <NewArrivals/>
        <Arrivals/>
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
    
      <Footer/>
    </div>
  );
};
