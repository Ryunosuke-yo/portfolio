import {motion} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import png from "../../../assets/Svgs/hand.svg" 

export default function(){

    return (
        <>
            {/* <div>
            <img src="../../../assets/Svgs/hand.png" />

            </div> */}
            
                <div style={{
                    backgroundImage: `url("${png}")`,
                    backgroundRepeat: "no-repeat",
                    height : "700px",
                    width : "100%",
                    marginTop : "20%",
                    // backgroundSize : "cover"
                }}>
                    <h1 style={{
                        marginLeft : "65%",
                        paddingTop : "4%",
                        fontSize : "3rem"
                    }}>
                        Skills
                    </h1>
                </div>
            {/* <ReactPlayer url="../../../assets/hand_2.mp4" playing/> */}
        </>
    )
}