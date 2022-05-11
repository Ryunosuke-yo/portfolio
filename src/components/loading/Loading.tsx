import Messaging from "react-cssfx-loading/lib/Messaging"

export default function(){

    return (
        <div className="bg-bg h-screen flex justify-center flex-col items-center">
            <Messaging color="#fae246" width="50px" height="50px" duration="0.4s"/>
            <p className="text-yellow text-3xl pt-36">Please wait....</p>
        </div>
    )
}