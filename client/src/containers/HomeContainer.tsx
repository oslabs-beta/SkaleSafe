import About from '../components/About/About';
import Demo from '../components/Demo/Demo';
import Documentation from '../components/Documentation/Documentation';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home';
import MeetTeam from '../components/MeetTeam/MeetTeam';
import React, { useState } from 'react';
import { Error } from '../components/Error';

// const [isOpen, setIsOpen] = useState(false);
const HomeContainer = () => {

  return (
    <div>
      <Home />
      <About />
      <Demo />
      <Documentation />
      <MeetTeam />
      <Footer />
    </div>
  );
};

export default HomeContainer;
