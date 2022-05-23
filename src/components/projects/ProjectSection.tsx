import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState, useRef } from 'react'
import { projectsArr } from './projectArr'
import {IoCloseOutline} from "react-icons/io5"
import Bounce from "react-reveal/Bounce"
import { MediaContext } from '../../App'
import autoAnimate from '@formkit/auto-animate'



export default function(){
    interface Project {
        title : string,
        date : string,
        desc : string,
        myRole : string,
        tech : any,
        url : string,
        icon : string,
        website? : string
        image : any,    
        size? : number
    }
    
    const [selectedId, setSelectedId] = useState<any>()
    const [selectedProject, setSelectedProject] = useState<Project>()
    const size = selectedProject?.size ? selectedProject?.size : 300
    const {isDesktop} = useContext(MediaContext)
    const iconSize = isDesktop ? 164 : 120

    const ref = useRef(null)

    useEffect(() => {
        ref.current && autoAnimate(ref.current)
      }, [ref])
    
    

    const mapProjects = projectsArr.map((project: any)=>(
        <motion.div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{setSelectedId(project.title), setSelectedProject(project)}} layoutId={project.title}>
             <img src={project.icon} alt="" width={iconSize} height={iconSize}/>
        </motion.div>
    ))

    const mapProjectForMobile  = 
        projectsArr.map(project=>
            <img src={project.icon} alt="" width={iconSize} height={iconSize}/>)
    
    
    return (
        <div className="flex justify-center flex-col items-center relative desktop:pt-9">
            <h1 className='text-3xl text-bg'>Projects</h1>
            <Bounce cascade top>
                <div className="grid grid-cols-2 desktop:grid-cols-3 gap-10 desktop:gap-20 px-6" ref={ref}>
                    {isDesktop ? mapProjects : mapProjectForMobile}
                </div>
                <p className='text-2xl mt-8'>Click each to see details</p>

                <AnimatePresence>
                    {selectedId && 
                    <motion.div 
                    layoutId={selectedId}
                    initial={{opacity: 0 }}
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    className="top-0 desktop:top-0 absolute left-1  px-5 "
                    style={{
                        top: "-5%"
                    }}
                    >   
                    <div className="bg-bg text-white rounded-3xl relative p-5">
                        <h2 className='text-center text-2xl desktop:text-5xl '> - {selectedProject?.title} - </h2>
                        <IoCloseOutline onClick={()=>setSelectedId(null)} className="absolute top-9 right-10 cursor-pointer"/>
                        <div className='text-lg desktop:text-2xl font-300 font-josefin italic'>
                            <div className='flex'>
                            <img className='my-3 desktop:mt-9 mx-auto rounded-xl' src={selectedProject?.image} alt=""  width={size} height={size}/>
                                
                            </div>
                            <p className='mt-2 desktop:mt-9'>-{selectedProject?.desc}</p>
                            <p className='mt-2 desktop:mt-9'>-{selectedProject?.myRole}</p>
                            <p className='mt-2 desktop:mt-9'>Frontend - {selectedProject?.tech.front}</p>
                            <p className='mt-2 desktop:mt-9'>Backend - {selectedProject?.tech.back}</p>
                            <p className='mt-2 desktop:mt-9'>{selectedProject?.date}</p>
                        </div>
                        <div className='pt-2 desktop:pt-9 text-center text-xl flex items-center justify-around'>
                        <a href={selectedProject?.url} className="underline" target="_blank" rel="noopener noreferrer">Github Repo</a>
                        {selectedProject?.website &&                    
                                <a href={selectedProject?.website} className="underline" target="_blank" rel="noopener noreferrer">website</a>
                        }
                        </div>
                    </div> 
                    </motion.div>}
                </AnimatePresence>
        </Bounce>
            
        </div>
    )
}