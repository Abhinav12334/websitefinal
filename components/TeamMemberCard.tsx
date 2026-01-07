
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
      />
      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="text-primary font-semibold">{member.role}</p>
      <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
