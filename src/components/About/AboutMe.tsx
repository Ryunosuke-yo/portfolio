import {motion} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import backSvg from "../../../assets/Svgs/hand.svg" 

export default function(){

    return (
        <>
                <div style={{
                    backgroundImage: `url("${backSvg}")`,
                    backgroundSize: "170%",
                    backgroundPositionX : "30%"
                }} className="desktop:mt-24 mt-0  w-full h-screen desktop:bg-contain desktop:bg-no-repeat text-white">
                    <div 
                    // style={{
                    //     marginLeft : "35%",
                    //     paddingTop : "6%",}}
                        className="ml-44 pt-9"
                        >
                        <h1 className="text-center text-4xl desktop:text-6xl font-hand">About Me</h1>
                        <div className="mt-9 mx-auto text-xl desktop:text-3xl" style={{
                            width : "85%"
                        }}>
                        <p >I am a web developer in Canada. I am really intrigued and passionate about front-end development. I love to create UI and animation!</p>
                        <div className="mt-3 desktop:mt-5 text-base desktop:text-2xl">
                        <p>2016-2020 : BA in International Development, Kansai Gaidai University In Japan</p>
                        <p className="mt-2">2021-2022 : Post Degree Diploma in Web and Mobile App Design and Development, Langara College In Canada</p>
                        </div>
                        </div>
                        
                    </div>

                </div>
        </>
    )
}