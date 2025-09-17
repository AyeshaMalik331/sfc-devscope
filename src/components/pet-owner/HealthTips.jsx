import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Play, Pause, Volume2, VolumeX, FileText, Stethoscope } from 'lucide-react';

const HealthTips = () => {
  const [playingAudio, setPlayingAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const healthCategories = [
    {
      id: 'oral-care',
      title: 'Oral Care & Dental Health',
      icon: '🦷',
      content: [
        {
          id: 1,
          type: 'audio',
          title: 'Daily Dental Care Routine',
          duration: '4:32',
          description: 'Learn the importance of daily teeth brushing and dental treats for your pet.',
          transcript: 'Dental health is crucial for your pet\'s overall wellbeing. Start by introducing tooth brushing gradually...'
        },
        {
          id: 2,
          type: 'video',
          title: 'Signs of Dental Problems',
          duration: '6:15',
          description: 'Recognize early warning signs of dental issues in pets.',
          transcript: 'Watch for bad breath, yellow tartar buildup, red or swollen gums, and difficulty eating...'
        }
      ]
    },
    {
      id: 'weight-management',
      title: 'Weight Management',
      icon: '⚖️',
      content: [
        {
          id: 3,
          type: 'audio',
          title: 'Healthy Weight Guidelines',
          duration: '5:45',
          description: 'Understanding ideal weight ranges and body condition scoring.',
          transcript: 'Maintaining a healthy weight is essential for your pet\'s longevity and quality of life...'
        },
        {
          id: 4,
          type: 'video',
          title: 'Exercise Plans for Different Ages',
          duration: '8:20',
          description: 'Age-appropriate exercise routines for puppies, adults, and senior pets.',
          transcript: 'Exercise needs vary significantly based on your pet\'s age, breed, and health status...'
        }
      ]
    },
    {
      id: 'common-conditions',
      title: 'Common Health Conditions',
      icon: '🏥',
      content: [
        {
          id: 5,
          type: 'audio',
          title: 'Recognizing Allergies',
          duration: '7:10',
          description: 'Identifying and managing common allergies in pets.',
          transcript: 'Pet allergies can manifest in various ways including skin irritation, digestive issues...'
        },
        {
          id: 6,
          type: 'video',
          title: 'First Aid Basics',
          duration: '12:30',
          description: 'Essential first aid techniques every pet owner should know.',
          transcript: 'In emergency situations, knowing basic first aid can save your pet\'s life...'
        }
      ]
    }
  ];

  const toggleAudio = (contentId) => {
    if (playingAudio === contentId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(contentId);
    }
  };

  const getTypeIcon = (type) => {
    return type === 'audio' ? Volume2 : Play;
  };

  const getTypeColor = (type) => {
    return type === 'audio' ? 'bg-green-500' : 'bg-blue-500';
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-500" />
          Health Tips & Audio Guides
        </h2>

        {/* Health Categories */}
        <div className="space-y-8">
          {healthCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {category.content.map((content, contentIndex) => {
                  const TypeIcon = getTypeIcon(content.type);
                  const isPlaying = playingAudio === content.id;

                  return (
                    <motion.div
                      key={content.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.2 + contentIndex * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleAudio(content.id)}
                          className={`${getTypeColor(content.type)} text-white p-3 rounded-full shadow-lg`}
                        >
                          {content.type === 'audio' ? (
                            isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6" />
                          )}
                        </motion.button>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-semibold text-gray-800">{content.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              content.type === 'audio' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {content.type.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{content.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Duration: {content.duration}</span>
                            {content.type === 'audio' && (
                              <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="flex items-center gap-1 hover:text-gray-700"
                              >
                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                {isMuted ? 'Unmute' : 'Mute'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Audio/Video Player Simulation */}
                      {isPlaying && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-50 rounded-lg p-4 mb-4"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-green-500 h-2 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: '45%' }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 whitespace-nowrap">2:03 / {content.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">Now Playing</span>
                          </div>
                        </motion.div>
                      )}

                      {/* Transcript */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Transcript Preview
                        </h5>
                        <p className="text-sm text-gray-600 italic">{content.transcript}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Health Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <Stethoscope className="w-6 h-6 text-red-500" />
            Daily Health Checklist
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { item: "Check eyes for discharge or redness", icon: "👁️" },
              { item: "Examine ears for odor or wax buildup", icon: "👂" },
              { item: "Feel for lumps or bumps during petting", icon: "🤲" },
              { item: "Monitor eating and drinking habits", icon: "🍽️" },
              { item: "Observe energy levels and behavior", icon: "⚡" },
              { item: "Check for limping or mobility issues", icon: "🦵" },
              { item: "Look for changes in bathroom habits", icon: "🚽" },
              { item: "Assess coat condition and skin health", icon: "🧴" },
              { item: "Monitor breathing patterns", icon: "💨" }
            ].map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
              >
                <span className="text-2xl">{check.icon}</span>
                <span className="text-sm text-gray-700">{check.item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-red-100 border-l-4 border-red-500 rounded-lg p-6"
        >
          <h4 className="font-semibold text-red-800 mb-2">⚠️ When to Seek Immediate Veterinary Care</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-red-700">
            <ul className="space-y-1">
              <li>• Difficulty breathing or choking</li>
              <li>• Severe vomiting or diarrhea</li>
              <li>• Signs of extreme pain</li>
              <li>• Seizures or loss of consciousness</li>
            </ul>
            <ul className="space-y-1">
              <li>• Suspected poisoning</li>
              <li>• Severe injuries or bleeding</li>
              <li>• Inability to urinate</li>
              <li>• Bloated or distended abdomen</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HealthTips;
