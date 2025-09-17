import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, Calendar, TrendingUp, Info } from 'lucide-react';

const FeedingGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('puppy');

  const feedingData = {
    puppy: {
      title: "Puppy Feeding Guide (2-12 months)",
      color: "bg-yellow-500",
      schedule: [
        { age: "2-3 months", meals: "4 times daily", amount: "1/4 - 1/2 cup per meal", time: "6AM, 12PM, 6PM, 10PM" },
        { age: "4-5 months", meals: "3 times daily", amount: "1/2 - 3/4 cup per meal", time: "7AM, 1PM, 7PM" },
        { age: "6-12 months", meals: "2 times daily", amount: "3/4 - 1 cup per meal", time: "8AM, 6PM" }
      ],
      tips: [
        "Use high-quality puppy food with DHA for brain development",
        "Maintain consistent feeding times",
        "Monitor weight gain - puppies should gain 2-4 lbs per week",
        "Always provide fresh water"
      ]
    },
    adult: {
      title: "Adult Dog Feeding Guide (1-7 years)",
      color: "bg-blue-500",
      schedule: [
        { age: "Small breeds (under 25 lbs)", meals: "2 times daily", amount: "1/4 - 3/4 cup per meal", time: "8AM, 6PM" },
        { age: "Medium breeds (25-60 lbs)", meals: "2 times daily", amount: "1 - 2 cups per meal", time: "8AM, 6PM" },
        { age: "Large breeds (over 60 lbs)", meals: "2 times daily", amount: "2 - 4 cups per meal", time: "8AM, 6PM" }
      ],
      tips: [
        "Choose food appropriate for your dog's size and activity level",
        "Divide daily food into two meals to prevent bloating",
        "Adjust portions based on body condition",
        "Treats should not exceed 10% of daily calories"
      ]
    },
    senior: {
      title: "Senior Dog Feeding Guide (7+ years)",
      color: "bg-purple-500",
      schedule: [
        { age: "7-10 years", meals: "2 times daily", amount: "Reduce by 10-20%", time: "8AM, 6PM" },
        { age: "10+ years", meals: "2-3 smaller meals", amount: "Reduce by 20-30%", time: "8AM, 2PM, 7PM" }
      ],
      tips: [
        "Switch to senior formula with joint support",
        "Monitor for weight gain due to reduced activity",
        "Consider softer foods for dental issues",
        "Regular vet checkups for dietary adjustments"
      ]
    },
    cat: {
      title: "Cat Feeding Guide (All Ages)",
      color: "bg-pink-500",
      schedule: [
        { age: "Kitten (2-12 months)", meals: "3-4 times daily", amount: "1/4 - 1/2 cup per meal", time: "6AM, 12PM, 6PM, 10PM" },
        { age: "Adult (1-7 years)", meals: "2 times daily", amount: "1/4 - 1/2 cup per meal", time: "8AM, 6PM" },
        { age: "Senior (7+ years)", meals: "2-3 times daily", amount: "Adjust for activity", time: "8AM, 2PM, 7PM" }
      ],
      tips: [
        "Cats prefer multiple small meals throughout the day",
        "Wet food helps with hydration",
        "Keep food and water bowls separate",
        "Monitor for hairball prevention needs"
      ]
    }
  };

  const categories = [
    { id: 'puppy', label: 'Puppy', icon: '🐶' },
    { id: 'adult', label: 'Adult Dog', icon: '🐕' },
    { id: 'senior', label: 'Senior Dog', icon: '🐕‍🦺' },
    { id: 'cat', label: 'Cat', icon: '🐱' }
  ];

  const currentData = feedingData[selectedCategory];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Utensils className="w-8 h-8 text-green-500" />
          Feeding Guide
        </h2>

        {/* Category Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50 shadow-lg'
                  : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <span className="font-semibold text-gray-800">{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Feeding Schedule */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Schedule Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                {currentData.title}
              </h3>
              
              <div className="space-y-4">
                {currentData.schedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4"
                  >
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Age/Size</label>
                        <p className="font-semibold text-gray-800">{item.age}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Frequency</label>
                        <p className="font-semibold text-gray-800 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.meals}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Amount</label>
                        <p className="font-semibold text-gray-800">{item.amount}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Timing</label>
                        <p className="text-sm text-gray-700">{item.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips and Guidelines */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-yellow-500" />
                Feeding Tips
              </h3>
              <div className="space-y-3">
                {currentData.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Nutrition Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Nutrition Balance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Protein</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-blue-500"></div>
                    </div>
                    <span className="text-sm font-medium">25-30%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fat</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-medium">15-20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Carbs</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-2/5 h-full bg-yellow-500"></div>
                    </div>
                    <span className="text-sm font-medium">30-50%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fiber</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-1/5 h-full bg-purple-500"></div>
                    </div>
                    <span className="text-sm font-medium">3-5%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeedingGuide;
