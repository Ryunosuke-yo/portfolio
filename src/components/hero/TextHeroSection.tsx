import { motion } from "framer-motion"
import { createRef, forwardRef, useContext, useEffect, useRef } from "react"
import Header from "../Header"
import Bounce from 'react-reveal/Bounce'
import Zoom from "react-reveal/Zoom"
// import {Slide } from "react-awesome-reveal"
import { MediaContext } from "../../App"
    export default function(){

        const {isDesktop} = useContext(MediaContext)
      
    return (
    <div> 
            <Zoom left cascade delay={200}>
                <h1 className="pt-8 text-9xl desktop:text-8xl" id={isDesktop ? "" : "ver"}>Hello!</h1>
                <h1 className="pt-4 text-3xl desktop:pt-8 desktop:text-8xl">I'm Ryunosuke Yokokawa</h1>
                <h2 className="pt-4 text-xl desktop-pt-8 desktop:text-8xl">Japanese Web Developer in Canada</h2>              
            </Zoom>

            {/* <Bounce left cascade >
            <h1 className="pt-8 ">Hello!</h1>
            <h1 className="pt-8">I'm Ryunosuke Yokokawa</h1>
            <h2 className="pt-8">Japanese Web Developer in Canada</h2>              
            </Bounce> */}
    </div>
           
    )
}