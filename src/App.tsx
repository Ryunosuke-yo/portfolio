import './App.css'
import Skills from './components/About/Skills'
import Header from './components/Header'
import ProjectSection from './components/projects/ProjectSection'
import AboutMe from './components/About/AboutMe'
import { Parallax } from 'react-scroll-parallax';
import TextHeroSection from './components/hero/TextHeroSection'
import SvgHeroSection from './components/hero/SvgHeroSection'
import ThreeSeceneProjects from './components/projects/ThreeSeceneProjects'
import Contact from './components/Contact/Contact'
import { createContext, useState } from 'react'
import { projectsArr } from './components/projects/projectArr'
import { motion, AnimatePresence } from 'framer-motion'



interface Project {
  title : String,
  date : String,
  desc : String,
  myRole : String,
  tech : Object,
  url : String,
  icon : String
  
}

function App() { 
    


  return (
    <>

    <Header /> 
     <div className="grid grid-cols-2">
        <Parallax translateY={[-7, 8]}>
          <div className="bg-bg text-white font-playfair text-8xl pl-8" style={{
            height : "1000px",
          }}>
            <TextHeroSection />
          </div>
        </Parallax>

        <Parallax translateX={[-30, 40]} opacity={[2.6, -0.7]}>
          <div >
            <SvgHeroSection />
          </div>
        </Parallax>
     </div>

   
     <div className="grid grid-cols-3  h-screen">
        <div className='bg-yellow' id="Projects">
          <Parallax translateY={[-10, 8]}  opacity={[0, 2]}>
            <div className=' h-screen'>
                <ThreeSeceneProjects />
            </div>
          </Parallax>
         </div>
          
        <div className='bg-purple flex justify-center col-span-2 z-10' style={{height : "990px"}}>
          <Parallax  translateY={[-1, 20]} opacity={[0, 3]}>
            <ProjectSection />
          </Parallax>
        </div>

        <div className='col-span-2 bg-red z-10 h-screen' id="About">
          <Parallax translateX={[-30, 10]} opacity={[1.7, -0.7]}>
            <AboutMe />
          </Parallax>
        </div>

          <div className='bg-bg h-screen overflow-hidden z-10 px-9' id="Skills">
        <Parallax translateX={[70, -70]} opacity={[4,-2]}>
          <Skills/>
        </Parallax>
          </div>

          <div className='bg-green z-30 col-span-3' style={{height : "700px"}} id="Contact">
            <Parallax translateY={[10, 50]}>
              <Contact />
            </Parallax>
          </div>

     </div>
  </>

    
  )
}

export default App
