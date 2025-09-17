import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Clock, LogOut, Heart } from 'lucide-react';

const Header = ({ userName, petName, userType, onReset }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Getting location...');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Using a simple location format for demo
          setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        },
        () => {
          setLocation('Location unavailable');
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  const getUserTypeDisplay = () => {
    switch (userType) {
      case 'pet-owner': return 'Pet Owner';
      case 'veterinarian': return 'Veterinarian';
      case 'animal-shelter': return 'Animal Shelter';
      default: return '';
    }
  };

  const getGradientClass = () => {
    switch (userType) {
      case 'pet-owner': return 'pet-gradient';
      case 'veterinarian': return 'vet-gradient';
      case 'animal-shelter': return 'shelter-gradient';
      default: return 'gradient-bg';
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-r ${getGradientClass()} text-white shadow-lg sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="bg-white/20 p-2 rounded-full"
            >
              <Heart className="w-6 h-6" />
            </motion.div>
            <div>
              <h1 className="text-xl font-display font-bold">FurEver Care</h1>
              <p className="text-sm opacity-90">{getUserTypeDisplay()} Dashboard</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-6">
            {/* Location and Time */}
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </div>

            {/* User Name */}
            <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full">
              <User className="w-4 h-4" />
              <span className="font-medium">{userName}</span>
              {petName && (
                <>
                  <span className="opacity-60">•</span>
                  <span className="text-sm opacity-90">{petName}</span>
                </>
              )}
            </div>

            {/* Logout Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReset}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
