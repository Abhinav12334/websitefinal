import React from 'react';
import { TEAM_MEMBERS, MILESTONES } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';
import { Flag, Rocket, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="relative text-text-light">
      {/* 🌌 Glowing Hero */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="hero-glow absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl font-extrabold gradient-text mb-6">About Aptivora</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate creators, thinkers, and problem-solvers dedicated to building exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* 🧭 Mission / Vision / Values */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[{icon: Flag, title: "Our Mission", text: "Empower businesses with innovative tech."},
            {icon: Rocket, title: "Our Vision", text: "Lead global digital transformation."},
            {icon: Users, title: "Our Values", text: "Collaboration, Integrity, Innovation, Excellence."}]
            .map(({icon: Icon, title, text}) => (
              <div key={title} className="p-8 rounded-2xl bg-[#1b1b22]/60 border border-primary/20 shadow-glow backdrop-blur-sm">
                <Icon className="h-12 w-12 mx-auto text-primary animate-float" />
                <h2 className="text-2xl font-bold gradient-text mt-4">{title}</h2>
                <p className="mt-2 text-gray-400">{text}</p>
              </div>
          ))}
        </div>
      </section>

      {/* 👥 Team */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold gradient-text mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
