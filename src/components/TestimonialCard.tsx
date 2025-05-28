import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="card hover:shadow-lg group p-6 h-full flex flex-col">
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-primary-200 opacity-50 w-8 h-8" />
        <p className="text-neutral-700 relative z-10 mb-6">
          "{testimonial.quote}"
        </p>
      </div>
      
      <div className="mt-auto flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-100"
        />
        <div>
          <h4 className="font-medium text-neutral-800">{testimonial.name}</h4>
          <p className="text-sm text-neutral-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;