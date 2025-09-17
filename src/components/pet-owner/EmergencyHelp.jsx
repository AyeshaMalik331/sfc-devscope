import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertTriangle, Clock, MapPin, Heart } from 'lucide-react';

const EmergencyHelp = () => {
  const [selectedRegion, setSelectedRegion] = useState('general');

  const emergencyContacts = {
    general: [
      {
        name: "Pet Poison Helpline",
        phone: "(855) 764-7661",
        available: "24/7",
        description: "Emergency assistance for pet poisoning cases",
        type: "poison"
      },
      {
        name: "ASPCA Animal Poison Control",
        phone: "(888) 426-4435",
        available: "24/7",
        description: "Professional poison control for animals",
        type: "poison"
      },
      {
        name: "Emergency Veterinary Services",
        phone: "(555) 123-PETS",
        available: "24/7",
        description: "After-hours emergency veterinary care",
        type: "emergency"
      }
    ],
    local: [
      {
        name: "City Animal Hospital",
        phone: "(555) 234-5678",
        address: "123 Main Street, Downtown",
        available: "Mon-Fri 8AM-8PM, Weekends 9AM-6PM",
        description: "Full-service veterinary hospital with emergency care",
        type: "hospital"
      },
      {
        name: "24/7 Pet Emergency Center",
        phone: "(555) 345-6789",
        address: "456 Emergency Blvd, Medical District",
        available: "24/7",
        description: "Dedicated emergency and critical care facility",
        type: "emergency"
      },
      {
        name: "Mobile Vet Services",
        phone: "(555) 456-7890",
        available: "Daily 7AM-10PM",
        description: "In-home veterinary care and emergency visits",
        type: "mobile"
      }
    ]
  };

  const poisonousItems = [
    { item: "Chocolate", danger: "High", symptoms: "Vomiting, diarrhea, seizures" },
    { item: "Grapes/Raisins", danger: "High", symptoms: "Kidney failure, lethargy" },
    { item: "Onions/Garlic", danger: "Medium", symptoms: "Anemia, weakness" },
    { item: "Xylitol (Sugar substitute)", danger: "High", symptoms: "Hypoglycemia, liver failure" },
    { item: "Avocado", danger: "Medium", symptoms: "Digestive upset, breathing difficulty" },
    { item: "Alcohol", danger: "High", symptoms: "Vomiting, diarrhea, coma" },
    { item: "Caffeine", danger: "Medium", symptoms: "Restlessness, rapid breathing" },
    { item: "Macadamia Nuts", danger: "Medium", symptoms: "Weakness, vomiting, hyperthermia" }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Stay Calm",
      description: "Keep yourself and your pet as calm as possible",
      icon: "🧘"
    },
    {
      step: 2,
      title: "Assess the Situation",
      description: "Determine if it's truly an emergency requiring immediate care",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Call Ahead",
      description: "Contact the emergency clinic to inform them you're coming",
      icon: "📞"
    },
    {
      step: 4,
      title: "Safe Transport",
      description: "Transport your pet safely, using a carrier if possible",
      icon: "🚗"
    },
    {
      step: 5,
      title: "Bring Information",
      description: "Bring medical records, medications, and incident details",
      icon: "📋"
    }
  ];

  const getDangerColor = (danger) => {
    switch (danger) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'poison': return '☠️';
      case 'emergency': return '🚨';
      case 'hospital': return '🏥';
      case 'mobile': return '🚐';
      default: return '📞';
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
          <Phone className="w-8 h-8 text-red-500" />
          Emergency & Veterinary Help
        </h2>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">Emergency Situations</h3>
          </div>
          <p className="text-red-700 mb-3">
            If your pet is experiencing any of the following, seek immediate veterinary care:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-red-700">
            <ul className="space-y-1">
              <li>• Difficulty breathing or choking</li>
              <li>• Severe bleeding or trauma</li>
              <li>• Loss of consciousness or seizures</li>
              <li>• Suspected poisoning</li>
            </ul>
            <ul className="space-y-1">
              <li>• Inability to urinate or defecate</li>
              <li>• Severe vomiting or diarrhea</li>
              <li>• Signs of extreme pain</li>
              <li>• Bloated or distended abdomen</li>
            </ul>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Emergency Contacts</h3>
              
              {/* Contact Type Selection */}
              <div className="flex gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRegion('general')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedRegion === 'general'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  National Hotlines
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRegion('local')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedRegion === 'local'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Local Veterinarians
                </motion.button>
              </div>

              {/* Contact List */}
              <div className="space-y-4">
                {emergencyContacts[selectedRegion].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{getTypeIcon(contact.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{contact.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{contact.description}</p>
                        {contact.address && (
                          <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {contact.address}
                          </p>
                        )}
                        <div className="flex items-center gap-4">
                          <a
                            href={`tel:${contact.phone}`}
                            className="font-mono text-lg text-red-600 hover:text-red-800 font-semibold"
                          >
                            {contact.phone}
                          </a>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {contact.available}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Emergency Response Steps</h3>
              <div className="space-y-4">
                {emergencySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="text-2xl">{step.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Poisonous Items Reference */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Toxic Items Reference
              </h3>
              <div className="space-y-3">
                {poisonousItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className={`p-3 rounded-lg border ${getDangerColor(item.danger)}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{item.item}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-white bg-opacity-50">
                        {item.danger} Risk
                      </span>
                    </div>
                    <p className="text-xs opacity-80">{item.symptoms}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6"
            >
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-500" />
                Quick Tips
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Keep your vet's contact info easily accessible</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Have a pet first aid kit ready at home</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Know the location of nearest emergency clinic</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Keep medical records and medications handy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmergencyHelp;
