import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Target, Shield, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Pet Families', icon: '🏠' },
    { number: '50+', label: 'Veterinary Partners', icon: '🏥' },
    { number: '24/7', label: 'Support Available', icon: '🕐' },
    { number: '5★', label: 'Average Rating', icon: '⭐' }
  ];

  const values = [
    {
      title: 'Compassionate Care',
      description: 'Every pet deserves love, attention, and the best possible care throughout their life.',
      icon: Heart,
      color: 'bg-pink-500'
    },
    {
      title: 'Expert Knowledge',
      description: 'Our team consists of certified veterinarians and pet care specialists with years of experience.',
      icon: Award,
      color: 'bg-blue-500'
    },
    {
      title: 'Innovation',
      description: 'We leverage technology to make pet care more accessible, convenient, and effective.',
      icon: Sparkles,
      color: 'bg-purple-500'
    },
    {
      title: 'Trust & Safety',
      description: 'Your pet\'s safety and your trust are our top priorities in everything we do.',
      icon: Shield,
      color: 'bg-green-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'FurEver Care Founded',
      description: 'Started with a mission to revolutionize pet care through technology and compassion.'
    },
    {
      year: '2021',
      title: 'First 1,000 Users',
      description: 'Reached our first milestone of helping 1,000 pet families manage their pet care.'
    },
    {
      year: '2022',
      title: 'Veterinary Partnerships',
      description: 'Established partnerships with 25+ veterinary clinics for comprehensive care.'
    },
    {
      year: '2023',
      title: 'Mobile App Launch',
      description: 'Launched our mobile application for on-the-go pet care management.'
    },
    {
      year: '2024',
      title: '10,000+ Happy Families',
      description: 'Celebrating over 10,000 pet families who trust us with their furry friends.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Chief Veterinarian',
      bio: 'With 15+ years in veterinary medicine, Dr. Johnson founded FurEver Care to bridge the gap between pet owners and quality care.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Technology',
      bio: 'Former software engineer at major tech companies, Mike leads our platform development and innovation initiatives.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience Director',
      bio: 'Emily ensures every interaction with FurEver Care exceeds expectations and builds lasting relationships.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300'
    }
  ];

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-gray-500" />
          About FurEver Care
        </h2>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>
          
          <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
            They Deserve Forever Love
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            FurEver Care is more than just a pet care platform – we're a community dedicated to ensuring every pet receives the love, attention, and professional care they deserve throughout their entire life.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize pet care by providing comprehensive, accessible, and technology-driven solutions that strengthen the bond between pets and their families while ensuring the highest standards of health and happiness for every animal in our care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A world where every pet receives exceptional care, where pet ownership is supported by expert knowledge and community, and where the human-animal bond is celebrated and nurtured through innovative, compassionate services.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h4 className="font-semibold text-gray-800 text-lg mb-1">{member.name}</h4>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Join the FurEver Care Family</h3>
          <p className="text-lg mb-6 opacity-90">
            Ready to give your pet the care they deserve? Join thousands of pet families who trust FurEver Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
