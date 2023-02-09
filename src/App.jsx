import About from './components/Home/About/About';
import Demo from './components/Home/Demo/Demo';
import Features from './components/Home/Features/Features';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MeetTeam from './components/Home/MeetTeam/MeetTeam';
import Navbar from './components/Navbar/Navbar';
import React from 'react';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Demo />
      <MeetTeam />
      <Footer />
    </div>
  );
};

export default App;
