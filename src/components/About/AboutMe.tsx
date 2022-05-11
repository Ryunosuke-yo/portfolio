import {motion} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import png from "../../../assets/Svgs/hand.svg" 

export default function(){

    return (
        <>
                <div style={{
                    backgroundImage: `url("${png}")`,
                    backgroundRepeat: "no-repeat",
                    height : "700px",
                    width : "100%",
                    marginTop : "20%",
                    // backgroundSize : "cover"
                }}>
                    <div style={{
                        marginLeft : "35%",
                        paddingTop : "6%",
                    }}>
                        <h1 className="text-center text-6xl font-hand">About Me</h1>
                        <div className="mt-9 mx-auto text-3xl" style={{
                            width : "85%"
                        }}>
                        <p >I am a web developer in Canada. I am really intrigued and passionate about front-end development. I love to create UI and animation!</p>
                        <div className="mt-5 text-2xl">
                        <p>2016-2020 : BA in International Development, Kansai Gaidai University In Japan</p>
                        <p className="mt-2">2021-2022 : Post Degree Diploma in Web and Mobile App Design and Development, Langara College In Canada</p>
                        </div>
                        </div>
                        
                    </div>

                </div>
        </>
    )
}