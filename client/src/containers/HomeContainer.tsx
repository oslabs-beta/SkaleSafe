import About from '../components/Home/About/About';
import Demo from '../components/Home/Demo/Demo';
import Documentation from '../components/Home/Documentation/Documentation';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import MeetTeam from '../components/Home/MeetTeam/MeetTeam';

function HomeContainer() {
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
}

export default HomeContainer;
