import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, Calendar, MapPin, Filter, Search, Star } from 'lucide-react';

const AnimalShelterDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const adoptablePets = [
    {
      id: 1,
      name: "Bella",
      type: "Dog",
      breed: "Golden Retriever Mix",
      age: "3 years",
      gender: "Female",
      size: "Large",
      description: "Bella is a sweet, energetic dog who loves playing fetch and cuddling. She's great with kids and other dogs.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
      vaccinated: true,
      spayed: true,
      goodWithKids: true,
      goodWithPets: true
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      breed: "Domestic Shorthair",
      age: "2 years",
      gender: "Male",
      size: "Medium",
      description: "Whiskers is a calm, affectionate cat who enjoys sunny windowsills and gentle pets. Perfect for a quiet home.",
      image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400",
      vaccinated: true,
      spayed: true,
      goodWithKids: true,
      goodWithPets: false
    },
    {
      id: 3,
      name: "Charlie",
      type: "Dog",
      breed: "Labrador Mix",
      age: "1 year",
      gender: "Male",
      size: "Large",
      description: "Charlie is a playful puppy with lots of energy. He's learning basic commands and loves treats!",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      vaccinated: true,
      spayed: false,
      goodWithKids: true,
      goodWithPets: true
    },
    {
      id: 4,
      name: "Luna",
      type: "Cat",
      breed: "Persian Mix",
      age: "4 years",
      gender: "Female",
      size: "Small",
      description: "Luna is a gentle, quiet cat who prefers a peaceful environment. She's perfect for seniors or calm households.",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400",
      vaccinated: true,
      spayed: true,
      goodWithKids: false,
      goodWithPets: false
    },
    {
      id: 5,
      name: "Benny",
      type: "Rabbit",
      breed: "Holland Lop",
      age: "6 months",
      gender: "Male",
      size: "Small",
      description: "Benny is an adorable rabbit who loves hopping around and eating fresh vegetables. Very social and friendly.",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400",
      vaccinated: true,
      spayed: false,
      goodWithKids: true,
      goodWithPets: true
    },
    {
      id: 6,
      name: "Max",
      type: "Dog",
      breed: "German Shepherd Mix",
      age: "5 years",
      gender: "Male",
      size: "Large",
      description: "Max is a loyal, intelligent dog who would make an excellent companion for an active family or individual.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
      vaccinated: true,
      spayed: true,
      goodWithKids: true,
      goodWithPets: false
    }
  ];

  const successStories = [
    {
      id: 1,
      petName: "Rocky",
      adoptedBy: "The Johnson Family",
      story: "Rocky found his forever home with a loving family who has two children. He now enjoys daily walks and playing in their large backyard.",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300",
      adoptionDate: "December 2023"
    },
    {
      id: 2,
      petName: "Mittens",
      adoptedBy: "Sarah & Tom",
      story: "Mittens was adopted by a young couple who fell in love with her gentle nature. She now rules their apartment with grace and charm.",
      image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300",
      adoptionDate: "November 2023"
    },
    {
      id: 3,
      petName: "Buddy",
      adoptedBy: "Mr. Peterson",
      story: "Buddy became the perfect companion for a retired gentleman. They spend their days walking in the park and enjoying each other's company.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300",
      adoptionDate: "October 2023"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekend Adoption Drive",
      date: "January 20-21, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Central Park Pavilion",
      description: "Meet our adorable pets looking for forever homes. Free adoption consultations and pet supplies available."
    },
    {
      id: 2,
      title: "Free Vaccination Camp",
      date: "January 27, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "FurEver Care Shelter",
      description: "Free vaccinations for pets in the community. Bring your pets for their health checkups and vaccinations."
    },
    {
      id: 3,
      title: "Pet Training Workshop",
      date: "February 3, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center Hall A",
      description: "Learn basic training techniques for your new pet. Perfect for new pet owners and those considering adoption."
    }
  ];

  const shelterInfo = {
    name: "FurEver Care Animal Shelter",
    address: "456 Compassion Street, Pet District, PC 54321",
    phone: "(555) SHELTER (743-5837)",
    email: "adopt@furevercare.com",
    hours: "Monday-Saturday: 10AM-6PM, Sunday: 12PM-5PM"
  };

  const filterTypes = [
    { id: 'all', label: 'All Pets', icon: '🐾' },
    { id: 'dog', label: 'Dogs', icon: '🐕' },
    { id: 'cat', label: 'Cats', icon: '🐱' },
    { id: 'rabbit', label: 'Rabbits', icon: '🐰' }
  ];

  const filteredPets = adoptablePets.filter(pet => {
    const matchesFilter = selectedFilter === 'all' || pet.type.toLowerCase() === selectedFilter;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Animal Shelter Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Find your perfect companion and help pets find their forever homes
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <span className="text-gray-600 font-medium">Filter by type:</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filterTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(type.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedFilter === type.id
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 hover:border-green-300 text-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{type.icon}</div>
                <span className="text-sm font-medium">{type.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Adoptable Pets Gallery */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-green-500" />
                Available for Adoption ({filteredPets.length})
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredPets.map((pet, index) => (
                  <motion.div
                    key={pet.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{pet.name}</h3>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {pet.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{pet.breed} • {pet.age} • {pet.gender}</p>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{pet.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pet.vaccinated && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Vaccinated
                          </span>
                        )}
                        {pet.spayed && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            Spayed/Neutered
                          </span>
                        )}
                        {pet.goodWithKids && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            Good with Kids
                          </span>
                        )}
                        {pet.goodWithPets && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Good with Pets
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                      >
                        Adopt {pet.name}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Success Stories
              </h3>
              <div className="space-y-4">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={story.image}
                        alt={story.petName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{story.petName}</h4>
                        <p className="text-green-600 text-xs font-medium mb-1">Adopted by {story.adoptedBy}</p>
                        <p className="text-gray-600 text-xs">{story.story}</p>
                        <p className="text-gray-500 text-xs mt-1">{story.adoptionDate}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="border-l-4 border-blue-200 pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-800 text-sm">{event.title}</h4>
                    <p className="text-blue-600 text-xs font-medium">{event.date}</p>
                    <p className="text-gray-600 text-xs mb-1">{event.time}</p>
                    <p className="text-gray-500 text-xs">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Shelter Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                Visit Our Shelter
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-medium">{shelterInfo.name}</p>
                <p>{shelterInfo.address}</p>
                <p>{shelterInfo.phone}</p>
                <p>{shelterInfo.email}</p>
                <p className="text-green-600 font-medium">{shelterInfo.hours}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Get Directions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalShelterDashboard;
