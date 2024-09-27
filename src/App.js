import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList'; // Include MovieList if you want to use it
import Signup from './Components/Signup'; // Ensure the path is correct
import Login from './Components/Login'; // Ensure the path is correct
import MainMovies from './Components/MainMovies';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/main-movies" element={<MainMovies />} /> 
        <Route path='/' element={<HeroSection />} />
        
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
