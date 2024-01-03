import React from 'react'
import Navbar from './components/nav/Navbar';
import About from './pages/AboutPage/About';
import Contact from './pages/Contact';
import Home from './pages/HomePage/Home';
import Projects from './pages/ProjectPage/Projects';
import Services from './pages/ServicePage/Services';

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className="all_pages">
        <Home/>
        <About/>
        <Services/>
        <Projects/>
      </div>
      <Contact/>
    </div>
  )
}

export default App;