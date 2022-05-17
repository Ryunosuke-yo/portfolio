import { useContext, useEffect, useRef, useState } from "react"
import { MediaContext } from "../../App"
export default function(){

    const {isDesktop} = useContext(MediaContext)
    // const widthStyle = {
    //     width : isDesktop ? "100%" : "70vw"
    // }

    return (
        <>
                <div className="text-white ">
                    <div 
                        className="px-9 pt-9"
                        >
                        <h1 className="mx-auto text-center text-2xl desktop:text-6xl font-hand">About Me</h1>
                        <div className="mt-9 mx-auto text-2xl desktop:text-3xl font-josefin">
                            <p >I am a web developer in Canada. I am really intrigued and passionate about front-end development. I love to create UI, animation and explore libraries!!</p>
                            
                        <div className="mt-3 desktop:mt-5 text-lg desktop:text-2xl">
                            <p className="mt-9">2016-2020 : BA in International Development, Kansai Gaidai University In Japan</p>
                            <p className="mt-2">2021-2022 : Post Degree Diploma in Web and Mobile App Design and Development, Langara College In Canada</p>
                        </div>
                        </div>
                        
                    </div>

                </div>
        </>
    )
}