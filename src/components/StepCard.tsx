import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="card p-8 group hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary-500 group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>
      
      <div className="flex items-center mb-4">
        <span className="bg-secondary-100 text-secondary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
          {number}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default StepCard;