import About from '../components/About/About';
import Demo from '../components/Demo/Demo';
import Documentation from '../components/Documentation/Documentation';
import Home from '../components/Home';
import MeetTeam from '../components/MeetTeam/MeetTeam';

const HomeContainer = () => {
  return (
    <div>
      <Home />
      <About />
      <Demo />
      <Documentation />
      <MeetTeam />
    </div>
  );
};

export default HomeContainer;
