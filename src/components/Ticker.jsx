import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Bell } from 'lucide-react';

const Ticker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Getting location...');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        },
        () => {
          setLocation('Location unavailable');
        }
      );
    }

    return () => clearInterval(timer);
  }, []);

  const updates = [
    "🏥 New veterinary clinic opened in downtown area",
    "🎉 Pet adoption drive this weekend at Central Park",
    "💊 Vaccination reminder: Check your pet's schedule",
    "🐕 Dog training classes available every Tuesday",
    "🐱 Cat grooming special offer - 20% off this month",
    "📱 New mobile app features now available",
    "🏆 Pet of the month contest - Submit your entries now"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 py-2 px-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{currentTime.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-hidden">
          <Bell className="w-4 h-4 flex-shrink-0" />
          <div className="overflow-hidden">
            <motion.div
              className="ticker whitespace-nowrap"
              animate={{ x: [1000, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {updates.join(" • ")}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ticker;
