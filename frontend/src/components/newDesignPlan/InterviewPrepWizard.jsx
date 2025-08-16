'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Briefcase, User, Globe, Calendar, Github, Linkedin, Twitter, FileText, Sparkles, Target, Clock, Building2, CheckCircle2 } from 'lucide-react';

const InterviewPrepSetup = () => {
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
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      id: 'interviewer-name',
      title: "Who's interviewing you?",
      subtitle: "Let's start with your interviewer's name to personalize your prep",
      field: 'interviewer.name',
      icon: <User className="w-6 h-6" />,
      placeholder: "e.g., Jane Smith",
      required: true,
      tip: "This helps us tailor conversation starters and research talking points"
    },
    {
      id: 'interviewer-social',
      title: "Interviewer's online presence",
      subtitle: "Share any profiles to help us research their background and interests",
      fields: [
        { key: 'interviewer.linkedin', placeholder: 'LinkedIn profile URL', icon: <Linkedin className="w-4 h-4" />, type: 'url' },
        { key: 'interviewer.github', placeholder: 'GitHub profile URL', icon: <Github className="w-4 h-4" />, type: 'url' },
        { key: 'interviewer.twitter', placeholder: 'Twitter/X profile URL', icon: <Twitter className="w-4 h-4" />, type: 'url' },
        { key: 'interviewer.pdf_url', placeholder: 'Resume or bio PDF URL', icon: <FileText className="w-4 h-4" />, type: 'url' }
      ],
      icon: <Globe className="w-6 h-6" />,
      multiple: true,
      tip: "All fields are optional - add what you have available"
    },
    {
      id: 'company-info',
      title: "About the company",
      subtitle: "Help us understand the organization and culture you're joining",
      fields: [
        { key: 'company.name', placeholder: 'Company name', required: true, icon: <Building2 className="w-4 h-4" /> },
        { key: 'company.website', placeholder: 'Company website URL', type: 'url', icon: <Globe className="w-4 h-4" /> }
      ],
      icon: <Briefcase className="w-6 h-6" />,
      multiple: true,
      tip: "We'll research their tech stack, recent news, and company values"
    },
    {
      id: 'interview-details',
      title: "Interview specifics",
      subtitle: "The final details to create your personalized prep plan",
      fields: [
        { key: 'role_focus', placeholder: 'Interview focus (e.g., System Design, DSA, Behavioral)', required: true, icon: <Target className="w-4 h-4" /> },
        { key: 'timeframe', placeholder: 'Interview timeline (e.g., Next Friday, 2 weeks)', required: true, icon: <Clock className="w-4 h-4" /> }
      ],
      icon: <Calendar className="w-6 h-6" />,
      multiple: true,
      tip: "This helps us prioritize what to focus on based on your available time"
    }
  ];

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj) || '';
  };

  const setNestedValue = (obj, path, value) => {
    const keys = path.split('.');
    const newObj = { ...obj };
    let current = newObj;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    return newObj;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => setNestedValue(prev, field, value));
  };

  const isStepComplete = (step) => {
    if (step.field) {
      const value = getNestedValue(formData, step.field);
      return step.required ? value.trim() !== '' : true;
    }
    
    if (step.fields) {
      const requiredFields = step.fields.filter(f => f.required);
      if (requiredFields.length === 0) return true;
      return requiredFields.every(f => getNestedValue(formData, f.key).trim() !== '');
    }
    
    return true;
  };

  const handleNext = () => {
    if (isStepComplete(steps[currentStep])) {
      setIsAnimating(true);
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          // Final step - show completion
          console.log('Interview Prep Data:', formData);
          // In a real app, this would submit to an API
          setCurrentStep(steps.length); // Show success screen
        }
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isStepComplete(steps[currentStep])) {
      handleNext();
    } else if (e.key === 'Escape' && currentStep > 0) {
      handlePrevious();
    }
  };

  const validateUrl = (url) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Success screen
  if (currentStep === steps.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mb-8 mx-auto animate-pulse">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Setup Complete! 🎉</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Your personalized interview prep plan is ready. We'll research your interviewer, 
            analyze the company, and create targeted practice questions.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Next Steps:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Research interviewer background</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Analyze company tech stack</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Generate practice questions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Create study timeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-indigo-600">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm font-medium text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start gap-6 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                {currentStepData.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {currentStepData.title}
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 mb-4">
                  {currentStepData.subtitle}
                </p>
                {currentStepData.tip && (
                  <div className="flex items-start gap-2 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                    <Sparkles className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-indigo-700">{currentStepData.tip}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Single Input Field */}
            {currentStepData.field && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={getNestedValue(formData, currentStepData.field)}
                    onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={currentStepData.placeholder}
                    className="w-full px-6 py-6 text-xl border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all duration-200 focus:shadow-lg"
                    autoFocus
                  />
                  {currentStepData.required && getNestedValue(formData, currentStepData.field) && (
                    <CheckCircle className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-500" />
                  )}
                </div>
              </div>
            )}

            {/* Multiple Input Fields */}
            {currentStepData.fields && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {currentStepData.fields.map((field, index) => {
                    const value = getNestedValue(formData, field.key);
                    const isValid = field.type === 'url' ? validateUrl(value) : true;
                    
                    return (
                      <div key={field.key} className="relative">
                        <div className={`flex items-center gap-4 p-6 border-2 rounded-2xl transition-all duration-200 focus-within:shadow-lg ${
                          !isValid ? 'border-red-300' : 'border-gray-200 focus-within:border-indigo-500'
                        }`}>
                          <div className={`flex-shrink-0 ${field.required ? 'text-indigo-500' : 'text-gray-400'}`}>
                            {field.icon}
                          </div>
                          <input
                            type={field.type || 'text'}
                            value={value}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder={field.placeholder}
                            className="flex-1 text-lg border-none outline-none bg-transparent"
                            autoFocus={index === 0}
                          />
                          {field.required && (
                            <span className="text-red-400 text-sm flex-shrink-0">*</span>
                          )}
                          {value && isValid && (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                        {!isValid && value && (
                          <p className="text-red-500 text-sm mt-2 ml-2">Please enter a valid URL</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* Step indicators */}
                <div className="flex gap-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        completedSteps.has(index)
                          ? 'bg-green-500 scale-110' 
                          : index === currentStep 
                            ? 'bg-indigo-500 scale-110' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Back button */}
                {currentStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
              </div>

              {/* Next/Complete button */}
              <button
                onClick={handleNext}
                disabled={!isStepComplete(currentStepData)}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-medium rounded-2xl hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Complete Setup
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Help text */}
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> to continue
            {currentStep > 0 && (
              <>
                {' • '}
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd> to go back
              </>
            )}
            {' • Fields marked with * are required'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepSetup;