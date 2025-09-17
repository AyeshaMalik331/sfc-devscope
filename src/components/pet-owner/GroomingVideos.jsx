import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Play, Clock, Star, BookOpen } from 'lucide-react';

const GroomingVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoCategories = [
    {
      id: 'brushing',
      title: 'Brushing Techniques',
      icon: '🪮',
      videos: [
        {
          id: 1,
          title: 'Daily Brushing for Long-Haired Dogs',
          duration: '8:45',
          difficulty: 'Beginner',
          rating: 4.8,
          thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
          description: 'Learn proper brushing techniques to prevent matting and reduce shedding.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 2,
          title: 'Brushing Short-Haired Cats',
          duration: '5:30',
          difficulty: 'Beginner',
          rating: 4.6,
          thumbnail: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400',
          description: 'Gentle brushing techniques for cats who are sensitive to grooming.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
      ]
    },
    {
      id: 'bathing',
      title: 'Bathing & Washing',
      icon: '🛁',
      videos: [
        {
          id: 3,
          title: 'How to Bathe Your Dog Safely',
          duration: '12:20',
          difficulty: 'Intermediate',
          rating: 4.9,
          thumbnail: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
          description: 'Step-by-step guide to bathing your dog without stress.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 4,
          title: 'Waterless Bath Solutions',
          duration: '6:15',
          difficulty: 'Beginner',
          rating: 4.4,
          thumbnail: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400',
          description: 'Alternative cleaning methods for pets who hate water.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
      ]
    },
    {
      id: 'trimming',
      title: 'Nail Trimming & Cutting',
      icon: '✂️',
      videos: [
        {
          id: 5,
          title: 'Safe Nail Trimming Techniques',
          duration: '9:10',
          difficulty: 'Intermediate',
          rating: 4.7,
          thumbnail: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400',
          description: 'Learn to trim nails safely without causing pain or bleeding.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 6,
          title: 'Ear Cleaning Basics',
          duration: '7:30',
          difficulty: 'Beginner',
          rating: 4.5,
          thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
          description: 'Proper ear cleaning to prevent infections and maintain hygiene.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Video className="w-8 h-8 text-blue-500" />
          Grooming Video Tutorials
        </h2>

        {/* Video Player Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Video Player Placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">
                    In a real implementation, this would embed: {selectedVideo.embedUrl}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{selectedVideo.description}</p>
            </motion.div>
          </motion.div>
        )}

        {/* Video Categories */}
        <div className="space-y-8">
          {videoCategories.map((category, categoryIndex) => (
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
                {category.videos.map((video, videoIndex) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.2 + videoIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(video.difficulty)}`}>
                            {video.difficulty}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{video.rating}</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                        >
                          Watch Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grooming Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-purple-500" />
            Essential Grooming Tips
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Start Early",
                tip: "Introduce grooming routines when pets are young to build positive associations.",
                icon: "🐾"
              },
              {
                title: "Use Proper Tools",
                tip: "Invest in quality brushes, clippers, and nail trimmers designed for your pet's coat type.",
                icon: "🛠️"
              },
              {
                title: "Stay Calm",
                tip: "Your pet can sense your emotions. Stay relaxed and patient during grooming sessions.",
                icon: "😌"
              },
              {
                title: "Reward Good Behavior",
                tip: "Use treats and praise to make grooming a positive experience for your pet.",
                icon: "🦴"
              },
              {
                title: "Regular Schedule",
                tip: "Maintain a consistent grooming schedule to keep your pet's coat and skin healthy.",
                icon: "📅"
              },
              {
                title: "Know When to Stop",
                tip: "If your pet becomes stressed, take breaks or consider professional grooming services.",
                icon: "⏸️"
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GroomingVideos;
