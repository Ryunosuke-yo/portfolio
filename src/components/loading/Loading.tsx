import Messaging from "react-cssfx-loading/lib/Messaging"
import FadeIn from 'react-fade-in'
export default function(){

    return (
        <FadeIn>
        <div className="bg-bg h-screen flex justify-center flex-col items-center">
            <Messaging color="#fae246" width="50px" height="50px" duration="0.4s"/>
            <p className="text-yellow text-3xl pt-36">Now loading....</p>
        </div>
        </FadeIn>
    )
}