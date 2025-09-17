import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Calendar, FileText, Clock, User, Phone, Mail, MapPin, Award } from 'lucide-react';

const VeterinarianDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('profile');

  const vetProfile = {
    name: "Dr. Sarah Johnson",
    specialization: "Small Animal Medicine & Surgery",
    license: "VET-2024-001234",
    experience: "15 years",
    contact: {
      phone: "(555) 123-4567",
      email: "dr.johnson@furevercare.com",
      clinic: "FurEver Care Veterinary Clinic"
    },
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300"
  };

  const appointments = [
    {
      id: 1,
      time: "9:00 AM",
      date: "2024-01-15",
      petName: "Buddy",
      ownerName: "John Smith",
      type: "Routine Checkup",
      status: "confirmed",
      notes: "Annual vaccination due"
    },
    {
      id: 2,
      time: "10:30 AM",
      date: "2024-01-15",
      petName: "Luna",
      ownerName: "Emily Davis",
      type: "Dental Cleaning",
      status: "confirmed",
      notes: "Pre-anesthetic bloodwork completed"
    },
    {
      id: 3,
      time: "2:00 PM",
      date: "2024-01-15",
      petName: "Max",
      ownerName: "Mike Wilson",
      type: "Surgery Consultation",
      status: "pending",
      notes: "ACL repair discussion"
    },
    {
      id: 4,
      time: "3:30 PM",
      date: "2024-01-15",
      petName: "Whiskers",
      ownerName: "Lisa Brown",
      type: "Emergency Visit",
      status: "urgent",
      notes: "Vomiting and lethargy"
    }
  ];

  const availableSlots = [
    { time: "11:30 AM", date: "2024-01-15", available: true },
    { time: "4:30 PM", date: "2024-01-15", available: true },
    { time: "9:00 AM", date: "2024-01-16", available: true },
    { time: "10:00 AM", date: "2024-01-16", available: true },
    { time: "2:00 PM", date: "2024-01-16", available: true }
  ];

  const medicalCases = [
    {
      id: 1,
      petName: "Rocky",
      breed: "German Shepherd",
      age: "5 years",
      condition: "Hip Dysplasia",
      treatment: "Pain management and physical therapy",
      lastVisit: "2024-01-10",
      status: "ongoing"
    },
    {
      id: 2,
      petName: "Mittens",
      breed: "Persian Cat",
      age: "8 years",
      condition: "Chronic Kidney Disease",
      treatment: "Special diet and medication",
      lastVisit: "2024-01-08",
      status: "monitoring"
    },
    {
      id: 3,
      petName: "Charlie",
      breed: "Labrador",
      age: "2 years",
      condition: "Allergic Dermatitis",
      treatment: "Antihistamines and topical treatment",
      lastVisit: "2024-01-12",
      status: "improving"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'monitoring': return 'bg-purple-100 text-purple-800';
      case 'improving': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
        <div className="flex items-center gap-6">
          <img
            src={vetProfile.image}
            alt={vetProfile.name}
            className="w-24 h-24 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{vetProfile.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{vetProfile.specialization}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>License: {vetProfile.license}</span>
              <span>Experience: {vetProfile.experience}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">{vetProfile.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">{vetProfile.contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-gray-700">{vetProfile.contact.clinic}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-4">Certifications</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 text-sm">Doctor of Veterinary Medicine (DVM)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 text-sm">Small Animal Surgery Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 text-sm">Emergency Medicine Certification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Today's Appointments</h3>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{appointment.petName}</h4>
                    <p className="text-gray-600 text-sm">Owner: {appointment.ownerName}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {appointment.time}
                  </span>
                  <span>{appointment.type}</span>
                </div>
                <p className="text-gray-700 text-sm">{appointment.notes}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Time Slots</h3>
          <div className="space-y-3">
            {availableSlots.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-green-50 rounded-lg p-3 border border-green-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{slot.time}</span>
                  <span className="text-green-600 text-sm font-medium">Available</span>
                </div>
                <p className="text-gray-600 text-sm">{slot.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMedicalHistory = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Patient Medical Histories</h3>
      <div className="grid gap-6">
        {medicalCases.map((case_, index) => (
          <motion.div
            key={case_.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{case_.petName}</h4>
                <p className="text-gray-600">{case_.breed} • {case_.age}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(case_.status)}`}>
                {case_.status}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Condition</h5>
                <p className="text-gray-700 text-sm">{case_.condition}</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Treatment Plan</h5>
                <p className="text-gray-700 text-sm">{case_.treatment}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Last Visit: {case_.lastVisit}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'medical', label: 'Medical History', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Veterinarian Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage appointments, review patient histories, and provide exceptional care
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex gap-4 justify-center">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSection(item.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 ${
                    selectedSection === item.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          key={selectedSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {selectedSection === 'profile' && renderProfile()}
          {selectedSection === 'appointments' && renderAppointments()}
          {selectedSection === 'medical' && renderMedicalHistory()}
        </motion.div>
      </div>
    </div>
  );
};

export default VeterinarianDashboard;
