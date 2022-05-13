import  Nimble from '../../../assets/projects/nimble.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { projectsArr } from './projectArr'
import {IoCloseOutline} from "react-icons/io5"
import Bounce from "react-reveal/Bounce"

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
    

    const mapProjects = projectsArr.map((project: any)=>(
        <motion.div 
        className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{setSelectedId(project.title), setSelectedProject(project)}} layoutId={project.title}>
             <img src={project.icon} alt="" />
        </motion.div>
    ))

    const mapImage = selectedProject?.image.map((img: string)=>(
        <img className='mt-9 mx-auto rounded-xl' src={img} alt=""  width={size} height={size}/>
    ))

    return (
        <div className="flex justify-center flex-col items-center relative pt-9">
            <h1 className='text-3xl text-bg'>Projects</h1>
            <Bounce cascade top>
                <div className="grid grid-cols-3 gap-20">
                    {mapProjects}
                </div>
                <p className='text-2xl mt-8'>Click each to see details</p>

                <AnimatePresence>
                    {selectedId && 
                    <motion.div 
                    layoutId={selectedId}
                    initial={{opacity: 0 }}
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    className="top-0 absolute h-full w-full left-2"
                    >   
                    <div className=" bg-bg text-white rounded-3xl relative px-11 py-11 ">
                        <h2 className='text-center text-5xl '> - {selectedProject?.title} - </h2>
                        <IoCloseOutline onClick={()=>setSelectedId(null)} className="absolute top-9 right-10 cursor-pointer"/>
                        <div className='text-2xl font-light'>
                            <div className='flex'>
                            {mapImage}
                            </div>
                            <p className='mt-9'>-{selectedProject?.desc}</p>
                            <p className='mt-9'>-{selectedProject?.myRole}</p>
                            <p className='mt-9'>Frontend - {selectedProject?.tech.front}</p>
                            <p className='mt-9'>Backend - {selectedProject?.tech.back}</p>
                            <p className='mt-9'>{selectedProject?.date}</p>
                        </div>
                        <div className='pt-9 text-center text-xl flex-col'>
                        <a href={selectedProject?.website} className="underline" target="_blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                        {selectedProject?.website &&
                            <div className='pt-4 text-center text-xl flex-col'>
                                <a href={selectedProject?.url} className="underline" target="_blank" rel="noopener noreferrer">website</a>
                            </div>
                        }
                    </div> 
                    </motion.div>}
                </AnimatePresence>
        </Bounce>
            
        </div>
    )
}