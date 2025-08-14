import React, { useState, useEffect } from 'react';
import { User, Building, Calendar, Code, Link, Github, Linkedin, Twitter, FileText, Send, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Target, Clock, Zap } from 'lucide-react';

export default function InterviewPrepWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    interviewer: {
      name: '',
      linkedin: '',
      github: '',
      twitter: '',
      pdf_url: ''
    },
    company: {
      name: '',
      website: ''
    },
    role_focus: '',
    timeframe: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animateCard, setAnimateCard] = useState(true);

  useEffect(() => {
    setAnimateCard(true);
    const timer = setTimeout(() => setAnimateCard(false), 400);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const steps = [
    {
      id: 0,
      title: "Interviewer Details",
      subtitle: "Research starts with knowing who you'll meet",
      icon: User,
      progress: 25
    },
    {
      id: 1,
      title: "Company Information",
      subtitle: "Context about your potential workplace",
      icon: Building,
      progress: 50
    },
    {
      id: 2,
      title: "Focus & Timeline",
      subtitle: "Tailor your preparation strategy",
      icon: Target,
      progress: 75
    },
    {
      id: 3,
      title: "All Set",
      subtitle: "Your preparation plan is ready",
      icon: Sparkles,
      progress: 100
    }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleDirectChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.interviewer.name.trim() !== '';
      case 1:
        return formData.company.name.trim() !== '';
      case 2:
        return formData.role_focus !== '' && formData.timeframe !== '';
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      setSubmitStatus(null);
    } else {
      setSubmitStatus({ type: 'error', message: 'Please complete all required fields to continue' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    setSubmitStatus(null);
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) {
      setSubmitStatus({ type: 'error', message: 'Please complete all required fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/interview-prep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Successfully submitted!' });
        setCurrentStep(3);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ProgressBar = () => (
    <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mb-16">
      <div 
        className="h-full bg-black transition-all duration-700 ease-out"
        style={{ width: `${steps[currentStep].progress}%` }}
      />
    </div>
  );

  const StepHeader = () => (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-full mb-6">
        {React.createElement(steps[currentStep].icon, { className: "h-6 w-6 text-white" })}
      </div>
      <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">
        {steps[currentStep].title}
      </h1>
      <p className="text-lg text-gray-500 font-light max-w-md mx-auto">
        {steps[currentStep].subtitle}
      </p>
    </div>
  );

  const InterviewerStep = () => (
    <div className={`max-w-2xl mx-auto transform transition-all duration-400 ${animateCard ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className="space-y-12">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-4 tracking-wide">
            FULL NAME *
          </label>
          <input
            type="text"
            value={formData.interviewer.name}
            onChange={(e) => handleInputChange('interviewer', 'name', e.target.value)}
            className="w-full px-0 py-4 text-xl font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
            placeholder="Jane Smith"
            required
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-4 tracking-wide">
              <Linkedin className="h-4 w-4 mr-3 text-blue-600" />
              LINKEDIN
            </label>
            <input
              type="url"
              value={formData.interviewer.linkedin}
              onChange={(e) => handleInputChange('interviewer', 'linkedin', e.target.value)}
              className="w-full px-0 py-4 text-lg font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
              placeholder="linkedin.com/in/janesmith"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-4 tracking-wide">
              <Github className="h-4 w-4 mr-3 text-gray-800" />
              GITHUB
            </label>
            <input
              type="url"
              value={formData.interviewer.github}
              onChange={(e) => handleInputChange('interviewer', 'github', e.target.value)}
              className="w-full px-0 py-4 text-lg font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
              placeholder="github.com/janesmith"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-4 tracking-wide">
              <Twitter className="h-4 w-4 mr-3 text-blue-400" />
              TWITTER
            </label>
            <input
              type="url"
              value={formData.interviewer.twitter}
              onChange={(e) => handleInputChange('interviewer', 'twitter', e.target.value)}
              className="w-full px-0 py-4 text-lg font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
              placeholder="twitter.com/janesmith"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-4 tracking-wide">
              <FileText className="h-4 w-4 mr-3 text-gray-600" />
              RESUME URL
            </label>
            <input
              type="text"
              value={formData.interviewer.pdf_url}
              onChange={(e) => handleInputChange('interviewer', 'pdf_url', e.target.value)}
              className="w-full px-0 py-4 text-lg font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
              placeholder="/uploads/resume.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyStep = () => (
    <div className={`max-w-2xl mx-auto transform transition-all duration-400 ${animateCard ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className="space-y-12">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-4 tracking-wide">
            COMPANY NAME *
          </label>
          <input
            type="text"
            value={formData.company.name}
            onChange={(e) => handleInputChange('company', 'name', e.target.value)}
            className="w-full px-0 py-4 text-xl font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
            placeholder="TechNova Inc"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-900 mb-4 tracking-wide">
            <Link className="h-4 w-4 mr-3 text-gray-600" />
            WEBSITE
          </label>
          <input
            type="url"
            value={formData.company.website}
            onChange={(e) => handleInputChange('company', 'website', e.target.value)}
            className="w-full px-0 py-4 text-lg font-light border-0 border-b-2 border-gray-200 focus:border-black focus:outline-none transition-all duration-300 bg-transparent placeholder-gray-400"
            placeholder="technova.com"
          />
        </div>

        <div className="mt-20 p-8 bg-gray-50 border-l-4 border-black">
          <div className="flex items-start">
            <Zap className="h-5 w-5 text-black mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Intelligence Layer</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We analyze company culture, recent developments, and tech stack to provide contextual insights that demonstrate your genuine interest and preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const InterviewDetailsStep = () => (
    <div className={`max-w-2xl mx-auto transform transition-all duration-400 ${animateCard ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className="space-y-12">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-900 mb-6 tracking-wide">
            <Code className="h-4 w-4 mr-3 text-gray-600" />
            FOCUS AREA *
          </label>
          <div className="space-y-3">
            {[
              { value: "DSA and problem solving", label: "Data Structures & Algorithms" },
              { value: "System Design", label: "System Design" },
              { value: "Frontend Development", label: "Frontend Development" },
              { value: "Backend Development", label: "Backend Development" },
              { value: "Full Stack Development", label: "Full Stack Development" },
              { value: "Machine Learning", label: "Machine Learning" },
              { value: "DevOps", label: "DevOps" },
              { value: "Mobile Development", label: "Mobile Development" }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleDirectChange('role_focus', option.value)}
                className={`w-full text-left px-6 py-4 border transition-all duration-200 ${
                  formData.role_focus === option.value
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <span className="text-lg font-light">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-900 mb-6 tracking-wide">
            <Clock className="h-4 w-4 mr-3 text-gray-600" />
            TIMELINE *
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {['1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3+ months'].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleDirectChange('timeframe', time)}
                className={`py-6 px-4 border transition-all duration-200 ${
                  formData.timeframe === time
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <span className="text-lg font-light">{time}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-gray-50 border-l-4 border-black">
          <div className="flex items-start">
            <Target className="h-5 w-5 text-black mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Adaptive Planning</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Your timeline and focus area determine the intensity and depth of preparation. We optimize for maximum impact within your available time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessStep = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-8">
        <CheckCircle className="h-10 w-10 text-white" />
      </div>
      <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
        Preparation Initiated
      </h1>
      <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
        Your personalized interview strategy is now being generated based on the information provided.
      </p>
      
      <div className="bg-gray-50 p-12 mt-16 space-y-6">
        <h3 className="text-lg font-medium text-gray-900 tracking-wide">WHAT'S INCLUDED</h3>
        <div className="space-y-4 text-left max-w-md mx-auto">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="text-gray-600 font-light">Comprehensive interviewer background analysis</span>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="text-gray-600 font-light">Company culture and technical insights</span>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="text-gray-600 font-light">Curated {formData.role_focus?.toLowerCase()} practice materials</span>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="text-gray-600 font-light">Structured {formData.timeframe} preparation schedule</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <InterviewerStep />;
      case 1:
        return <CompanyStep />;
      case 2:
        return <InterviewDetailsStep />;
      case 3:
        return <SuccessStep />;
      default:
        return <InterviewerStep />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <ProgressBar />
        <StepHeader />
        
        <div className="mb-20">
          {renderStepContent()}
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div className={`max-w-2xl mx-auto mb-12 p-4 border-l-4 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-500 text-green-800' 
              : 'bg-red-50 border-red-500 text-red-800'
          }`}>
            <p className="font-light">{submitStatus.message}</p>
          </div>
        )}

        {/* Navigation */}
        {currentStep < 3 && (
          <div className="max-w-2xl mx-auto flex justify-between items-center pt-12 border-t border-gray-100">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center text-sm font-medium tracking-wide transition-all duration-200 ${
                currentStep === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-3" />
              PREVIOUS
            </button>

            <button
              type="button"
              onClick={currentStep === 2 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              className="flex items-center px-8 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3"></div>
                  PROCESSING
                </>
              ) : currentStep === 2 ? (
                <>
                  <Send className="h-4 w-4 mr-3" />
                  GENERATE PLAN
                </>
              ) : (
                <>
                  CONTINUE
                  <ArrowRight className="h-4 w-4 ml-3" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}