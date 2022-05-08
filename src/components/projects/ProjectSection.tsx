import  Nimble from '../../../assets/projects/nimble.svg'


export default function(){

    return (
        <div className="flex justify-center flex-col items-center">
            <h1>Projects</h1>
                <div className="grid grid-cols-3 gap-20">
                    <div className="flex flex-col items-center justify-center">
                        <img src="../../../assets/projects/nimble.svg" alt=""/>
                        {/* <Nimble /> */}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="../../../assets/projects/SkillBarter.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="../../../assets/projects/moving-tracker-.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="../../../assets/projects/vanfood.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="../../../assets/projects/game-with-me.svg" alt="" />
                    </div>
                </div>
            
        </div>
    )
}