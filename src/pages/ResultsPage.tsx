import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { skinResultsData } from '../data/products';
import { SkinConcern, SkinResult } from '../types';
import ProductCard from '../components/ProductCard';
import { CheckCircle, ArrowLeft, AlertCircle, Download, Share2 } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<SkinResult | null>(null);
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate API request delay
    const timer = setTimeout(() => {
      const concernFromStorage = sessionStorage.getItem('skinConcern') as SkinConcern || 'acne';
      const assessmentFromStorage = sessionStorage.getItem('skinAssessment');
      
      if (assessmentFromStorage) {
        const parsedAssessment = JSON.parse(assessmentFromStorage);
        setSelfieUrl(parsedAssessment.selfieUrl);
      }
      
      setResult(skinResultsData[concernFromStorage]);
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin"></div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Analyzing Your Skin...</h2>
          <p className="text-neutral-600 max-w-md">
            Our AI is processing your image and information to provide personalized recommendations.
          </p>
        </div>
      </div>
    );
  }
  
  if (!result) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <AlertCircle size={64} className="mx-auto mb-6 text-accent-500" />
          <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-neutral-600 max-w-md mb-8">
            We couldn't process your skin assessment. Please try again.
          </p>
          <Link to="/assessment" className="btn-primary">
            Try Again
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutral-50">
      <div className="container-custom max-w-5xl">
        <div className="flex items-center mb-8">
          <Link to="/assessment" className="text-neutral-600 hover:text-neutral-800 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold ml-4">Your Skin Analysis</h1>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center">
          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
          <p className="text-green-800">
            Analysis complete! Below are your personalized results and product recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            {selfieUrl && (
              <div className="card overflow-hidden mb-8">
                <img 
                  src={selfieUrl} 
                  alt="Your uploaded selfie" 
                  className="w-full object-cover"
                />
              </div>
            )}
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Identified Concern
              </h3>
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-lg capitalize mb-1">{result.concern}</h4>
                <p className="text-neutral-600 text-sm">
                  Confidence: High (92%)
                </p>
              </div>
              
              <div className="flex space-x-3 mb-6">
                <button className="flex-1 btn-outline py-2 text-sm">
                  <Download size={16} className="mr-2" /> Save
                </button>
                <button className="flex-1 btn-outline py-2 text-sm">
                  <Share2 size={16} className="mr-2" /> Share
                </button>
              </div>
              
              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm text-neutral-500">
                  Note: This is an AI-assisted analysis and not a medical diagnosis. For persistent or severe skin conditions, please consult a dermatologist.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                Analysis & Recommendations
              </h3>
              <p className="text-neutral-700 mb-6">
                {result.description}
              </p>
              
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Ingredients to Look For:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.concern === 'acne' && (
                    <>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Salicylic Acid</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Benzoyl Peroxide</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Niacinamide</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Tea Tree Oil</span>
                    </>
                  )}
                  {result.concern === 'dryness' && (
                    <>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Hyaluronic Acid</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Ceramides</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Glycerin</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Shea Butter</span>
                    </>
                  )}
                  {result.concern === 'rash' && (
                    <>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Colloidal Oatmeal</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Aloe Vera</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Allantoin</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Calendula</span>
                    </>
                  )}
                  {result.concern === 'pigmentation' && (
                    <>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Vitamin C</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Alpha Arbutin</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Niacinamide</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Kojic Acid</span>
                    </>
                  )}
                  {result.concern === 'eczema' && (
                    <>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Colloidal Oatmeal</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Ceramides</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Shea Butter</span>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Glycerin</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Recommended Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Daily Routine</h4>
              <ul className="text-neutral-600 text-sm space-y-2">
                <li>• Gentle cleansing 2x daily</li>
                <li>• Apply recommended products</li>
                <li>• Use sunscreen every morning</li>
                <li>• Stay hydrated throughout the day</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Lifestyle Adjustments</h4>
              <ul className="text-neutral-600 text-sm space-y-2">
                <li>• Maintain a balanced diet</li>
                <li>• Get 7-8 hours of sleep</li>
                <li>• Manage stress levels</li>
                <li>• Avoid touching your face</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Follow-up</h4>
              <ul className="text-neutral-600 text-sm space-y-2">
                <li>• Track progress for 4 weeks</li>
                <li>• Return for another assessment</li>
                <li>• Consult a dermatologist if needed</li>
                <li>• Join our community for support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;