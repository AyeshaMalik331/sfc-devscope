import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Home, ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = ({ onUserSelect }) => {
  const [firstName, setFirstName] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [petName, setPetName] = useState('');
  const [showPetForm, setShowPetForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !selectedType) return;
    
    if (selectedType === 'pet-owner' && !petName) {
      setShowPetForm(true);
      return;
    }
    
    onUserSelect(selectedType, firstName, petName);
  };

  const userTypes = [
    {
      id: 'pet-owner',
      title: 'Pet Owner',
      description: 'Manage your pet\'s care, health records, and find products',
      icon: Heart,
      gradient: 'pet-gradient',
      features: ['Pet Profile Management', 'Health Tracking', 'Product Discovery', 'Care Tips']
    },
    {
      id: 'veterinarian',
      title: 'Veterinarian',
      description: 'Access patient records, manage appointments, and provide care',
      icon: Stethoscope,
      gradient: 'vet-gradient',
      features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Treatment Plans']
    },
    {
      id: 'animal-shelter',
      title: 'Animal Shelter',
      description: 'Showcase adoptable pets and manage adoption processes',
      icon: Home,
      gradient: 'shelter-gradient',
      features: ['Pet Gallery', 'Adoption Management', 'Event Planning', 'Success Stories']
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-white animate-pulse" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4"
          >
            FurEver Care
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-600 mb-8 font-medium"
          >
            They Deserve Forever Love
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            Premium Pet Care Platform
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-display font-semibold text-gray-800 mb-6 text-center">
            Welcome! Let's Get Started
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your first name"
                required
              />
            </div>

            {showPetForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Pet's Name
                </label>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your pet's name"
                  required
                />
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                I am a...
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {userTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <motion.label
                      key={type.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      className={`cursor-pointer group ${
                        selectedType === type.id ? 'ring-2 ring-primary-500' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type.id}
                        checked={selectedType === type.id}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedType === type.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                      }`}>
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-display font-semibold text-gray-800 mb-2">
                          {type.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {type.description}
                        </p>
                        <ul className="space-y-1">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-500 flex items-center">
                              <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.label>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={!firstName || !selectedType}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 px-6 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 btn-animate"
          >
            Continue to Dashboard
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.form>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="grid md:grid-cols-3 gap-6 text-center"
        >
          {[
            { icon: '🏥', title: '24/7 Care Support', desc: 'Round-the-clock assistance' },
            { icon: '📱', title: 'Mobile Responsive', desc: 'Access anywhere, anytime' },
            { icon: '🔒', title: 'Secure & Private', desc: 'Your data is protected' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
