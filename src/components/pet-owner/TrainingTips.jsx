import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Play, Pause, BookOpen, Award, Target } from 'lucide-react';

const TrainingTips = () => {
  const [selectedLevel, setSelectedLevel] = useState('basic');
  const [playingAudio, setPlayingAudio] = useState(null);

  const trainingLevels = {
    basic: {
      title: 'Basic Training (Puppies & Beginners)',
      color: 'bg-green-500',
      lessons: [
        {
          id: 1,
          title: 'House Training Fundamentals',
          type: 'audio',
          duration: '8:45',
          description: 'Establish a consistent routine for successful house training.',
          audioContent: 'House training requires patience and consistency. Start by establishing a regular schedule...',
          textGuide: [
            'Take your puppy outside first thing in the morning',
            'Go out after meals, naps, and play sessions',
            'Choose a specific spot for bathroom breaks',
            'Reward immediately after successful elimination',
            'Never punish accidents - clean thoroughly and move on'
          ]
        },
        {
          id: 2,
          title: 'Basic Commands: Sit, Stay, Come',
          type: 'audio',
          duration: '12:30',
          description: 'Master the essential commands every dog should know.',
          audioContent: 'The three most important commands form the foundation of all training...',
          textGuide: [
            'Start with "Sit" - hold treat above head, move back slowly',
            'Add "Stay" - open palm signal, step back gradually',
            'Practice "Come" in safe, enclosed areas first',
            'Use high-value treats and enthusiastic praise',
            'Keep training sessions short (5-10 minutes)'
          ]
        }
      ]
    },
    intermediate: {
      title: 'Intermediate Training (6+ months)',
      color: 'bg-blue-500',
      lessons: [
        {
          id: 3,
          title: 'Leash Training & Walking Etiquette',
          type: 'audio',
          duration: '10:15',
          description: 'Teach proper leash manners and enjoyable walks.',
          audioContent: 'Good leash manners make walks enjoyable for both you and your dog...',
          textGuide: [
            'Start with short sessions in familiar areas',
            'Use positive reinforcement when dog walks beside you',
            'Stop moving when dog pulls - resume when leash is loose',
            'Practice direction changes to keep dog engaged',
            'Gradually increase distance and add distractions'
          ]
        },
        {
          id: 4,
          title: 'Addressing Jumping & Excessive Barking',
          type: 'audio',
          duration: '9:20',
          description: 'Manage common behavioral issues with positive methods.',
          audioContent: 'Jumping and barking are natural behaviors that need proper channeling...',
          textGuide: [
            'Ignore jumping - turn away and avoid eye contact',
            'Reward calm greetings with attention and treats',
            'Identify barking triggers and work on desensitization',
            'Teach "Quiet" command using treats and timing',
            'Provide mental stimulation to reduce boredom barking'
          ]
        }
      ]
    },
    advanced: {
      title: 'Advanced Training (1+ years)',
      color: 'bg-purple-500',
      lessons: [
        {
          id: 5,
          title: 'Off-Leash Recall Training',
          type: 'audio',
          duration: '15:45',
          description: 'Build reliable recall for safe off-leash adventures.',
          audioContent: 'Off-leash recall is the ultimate test of your training relationship...',
          textGuide: [
            'Master recall on long line first (20-30 feet)',
            'Practice in gradually increasing distractions',
            'Use recall command sparingly - make it special',
            'Always reward generously when dog comes',
            'Never call dog to come for something unpleasant'
          ]
        },
        {
          id: 6,
          title: 'Trick Training & Mental Stimulation',
          type: 'audio',
          duration: '11:30',
          description: 'Advanced tricks and games for mental enrichment.',
          audioContent: 'Trick training strengthens your bond while providing mental exercise...',
          textGuide: [
            'Break complex tricks into small steps',
            'Use shaping - reward approximations of desired behavior',
            'Practice puzzle games and scent work',
            'Rotate toys and activities to maintain interest',
            'End training sessions on a positive note'
          ]
        }
      ]
    }
  };

  const toggleAudio = (lessonId) => {
    setPlayingAudio(playingAudio === lessonId ? null : lessonId);
  };

  const currentLessons = trainingLevels[selectedLevel];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-purple-500" />
          Training Tips & Audio Guides
        </h2>

        {/* Level Selection */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(trainingLevels).map(([level, data]) => (
            <motion.button
              key={level}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLevel(level)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                selectedLevel === level
                  ? `${data.color} text-white border-transparent shadow-lg`
                  : 'bg-white border-gray-200 hover:border-purple-300 text-gray-700'
              }`}
            >
              <h3 className="font-semibold text-lg mb-2">{data.title}</h3>
              <p className="text-sm opacity-90">
                {data.lessons.length} lessons available
              </p>
            </motion.button>
          ))}
        </div>

        {/* Training Lessons */}
        <motion.div
          key={selectedLevel}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {currentLessons.title}
          </h3>

          <div className="space-y-6">
            {currentLessons.lessons.map((lesson, index) => {
              const isPlaying = playingAudio === lesson.id;

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleAudio(lesson.id)}
                      className={`${currentLessons.color} text-white p-4 rounded-full shadow-lg`}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </motion.button>

                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{lesson.title}</h4>
                      <p className="text-gray-600 mb-3">{lesson.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Duration: {lesson.duration}</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          AUDIO + TEXT
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Player Simulation */}
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 rounded-lg p-4 mb-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-purple-500 h-2 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '35%' }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 whitespace-nowrap">3:15 / {lesson.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Now Playing Audio Guide</span>
                      </div>
                      <p className="text-sm text-gray-600 italic mt-3">{lesson.audioContent}</p>
                    </motion.div>
                  )}

                  {/* Text-Based Guide */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h5 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-500" />
                      Step-by-Step Guide
                    </h5>
                    <div className="space-y-3">
                      {lesson.textGuide.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + stepIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <p className="text-gray-700 text-sm">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Training Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-500" />
            Core Training Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Positive Reinforcement",
                description: "Reward good behavior immediately with treats, praise, or play",
                icon: "🏆"
              },
              {
                title: "Consistency",
                description: "Use the same commands and rules every time for clear communication",
                icon: "🔄"
              },
              {
                title: "Patience",
                description: "Learning takes time - stay calm and persistent with your training",
                icon: "⏰"
              },
              {
                title: "Short Sessions",
                description: "Keep training sessions brief (5-15 minutes) to maintain focus",
                icon: "⚡"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{principle.title}</h4>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6"
        >
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Training Milestones
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { milestone: "First Successful Sit", badge: "🥉", status: "completed" },
              { milestone: "Week of Consistent Training", badge: "🥈", status: "in-progress" },
              { milestone: "Perfect Recall", badge: "🥇", status: "locked" }
            ].map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.status === 'completed' ? 'border-green-200 bg-green-50' :
                  achievement.status === 'in-progress' ? 'border-yellow-200 bg-yellow-50' :
                  'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{achievement.badge}</div>
                  <p className="text-sm font-medium text-gray-800">{achievement.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrainingTips;
