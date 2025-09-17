import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Weight, Ruler, Shield, Award } from 'lucide-react';

const PetProfile = () => {
  const petData = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "28 kg",
    height: "60 cm",
    color: "Golden",
    microchipId: "982000123456789",
    vaccinations: [
      { name: "Rabies", date: "2024-01-15", nextDue: "2025-01-15", status: "Current" },
      { name: "DHPP", date: "2024-02-10", nextDue: "2025-02-10", status: "Current" },
      { name: "Bordetella", date: "2024-03-05", nextDue: "2024-09-05", status: "Due Soon" }
    ],
    medicalHistory: [
      { date: "2024-01-15", procedure: "Annual Checkup", vet: "Dr. Smith", notes: "Healthy, no issues" },
      { date: "2023-12-20", procedure: "Dental Cleaning", vet: "Dr. Johnson", notes: "Good dental health" },
      { date: "2023-11-10", procedure: "Vaccination Update", vet: "Dr. Smith", notes: "All vaccines current" }
    ]
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-display font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-pink-500" />
          Pet Profile
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Name</label>
                    <p className="text-lg font-semibold text-gray-800">{petData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Species</label>
                    <p className="text-lg font-semibold text-gray-800">{petData.species}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Breed</label>
                    <p className="text-lg font-semibold text-gray-800">{petData.breed}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Age</label>
                    <p className="text-lg font-semibold text-gray-800">{petData.age}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Weight</label>
                    <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Weight className="w-4 h-4" />
                      {petData.weight}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Height</label>
                    <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Ruler className="w-4 h-4" />
                      {petData.height}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Color</label>
                    <p className="text-lg font-semibold text-gray-800">{petData.color}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Microchip ID</label>
                    <p className="text-sm font-mono text-gray-700">{petData.microchipId}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Medical History
              </h3>
              <div className="space-y-4">
                {petData.medicalHistory.map((record, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-4 border-blue-200 pl-4 py-2"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-800">{record.procedure}</h4>
                      <span className="text-sm text-gray-500">{record.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Veterinarian: {record.vet}</p>
                    <p className="text-sm text-gray-700">{record.notes}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vaccination Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Vaccination Status
              </h3>
              <div className="space-y-4">
                {petData.vaccinations.map((vaccine, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-4 rounded-xl border-2 ${
                      vaccine.status === 'Current' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-yellow-200 bg-yellow-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{vaccine.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        vaccine.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {vaccine.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Last: {vaccine.date}</p>
                    <p className="text-sm text-gray-600">Next: {vaccine.nextDue}</p>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 text-center"
              >
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-800 mb-1">Healthy Pet Badge</h4>
                <p className="text-sm text-purple-600">All vaccinations up to date!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PetProfile;
