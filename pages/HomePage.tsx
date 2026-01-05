import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/reveal';

const words = ["Innovation ", "Automation ", "Intelligence ", "Transformation "];

const HomePage: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  // Cycle through words every 3.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-text-light">
      {/* 🌌 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-24 overflow-hidden bg-transparent">
        <div className="hero-glow absolute inset-0"></div>

        <div className="relative z-10 max-w-3xl px-4">
          {/* ✨ Smooth Morphing Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-snug tracking-wider drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-white text-center"
          >
            Empowering{" "}
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="inline-block ml-2 md:ml-4 py-1 pr-2 leading-tight bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              {words[index]}
            </motion.span>
          </motion.h1>


          {/* 🌙 Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            We build futuristic digital products powered by automation, AI, and creative design.
          </motion.p>

          {/* 💡 Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="bg-primary text-background-DEFAULT font-bold px-8 py-3 rounded-full shadow-glow hover:shadow-glow-strong transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-primary text-primary hover:bg-primary hover:text-background-DEFAULT font-semibold px-8 py-3 rounded-full transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🧠 Services Section */}
      <Reveal>
        <section className="pt-8 pb-20 bg-gradient-to-b from-transparent via-background-light to-background-DEFAULT">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center gradient-text mb-12 drop-shadow-md">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

    </div>
  );
};

export default HomePage;
