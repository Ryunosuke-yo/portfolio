import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Modal from "react-bootstrap/Modal";
import { useState, Suspense } from "react";
import Slide from "react-reveal/Slide"
import Loading from "../../loading/Loading"
interface Props {
    setShow: any
}

export default function(props: Props){
    const {setShow} = props

    const schema = yup.object({
        from_name : yup.string().required("Please fill out your name field"),
        reply_to : yup.string().email().required("Please fill out your email field"),
        message : yup.string().required("Please fill out your message field")
    }).required()
    const { register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => {
        send(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMP_ID , data, import.meta.env.VITE_PUBLIC_ID )
        setShow(true)
    }

    return (
        <Suspense fallback={<Loading />}>
        <Slide left cascade duration={500}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-5/6 desktop:w-6/12  mx-auto text-center text-xl mt-9 pb-2">
            <div className="mt-4">
                <label htmlFor="from_name" className="underline decoration-dashed">Your Name</label>
                <input  className="border-3 placeholder:text-center w-full mt-4 focus:outline-none rounded-2xl py-2 px-4" {...register("from_name")}/>
                <p className="text-red">{errors.from_name?.message}</p>
            </div>
            <div className="mt-4">
                <label htmlFor="reply_to" className="underline decoration-dashed">Your Email</label>
                <input   className="placeholder:text-center  w-full mt-4 focus:outline-none rounded-2xl py-2 px-4" {...register("reply_to")}/>
                <p className="text-red">{errors.reply_to?.message}</p>
            </div>
            <div className="mt-4">
                <label htmlFor="message" className="underline decoration-dashed">Your Message</label>
                <textarea  className="placeholder:text-center  w-full mt-4 focus:outline-none h-40 rounded-2xl py-2 px-4" {...register("message")}/>
                <p className="text-red">{errors.message?.message}</p>
            </div>
            <div className="mt-5">
            <button type="submit">
                <p className="text-4xl hover:uppercase hover:underline">send</p>
            </button>
            </div>
        </form>
                 </Slide>
                 </Suspense>
                )
}