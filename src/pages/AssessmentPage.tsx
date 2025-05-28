import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, Info } from 'lucide-react';
import { SkinAssessment } from '../types';

const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [isUploading, setIsUploading] = useState(false);
  const [assessment, setAssessment] = useState<SkinAssessment>({
    selfieUrl: null,
    description: '',
    skinType: '',
    duration: '',
    sensitivities: ''
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setIsUploading(false);
        
        // In a real app, you would upload the image to a server
        // For this demo, we'll just store the preview URL
        setAssessment(prev => ({
          ...prev,
          selfieUrl: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssessment(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNextStep = () => {
    if (step === 1 && previewImage) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would submit the assessment to your backend
    // For this demo, we'll navigate to the results page with a mock result
    
    // Randomly choose a skin concern for demo purposes
    const concerns: Array<'acne' | 'dryness' | 'rash' | 'pigmentation' | 'eczema'> = 
      ['acne', 'dryness', 'rash', 'pigmentation', 'eczema'];
    const randomConcern = concerns[Math.floor(Math.random() * concerns.length)];
    
    // Store assessment in session storage for the results page
    sessionStorage.setItem('skinAssessment', JSON.stringify(assessment));
    sessionStorage.setItem('skinConcern', randomConcern);
    
    // Navigate to results page
    navigate('/results');
  };
  
  return (
    <div className="pt-24 pb-20 min-h-screen bg-neutral-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Skin Assessment</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Upload a selfie and answer a few questions for a personalized skin analysis and product recommendations.
          </p>
        </div>
        
        <div className="card p-8 md:p-10">
          <div className="flex mb-8">
            <div className={`flex-1 flex items-center ${step === 1 ? 'text-primary-500' : 'text-neutral-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-3 ${
                step === 1 ? 'bg-primary-100' : 'bg-neutral-100'
              }`}>
                1
              </div>
              <span className="font-medium">Upload Selfie</span>
              <div className="flex-1 h-1 mx-4 bg-neutral-200">
                {step > 1 && <div className="h-full bg-primary-500"></div>}
              </div>
            </div>
            
            <div className={`flex-1 flex items-center ${step === 2 ? 'text-primary-500' : 'text-neutral-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-3 ${
                step === 2 ? 'bg-primary-100' : 'bg-neutral-100'
              }`}>
                2
              </div>
              <span className="font-medium">Skin Details</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                    {previewImage ? (
                      <div className="relative">
                        <img 
                          src={previewImage} 
                          alt="Uploaded selfie" 
                          className="max-h-80 mx-auto rounded-lg" 
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            setAssessment(prev => ({ ...prev, selfieUrl: null }));
                          }}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-neutral-100 transition-colors"
                        >
                          <Info size={20} className="text-neutral-600" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Camera size={48} className="mx-auto mb-4 text-neutral-400" />
                        <h3 className="text-xl font-semibold mb-2">Upload a Selfie</h3>
                        <p className="text-neutral-500 mb-6">
                          Take a clear photo of your face or the affected skin area in natural lighting
                        </p>
                        <label className="btn-primary cursor-pointer">
                          <Upload size={16} className="mr-2" />
                          Select Image
                          <input 
                            type="file" 
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </>
                    )}
                  </div>
                  
                  {previewImage && (
                    <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null);
                          setAssessment(prev => ({ ...prev, selfieUrl: null }));
                        }}
                        className="text-neutral-600 hover:text-neutral-800 transition-colors"
                      >
                        Choose a different photo
                      </button>
                      
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="btn-primary"
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Info size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Tips for the best results:</h4>
                      <ul className="text-sm text-neutral-600 space-y-1">
                        <li>• Use natural lighting (near a window is best)</li>
                        <li>• Remove makeup if possible</li>
                        <li>• Capture the affected area clearly</li>
                        <li>• Include multiple angles if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="col-span-2">
                    <label className="block text-neutral-700 font-medium mb-2">
                      Describe your skin concern
                    </label>
                    <textarea
                      name="description"
                      value={assessment.description}
                      onChange={handleInputChange}
                      placeholder="E.g., I have red, itchy patches on my cheeks that appeared last week..."
                      className="input-field h-32"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      Skin Type
                    </label>
                    <select
                      name="skinType"
                      value={assessment.skinType}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select skin type</option>
                      <option value="normal">Normal</option>
                      <option value="dry">Dry</option>
                      <option value="oily">Oily</option>
                      <option value="combination">Combination</option>
                      <option value="sensitive">Sensitive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2">
                      How long have you had this concern?
                    </label>
                    <select
                      name="duration"
                      value={assessment.duration}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="days">Few days</option>
                      <option value="weeks">A few weeks</option>
                      <option value="months">Several months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-neutral-700 font-medium mb-2">
                      Any known allergies or sensitivities?
                    </label>
                    <input
                      type="text"
                      name="sensitivities"
                      value={assessment.sensitivities}
                      onChange={handleInputChange}
                      placeholder="E.g., fragrance, salicylic acid, etc."
                      className="input-field"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-outline"
                  >
                    Back
                  </button>
                  
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Get My Skin Analysis
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
        
        <div className="mt-8 text-center text-neutral-500 text-sm">
          <p>Your data is kept private and only used to generate your personalized recommendations.</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;