import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Star, ThumbsUp, AlertCircle } from 'lucide-react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    feedback: ''
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'general', label: 'General Feedback', icon: '💬' },
    { id: 'feature', label: 'Feature Request', icon: '💡' },
    { id: 'bug', label: 'Bug Report', icon: '🐛' },
    { id: 'support', label: 'Support Issue', icon: '🆘' },
    { id: 'compliment', label: 'Compliment', icon: '👏' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        rating: 0,
        category: '',
        feedback: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.feedback && formData.rating > 0;

  if (submitted) {
    return (
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ThumbsUp className="w-10 h-10 text-green-600" />
          </motion.div>
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
            Thank You for Your Feedback!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We appreciate you taking the time to share your thoughts with us.
          </p>
          <p className="text-gray-500">
            Your feedback helps us improve FurEver Care for all pet owners.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-indigo-500" />
          Share Your Feedback
        </h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoveredStar || formData.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </motion.button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-3 text-sm text-gray-600">
                      {formData.rating === 5 ? 'Excellent!' :
                       formData.rating === 4 ? 'Very Good' :
                       formData.rating === 3 ? 'Good' :
                       formData.rating === 2 ? 'Fair' : 'Poor'}
                    </span>
                  )}
                </div>
              </div>

              {/* Feedback Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Feedback Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {categories.map((category) => (
                    <motion.label
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.category === category.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={formData.category === category.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-2xl mb-1">{category.icon}</div>
                        <span className="text-xs font-medium text-gray-700">
                          {category.label}
                        </span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Feedback Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please share your thoughts, suggestions, or any issues you've encountered..."
                  required
                />
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {formData.feedback.length}/500 characters
                  </span>
                  {formData.feedback.length > 500 && (
                    <span className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Too long
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid || formData.feedback.length > 500}
                whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                  isFormValid && formData.feedback.length <= 500
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg btn-animate'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
                Submit Feedback
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              We Value Your Input
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">📝 What We Use Feedback For:</h4>
                <ul className="space-y-1">
                  <li>• Improving existing features</li>
                  <li>• Developing new functionality</li>
                  <li>• Enhancing user experience</li>
                  <li>• Fixing reported issues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">🔒 Privacy & Response:</h4>
                <ul className="space-y-1">
                  <li>• Your information is kept confidential</li>
                  <li>• We respond within 24-48 hours</li>
                  <li>• You'll receive updates on your feedback</li>
                  <li>• No spam or unwanted communications</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeedbackForm;
