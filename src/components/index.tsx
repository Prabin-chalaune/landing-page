import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import TransparentSection from '../components/Transparent';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Bg1 from '../assets/AdobeStock_709869236_Preview.jpeg';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <TransparentSection bgImg={Bg1} />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;