import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Book, Video, Headphones, ShoppingBag, Phone, MessageCircle, MapPin, Users } from 'lucide-react';
import PetProfile from './pet-owner/PetProfile';
import FeedingGuide from './pet-owner/FeedingGuide';
import GroomingVideos from './pet-owner/GroomingVideos';
import HealthTips from './pet-owner/HealthTips';
import TrainingTips from './pet-owner/TrainingTips';
import ProductShowcase from './pet-owner/ProductShowcase';
import EmergencyHelp from './pet-owner/EmergencyHelp';
import FeedbackForm from './pet-owner/FeedbackForm';
import ContactUs from './pet-owner/ContactUs';
import AboutUs from './pet-owner/AboutUs';

const PetOwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'Pet Profile', icon: Heart, color: 'bg-pink-500' },
    { id: 'feeding', label: 'Feeding Guide', icon: Book, color: 'bg-green-500' },
    { id: 'grooming', label: 'Grooming Videos', icon: Video, color: 'bg-blue-500' },
    { id: 'health', label: 'Health Tips', icon: Headphones, color: 'bg-red-500' },
    { id: 'training', label: 'Training Tips', icon: Users, color: 'bg-purple-500' },
    { id: 'products', label: 'Pet Products', icon: ShoppingBag, color: 'bg-orange-500' },
    { id: 'emergency', label: 'Emergency Help', icon: Phone, color: 'bg-red-600' },
    { id: 'feedback', label: 'Feedback', icon: MessageCircle, color: 'bg-indigo-500' },
    { id: 'contact', label: 'Contact Us', icon: MapPin, color: 'bg-teal-500' },
    { id: 'about', label: 'About Us', icon: Users, color: 'bg-gray-500' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'profile': return <PetProfile />;
      case 'feeding': return <FeedingGuide />;
      case 'grooming': return <GroomingVideos />;
      case 'health': return <HealthTips />;
      case 'training': return <TrainingTips />;
      case 'products': return <ProductShowcase />;
      case 'emergency': return <EmergencyHelp />;
      case 'feedback': return <FeedbackForm />;
      case 'contact': return <ContactUs />;
      case 'about': return <AboutUs />;
      default: return <PetProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Pet Care Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to keep your furry friend happy and healthy
          </p>
        </motion.div>

        {/* Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-4 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? `${item.color} text-white shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default PetOwnerDashboard;
