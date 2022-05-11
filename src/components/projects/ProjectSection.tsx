import  Nimble from '../../../assets/projects/nimble.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { projectsArr } from './projectArr'
import {IoCloseOutline} from "react-icons/io5"

export default function(){
    interface Project {
        title : string,
        date : string,
        desc : string,
        myRole : string,
        tech : any,
        url : string,
        icon : string
        
    }
    
    const [selectedId, setSelectedId] = useState<any>()
    const [selectedProject, setSelectedProject] = useState<Project>()

    

    const mapProjects = projectsArr.map((project: any)=>(
        <motion.div 
        className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>{setSelectedId(project.title), setSelectedProject(project)}} layoutId={project.title}>
             <img src={project.icon} alt="" />
        </motion.div>
    ))

    return (
        <div className="flex justify-center flex-col items-center relative pt-9">
            <h1 className='text-3xl text-bg'>Projects</h1>
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
                    className="top-0 absolute"
                    >   
                    <div className=" bg-bg text-white rounded-3xl relative px-11 py-11 h-full">
                        <h2 className='text-center text-5xl '> - {selectedProject?.title} - </h2>
                        <IoCloseOutline onClick={()=>setSelectedId(null)} className="absolute top-9 right-10 cursor-pointer"/>
                        <div className='text-3xl font-light'>
                            <img className='mt-9 mx-auto' src={selectedProject?.icon} alt=""  width={120} height={120}/>
                            <p className='mt-9'>-{selectedProject?.desc}</p>
                            <p className='mt-9'>-{selectedProject?.myRole}</p>
                            <p className='mt-9'>Frontend - {selectedProject?.tech.front}</p>
                            <p className='mt-9'>Backend - {selectedProject?.tech.back}</p>
                            <p className='mt-9'>{selectedProject?.date}</p>
                        </div>
                        <div className='pt-9 text-center text-xl'>
                        <a href={selectedProject?.url} className="underline" target="_blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                    
                    </div> 
                    </motion.div>}
                </AnimatePresence>
            
        </div>
    )
}