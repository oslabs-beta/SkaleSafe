import About from '../components/About/About';
import ContactUs from '../components/contactUs/ContactUs';
import Demo from '../components/Demo/Demo';
import Documentation from '../components/Documentation/Documentation';
import Home from '../components/Home';

const HomeContainer = () => {
  return (
    <div>
      <Home />
      <About />
      <Demo />
      <Documentation />
      <ContactUs />
    </div>
  );
};

export default HomeContainer;
