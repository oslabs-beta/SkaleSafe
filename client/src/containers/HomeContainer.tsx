/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import About from '../components/Home/About/About';
import Demo from '../components/Home/Demo/Demo';
import Documentation from '../components/Home/Documentation/Documentation';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import MeetTeam from '../components/Home/MeetTeam/MeetTeam';
import React from 'react';

function HomeContainer() {
  return (
    <div>
      <Home />
      <About />
      <Documentation />
      <Demo />
      <MeetTeam />
      <Footer />
    </div>
  );
}

export default HomeContainer;
