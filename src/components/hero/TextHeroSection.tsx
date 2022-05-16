import { motion } from "framer-motion"
import { createRef, forwardRef, useContext, useEffect, useRef } from "react"
import Header from "../Header"
import Bounce from 'react-reveal/Bounce'
import Zoom from "react-reveal/Zoom"

    export default function(){

      
    return (
    <div> 
            <Zoom left cascade delay={200}>
                <h1 className="pt-8 text-9xl" id="ver">Hello!</h1>
                <h1 className="pt-4 text-3xl desktop:pt-8 desktop:text-5xl">I'm Ryunosuke Yokokawa</h1>
                <h2 className="pt-4 text-xl desktop-pt-8 desktop:text-5xl">Japanese Web Developer in Canada</h2>              
            </Zoom>

    </div>
           
    )
}