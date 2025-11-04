
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 blue-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">Our Services</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to accelerate your growth and enhance your digital presence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 p-8 bg-white rounded-2xl shadow-lg flex justify-center items-center">
                   <div className="text-center">
                     {React.cloneElement(service.icon, { className: "h-24 w-24 text-primary mx-auto" })}
                   </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                  <a href="/contact" className="mt-6 inline-flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
