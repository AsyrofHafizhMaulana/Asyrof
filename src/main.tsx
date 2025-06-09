import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'

import Nav from './components/nav'
import Main from './components/landingpage'
import Project from './components/project'
import Experience from './components/experience'
import Contact from './components/contact'
import Footer from './components/footer'
import About from './components/about'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <div className="dark-gradient-bg content-wrapper">
      <Main />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </StrictMode>,
)