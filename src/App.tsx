import Skills from './components/About/Skills'
import Header from './components/Header'
import ProjectSection from './components/projects/ProjectSection'
import AboutMe from './components/About/AboutMe'
import { Parallax } from 'react-scroll-parallax';
import TextHeroSection from './components/hero/TextHeroSection'
import ThreeSeceneProjects from './components/projects/ThreeSeceneProjects'
import Contact from './components/Contact/Contact'
import { useEffect, useState,createContext } from 'react'
import Loading from './components/loading/Loading'
import StickyMedia from './components/StickyMedia'
import FadeIn from 'react-fade-in'
import { useMediaQuery } from 'react-responsive'

export const MediaContext = createContext<any>(null)


function App() { 
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  
  const [loading, setLoading] = useState(true)
  const mediaContextValue = {isDesktop}
  
  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(loading);
  }, []);


    const backgroudStyle = {
      backgroundSize : isDesktop ? "30%" : "80%" 
    }

    

  return (
    
    loading ? <Loading /> : 
    <MediaContext.Provider value={mediaContextValue}>
      <FadeIn>
        {isDesktop && <StickyMedia />}   
        <Header /> 
        <div className="desktop:grid desktop:grid-cols-2 block desktop:bg-geisha desktop:bg-no-repeat desktop:bg-cover desktop:bg-left-top">
            <Parallax translateX={[33, -40]} opacity={[2.6, -0.7]}>
              <div className="bg-bg text-white font-playfair px-5 h-screen bg-geisha bg-cover bg-center bg-no-repeat ">
                <TextHeroSection />
              </div>
            </Parallax>
            <Parallax translateX={[-29, 40]} opacity={[2.6, -0.7]} className="bg-white w-full bg-geisha bg-no-repeat bg-cover bg-center hidden desktop:block">
            </Parallax>

        </div>

      
        <div className="block desktop:grid desktop:grid-cols-3 h-screen">
            <div className='bg-yellow z-10' id="Projects">
              <Parallax translateY={[-10, 8]} opacity={[0, 2]}>
                <div className=' desktop:h-screen h-96'>
                  <ThreeSeceneProjects /> 
                   
                </div>
              </Parallax>
            </div>
              
            <div className='bg-purple flex justify-center col-span-2 z-10 h-screen'>
              <Parallax  translateY={[-1, 20]} opacity={[3, -0.9]} >
                <ProjectSection />
              </Parallax>
            </div>

            <div className='col-span-2 bg-red z-10 h-screen pt-6 bg-hand' id="About" style={backgroudStyle}>
              <Parallax opacity={[-1,3]} translateY={[0,40]}>
                <AboutMe /> 
              </Parallax>
            </div>

              <div className='bg-bg h-screen overflow-hidden z-10 px-9' id="Skills">
            <Parallax translateX={[70, -79]} opacity={[4,-2]}>
              <Skills/>
            </Parallax>
              </div>
              
              <div className='mt-0  col-span-3  relative bg-green' id="Contact">
                <Parallax translateY={[3, 20]}  className='bg-green pb-8 pt-8'>
                  <Contact />
                </Parallax>
              </div>
        </div>
      </FadeIn>
    </MediaContext.Provider>

    
  )
}

export default App
// translateX={isDesktop ? [-60, 23] : [-60, -10]}