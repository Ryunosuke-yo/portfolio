import './App.css'
import About from './components/About/About'
import Header from './components/Header'
import ProjectSection from './components/projects/ProjectSection'
import Skills from './components/About/Skills'
import { Parallax } from 'react-scroll-parallax';
import TextHeroSection from './components/hero/TextHeroSection'
import SvgHeroSection from './components/hero/SvgHeroSection'
import ThreeSeceneProjects from './components/projects/ThreeSeceneProjects'
import Contact from './components/Contact/Contact'


function App() { 

  return (
  <>
    <Header /> 

     <div className="grid grid-cols-2">
        <Parallax translateY={[-7, 8]}>
          <div className="bg-bg text-white" style={{
            height : "1000px"
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
        <div className='bg-yellow'>
          <Parallax translateY={[-10, 8]}  opacity={[0, 2]}>
            <div className=' h-screen'>
                <ThreeSeceneProjects />
            </div>
          </Parallax>
         </div>
          
        <div className='bg-purple flex justify-center px-11 col-span-2 z-10' style={{height : "990px"}}>
          <Parallax  translateY={[-1, 40]} opacity={[0, 3]}>
            <ProjectSection />
          </Parallax>
        </div>

        <div className='col-span-2 bg-red z-10 h-screen'>
          <Parallax translateX={[-20, 10]} opacity={[1.6, -0.9]}>
            <Skills />
          </Parallax>
        </div>

          <div className='bg-bg h-screen flex justify-center z-10'>
        <Parallax translateY={[-27, 34]}>
          <About/>
        </Parallax>
          </div>

          <div className='bg-green h-96 z-30 col-span-3 '>
            <Parallax translateY={[10, 50]}>
              <Contact />
            </Parallax>
          </div>
     </div>

  </>

    
  )
}

export default App
