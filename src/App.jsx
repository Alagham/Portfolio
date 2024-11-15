import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import Footer from "./components/Footer/Footer.jsx"
const App = () => {
  return (
   <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Skills/>
      <WorkExperience/>
      <ContactMe/>
      <Footer/>
    </div>
   </>
  );
};

export default App;



