import AboutThreeScene from "../three/AboutThreeScene";


export default function(){

    return (
        <div className=" text-white py-7 h-screen">
            <h1 className="mt-10 mb-14 text-center">About Me</h1>
                <div>
                    <h2>Ryunosuke Yokokawa</h2>
                    <p>I am a web developer in Canada. I am really intrigued and passionate about front-end development. I love to create UI and animation!</p>
                    <p>2020 - BA in International Development, Kansai Gaidai University In Japan</p>
                    <p>2022 - Post Degree Diploma in Web and Mobile App Design and Development, Langara College In Canada</p>

                    <div className="grid gap-4 grid-cols-2 py-5 px-28">
                        <p className="border border-white rounded-lg p-4 text-center">React</p>
                        <p className="border border-white rounded-lg p-4 text-center ">NodeJs</p>
                        <p className="border border-white rounded-lg p-4  text-center ">NextJs</p>
                        <p className="border border-white rounded-lg p-4   text-center">HTML/CSS</p>
                    </div>
                </div>
            
        </div>
    )
}