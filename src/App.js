import React, {useState} from 'react'

import Landing from './sections/LandingPage'
import Projects from './sections/ProjectsPage'
import Aboutme from './sections/AboutmePage'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import './app.css'

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Landing theme={theme}/>
      <Aboutme theme={theme}/>
      <Projects theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
