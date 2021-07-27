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
    <div className={theme} id="app">
      <Navbar theme={theme} setTheme={setTheme} />
      <Landing theme={theme}/>
      <Aboutme theme={theme}/>
      <Projects theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
/*
:root {
  --bg-color-light: #ffffff;
  --font-color-light: #1b2430;
  --theme-color-light: #f24931;
  --bg-color-dark: #191919;
  --font-color-dark: #e5e5e5;
  --theme-color-dark: #ffd84c;
}
*/