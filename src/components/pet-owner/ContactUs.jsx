import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, MessageSquare } from 'lucide-react';

const ContactUs = () => {
  const contactInfo = {
    address: "123 Pet Care Avenue, Animal District, PC 12345",
    phone: "(555) 123-PETS (7387)",
    email: "hello@furevercare.com",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
      weekends: "Saturday - Sunday: 9:00 AM - 6:00 PM",
      holidays: "Holidays: 10:00 AM - 4:00 PM"
    }
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian & Founder",
      phone: "(555) 123-4567",
      email: "sarah@furevercare.com",
      specialization: "Small Animal Medicine & Surgery",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300"
    },
    {
      name: "Mike Chen",
      role: "Pet Care Specialist",
      phone: "(555) 234-5678",
      email: "mike@furevercare.com",
      specialization: "Animal Behavior & Training",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Support Manager",
      phone: "(555) 345-6789",
      email: "emily@furevercare.com",
      specialization: "Client Relations & Support",
      image: "https://images.unsplash.com/photo-1594824388853-2c5899d87b98?w=300"
    },
    {
      name: "Dr. James Wilson",
      role: "Emergency Care Veterinarian",
      phone: "(555) 456-7890",
      email: "james@furevercare.com",
      specialization: "Emergency & Critical Care",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300"
    }
  ];

  const departments = [
    {
      name: "General Inquiries",
      description: "Questions about our services, pricing, or general information",
      contact: "info@furevercare.com",
      phone: "(555) 123-INFO",
      icon: "💬"
    },
    {
      name: "Technical Support",
      description: "Help with website issues, account problems, or technical difficulties",
      contact: "support@furevercare.com",
      phone: "(555) 123-TECH",
      icon: "🔧"
    },
    {
      name: "Emergency Services",
      description: "24/7 emergency pet care and urgent medical consultations",
      contact: "emergency@furevercare.com",
      phone: "(555) 123-HELP",
      icon: "🚨"
    },
    {
      name: "Partnerships",
      description: "Business partnerships, veterinary collaborations, and corporate inquiries",
      contact: "partners@furevercare.com",
      phone: "(555) 123-BIZ",
      icon: "🤝"
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
          <MapPin className="w-8 h-8 text-teal-500" />
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            {/* Main Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <a href={`tel:${contactInfo.phone}`} className="text-teal-600 hover:text-teal-800 text-sm">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-teal-600 hover:text-teal-800 text-sm">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Business Hours</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{contactInfo.hours.weekdays}</p>
                        <p>{contactInfo.hours.weekends}</p>
                        <p>{contactInfo.hours.holidays}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Google Maps integration would be embedded here</p>
                  <p className="text-gray-500 text-sm mt-2">{contactInfo.address}</p>
                </div>
              </div>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-teal-500" />
                Contact Departments
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{dept.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{dept.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                        <div className="space-y-1">
                          <a href={`mailto:${dept.contact}`} className="block text-teal-600 hover:text-teal-800 text-sm">
                            {dept.contact}
                          </a>
                          <a href={`tel:${dept.phone}`} className="block text-teal-600 hover:text-teal-800 text-sm">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Team Members */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-500" />
                Our Team
              </h3>
              
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{member.name}</h4>
                      <p className="text-teal-600 text-sm font-medium mb-1">{member.role}</p>
                      <p className="text-gray-600 text-xs mb-2">{member.specialization}</p>
                      <div className="space-y-1">
                        <a href={`tel:${member.phone}`} className="block text-gray-500 text-xs hover:text-teal-600">
                          {member.phone}
                        </a>
                        <a href={`mailto:${member.email}`} className="block text-gray-500 text-xs hover:text-teal-600">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6"
            >
              <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-teal-500 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-teal-600 transition-colors"
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block bg-blue-500 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  ✉️ Send Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">🌐 Follow Us Online</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Facebook: @FurEverCarePets</p>
                <p>Instagram: @furevercare</p>
                <p>Twitter: @FurEverCare</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">📱 Mobile App</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>iOS App Store</p>
                <p>Google Play Store</p>
                <p>Coming Soon!</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">💌 Newsletter</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Weekly pet care tips</p>
                <p>Product updates</p>
                <p>Special offers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
