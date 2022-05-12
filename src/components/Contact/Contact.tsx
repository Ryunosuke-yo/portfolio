import ContactForm from "./form/ContactForm";
import backSvg2 from "../../../assets/Svgs/suit2.svg"
import backSvg from "../../../assets/Svgs/suitMan.svg"
import { useState } from "react";
export default function(){

      const [show, setShow] = useState(false)
          
    return (
        <>
        <div className="m-auto w-3/4 text-2xl text-center">
          <h2 className="text-center text-3xl mb-5"> - Ready to work with you!! -</h2>
          <h3>I'm eagerly looking for any sort of opportunity to work as a web developer and if you have a question or something, please contact me !!</h3>
          {show ? 
          <p className="mt-6">Thank you for the message! The confirmation email has been sent to your inbox.</p> : null
          }
        </div>
        <ContactForm setShow={setShow}/>
        </>
    )
}