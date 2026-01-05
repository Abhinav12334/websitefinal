import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Component for individual scrolling service section
const ServiceSection = ({
  service,
  setActiveId
}: {
  service: typeof SERVICES[0],
  setActiveId: (id: string) => void
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
    triggerOnce: false,
    rootMargin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    if (inView) {
      setActiveId(service.id);
    }
  }, [inView, service.id, setActiveId]);

  return (
    <div ref={ref} className="min-h-[85vh] flex items-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full flex flex-col justify-center min-h-[400px]"
      >
        <div className="block md:hidden mb-10">
          <div className="p-6 rounded-2xl bg-background-card border border-primary/20 inline-block">
            {React.cloneElement(service.icon as any, {
              className: "h-12 w-12 text-primary",
            })}
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg transition-colors duration-300">
          {service.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          {service.longDescription}
        </p>



        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group/link mt-auto"
        >
          <span className="border-b border-primary group-hover/link:border-white pb-1">Start a Project</span>
          <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

const ImageContainer = ({ activeService }: { activeService: typeof SERVICES[0] }) => (
  <div className="relative z-10 w-full h-[600px] flex items-center justify-center p-6">
    {/* Outer Box Structure frame */}
    <div className="w-full h-full p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-2xl backdrop-blur-sm">
      <div className="w-full h-full rounded-[2rem] overflow-hidden bg-background-light relative group border border-white/5">
        {/* Main AI Image - Static */}
        <img
          src="/ai-side-panel.png"
          alt="AI Technology"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        {/* Active Service Label - Animated */}
        <div className="absolute bottom-10 left-10 right-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{activeService.title}</h3>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>

    {/* Decorative ID number moved outside */}
    <div className="absolute -right-8 top-20 text-[6rem] font-bold text-white/5 pointer-events-none select-none rotate-90 origin-bottom-left">
      0{SERVICES.indexOf(activeService) + 1}
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  return (
    <div className="relative text-text-DEFAULT bg-transparent">

      {/* 🌌 Intro / Hero Section */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="hero-glow absolute inset-0 opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold gradient-text mb-6">Our Expertise</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scroll down to explore how we transform businesses through technology.
          </p>
        </div>
      </section>

      {/* 🧬 Sticky Scroll Container */}
      <div className="relative w-full flex flex-col md:flex-row">

        {/* left: Sticky Visual Side (Desktop Only) */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-10 overflow-hidden">
          {/* Background Elements for the Sticky Area */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-primary/5 rounded-r-[50px] border-r border-white/5 backdrop-blur-sm"></div>

          {/* ⚡ Moving Line Divider */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent opacity-75 blur-[2px]"
            />
          </div>

          {/* Static Image Container with Box Structure */}
          <div className="relative z-10 w-full h-[600px] flex items-center justify-center p-6">
            {/* Box Frame */}
            <div className="w-full h-full p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-background-light relative group border border-white/5">
                {/* Main AI Image - Static */}
                <img
                  src="/ai-side-panel.png"
                  alt="AI Technology"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Active Service Label - Animated */}
                <div className="absolute bottom-10 left-10 right-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">{activeService.title}</h3>
                      <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Decorative ID number */}
            <div className="absolute -right-8 top-20 text-[6rem] font-bold text-white/5 pointer-events-none select-none rotate-90 origin-bottom-left">
              0{SERVICES.indexOf(activeService) + 1}
            </div>
          </div>
        </div>

        {/* right: Scrolling Content Side */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col">
            {SERVICES.map((service) => (
              <ServiceSection
                key={service.id}
                service={service}
                setActiveId={setActiveServiceId}
              />
            ))}
          </div>

          {/* Bottom text padding */}
          <div className="h-[20vh]"></div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
