

export default function(){

    return (
        <div className=" text-white  h-screen w-full">
            <h1 className="mt-10 mb-14 text-center text-3xl">Skills</h1>
                <div>
            
                    <div className="grid gap-4 grid-cols-2  w-full text-xl">
                        <p className="border border-white rounded-lg p-4 text-center">React</p>
                        <p className="border border-white rounded-lg p-4 text-center">React Native</p>
                        <p className="border border-white rounded-lg p-4 text-center ">NodeJs/Express</p>
                        <p className="border border-white rounded-lg p-4   text-center">HTML/CSS</p>
                    </div>
                    <h2 className="mt-9 mb-9 text-center text-xl">Currently Learning</h2>
                    <div className="grid gap-4 grid-cols-2  w-full text-xl">
                        <p className="border border-white rounded-lg p-4  text-center ">NextJs</p>
                        <p className="border border-white rounded-lg p-4  text-center ">Typescript</p>
                    </div>
                </div>
            
        </div>
    )
}