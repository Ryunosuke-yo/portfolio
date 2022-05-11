import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ContactForm from "./form/ContactForm";
export default function(){
    const options = {
        background: {
          color: "#0d47a1",
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
        }}

        const customInit = async (engine: Engine) => {
            // this adds the bundle to tsParticles
            await loadFull(engine);
          }
          
    return (
        <>
        <div className="flex justify-around w-3/4 z-30 mx-auto">
        <a href="https://www.linkedin.com/in/ryunosukey/" target="_blank" rel="noopener noreferrer" className="m-auto">
          <img src="../../../assets/Svgs/linkedin-icon.svg"  width={90} height={90} alt="" />
        </a>
        <a href="https://github.com/Ryunosuke-yo" target="_blank" rel="noopener noreferrer" className="m-auto">
          <img src="../../../assets/Svgs/github-icon.svg"  width={90} height={90}/>
        </a>
        </div>

        <div className="m-auto w-3/4 text-2xl text-center">
          <h2 className="text-center text-3xl mb-5"> - Ready to work!! -</h2>
          <h2 className="mb-6 text-center">Email - ryokokawa00@gmail.com</h2>
          <h3>I'm eagerly looking for any sort of opportunity to work as a web developer and if you have a question or something, please contact me !!</h3>
        </div>

        <ContactForm />
        </>
    )
}