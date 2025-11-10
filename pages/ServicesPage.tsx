import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="relative text-text-light">
      {/* 🌌 Glowing Hero */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="hero-glow absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl font-extrabold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to accelerate your growth and enhance your digital presence.
          </p>
        </div>
      </section>

      {/* 🧠 Services List */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 p-10 rounded-2xl bg-[#1b1b22]/60 border border-primary/20 shadow-glow hover:shadow-glow-strong backdrop-blur-md transition">
                <div className="text-center">
                  {React.cloneElement(service.icon, {
                    className: "h-24 w-24 text-primary mx-auto animate-float",
                  })}
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {service.longDescription}
                </p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center bg-primary text-black font-semibold px-6 py-3 rounded-full shadow-glow hover:shadow-glow-strong transition-transform hover:scale-105"
                >
                  Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
