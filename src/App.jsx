import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import PetOwnerDashboard from './components/PetOwnerDashboard';
import VeterinarianDashboard from './components/VeterinarianDashboard';
import AnimalShelterDashboard from './components/AnimalShelterDashboard';
import Header from './components/Header';
import Ticker from './components/Ticker';

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [petName, setPetName] = useState(localStorage.getItem('petName') || '');

  useEffect(() => {
    if (userType) localStorage.setItem('userType', userType);
    if (userName) localStorage.setItem('userName', userName);
    if (petName) localStorage.setItem('petName', petName);
  }, [userType, userName, petName]);

  const handleUserSelection = (type, name, pet = '') => {
    setUserType(type);
    setUserName(name);
    if (pet) setPetName(pet);
  };

  const resetUser = () => {
    setUserType('');
    setUserName('');
    setPetName('');
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('petName');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <AnimatePresence mode="wait">
          {userType && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Header 
                userName={userName} 
                petName={petName} 
                userType={userType}
                onReset={resetUser}
              />
              <Ticker />
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route 
            path="/" 
            element={
              !userType ? (
                <LandingPage onUserSelect={handleUserSelection} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              userType ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {userType === 'pet-owner' && <PetOwnerDashboard />}
                  {userType === 'veterinarian' && <VeterinarianDashboard />}
                  {userType === 'animal-shelter' && <AnimalShelterDashboard />}
                </motion.div>
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
