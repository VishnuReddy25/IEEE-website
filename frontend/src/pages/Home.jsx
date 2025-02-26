import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgendaSpeakers from '../components/AgendaSpeakers';
import HeroSection from '../components/HeroSection';
import ConferenceTimer from '../components/ConferenceTimer';
import '../styles/Home.css'; // Import CSS
import IEEEConferenceTable from '../components/IEEEConferenceTable';
import IEEEImportantDates from "../components/IEEEImportantDates"
import Sponsors from '../components/Sponsors';
import AboutUs from '../components/AboutUs';
const Home = () => {
  return (
    
      <>
      {/* Main content */}
      
        <HeroSection />
        <AboutUs />
        <ConferenceTimer />
        <IEEEImportantDates/>
        <AgendaSpeakers />
        <Sponsors/>
      
      </>
      
  );
};

export default Home;
