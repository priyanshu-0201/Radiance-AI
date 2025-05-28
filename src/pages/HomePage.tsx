import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Lightbulb, ShoppingBag, ChevronRight } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import StepCard from '../components/StepCard';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Personalized 
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Skin Health </span>
              Assistant
            </h1>
            <p className="text-lg text-neutral-700 mb-8 max-w-lg">
              AI-powered skincare advice and product recommendations, making expert dermatology accessible to everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/assessment" className="btn-primary">
                Start Free AI Skin Check
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center text-neutral-500">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mr-3">
                Free
              </span>
              <p>No sign-up required • Instant results</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-100 rounded-full filter blur-3xl opacity-30"></div>
            <img 
              src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Woman with healthy glowing skin" 
              className="rounded-2xl shadow-lg relative z-10 w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Why Radiance AI Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Radiance AI?</h2>
            <p className="text-lg text-neutral-700">
              Many people suffer from skin issues but lack knowledge or access to dermatologists.
              Radiance AI bridges that gap using advanced machine learning, image processing, and natural language processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary-500">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
              <p className="text-neutral-600">
                Our AI is trained on thousands of dermatological cases to recognize and diagnose common skin concerns with high accuracy.
              </p>
            </div>
            
            <div className="card p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-secondary-500">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Solutions</h3>
              <p className="text-neutral-600">
                Get tailored product recommendations based on your unique skin concerns, compatible with Indian skin types and climate.
              </p>
            </div>
            
            <div className="card p-8 hover:shadow-lg transition-all hover:scale-105 duration-300">
              <div className="bg-accent-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-accent-500">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessible Care</h3>
              <p className="text-neutral-600">
                Available 24/7, even in remote areas with limited internet access, bringing skincare expertise to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-neutral-700">
              Radiance AI makes skin analysis simple and accessible in just three easy steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number={1} 
              title="Upload a Selfie" 
              description="Take a clear photo of your skin concern in natural lighting for the most accurate analysis."
              icon={<Camera size={28} />}
            />
            
            <StepCard 
              number={2} 
              title="Describe Your Concerns" 
              description="Tell us about your skin type, sensitivities, and symptoms to help our AI better understand your situation."
              icon={<MessageCircle size={28} />}
            />
            
            <StepCard 
              number={3} 
              title="Get Recommendations" 
              description="Receive an instant analysis of your skin concern and personalized product recommendations."
              icon={<ShoppingBag size={28} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/assessment" className="btn-primary">
              Try It Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-neutral-700">
              Hear from people across India who have transformed their skin health with Radiance AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
              Read More Success Stories <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Skincare Routine?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized skincare advice and product recommendations in minutes.
          </p>
          <Link to="/assessment" className="btn bg-white text-primary-600 hover:bg-neutral-100 hover:text-primary-700 transition-colors">
            Start Your Free Skin Analysis
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;