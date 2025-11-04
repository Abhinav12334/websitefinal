
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-center bg-linear-to-br from-blue-50 via-white to-blue-100">
         <div className="absolute inset-0 bg-grid-slate-100 [mask[linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 tracking-tight">
  Empowering Innovation with Intelligent Solutions
</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Aptivora is your partner in building the next generation of digital products. We combine creative design, cutting-edge technology, and data-driven insights to bring your vision to life.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link to="/contact" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </Link>
            <Link to="/services" className="bg-white text-primary font-semibold px-8 py-3 rounded-full border border-primary/50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We provide a full spectrum of services to help you innovate and grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Client Logos Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Innovative Companies</h2>
            <p className="mt-3 text-gray-600">We're proud to have partnered with forward-thinking businesses.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">
            <span className="font-bold text-2xl">A</span>
            <span className="font-bold text-2xl">b</span>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
