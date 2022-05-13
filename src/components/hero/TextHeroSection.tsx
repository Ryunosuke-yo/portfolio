import { motion } from "framer-motion"
import { createRef, forwardRef, useEffect, useRef } from "react"
import Header from "../Header"
import Bounce from 'react-reveal/Bounce'
import Zoom from "react-reveal/Zoom"
// import {Slide } from "react-awesome-reveal"
    export default function(){
      
    return (
    <> 
            <Zoom left cascade delay={200}>
                <h1 className="pt-8 ">Hello!</h1>
                <h1 className="pt-8">I'm Ryunosuke Yokokawa</h1>
                <h2 className="pt-8">Japanese Web Developer in Canada</h2>              
            </Zoom>

            {/* <Bounce left cascade >
            <h1 className="pt-8 ">Hello!</h1>
            <h1 className="pt-8">I'm Ryunosuke Yokokawa</h1>
            <h2 className="pt-8">Japanese Web Developer in Canada</h2>              
            </Bounce> */}
            </>
           
    )
}