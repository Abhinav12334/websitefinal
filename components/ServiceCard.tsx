import React from 'react';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="p-8 rounded-2xl bg-background-card border border-primary/10 hover:border-primary/40 shadow-glow hover:shadow-glow-strong transition-all duration-500 hover:-translate-y-2 group">
      <div className="mb-6 text-primary text-4xl">{service.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white">{service.description}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center text-primary font-semibold group-hover:text-white transition-all"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
