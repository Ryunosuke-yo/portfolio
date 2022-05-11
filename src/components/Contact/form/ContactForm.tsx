import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';

export default function(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => send(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMP_ID , data, import.meta.env.VITE_PUBLIC_ID )
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  placeholder='Your name' {...register("from_name")}/>
            <input  placeholder='Your email' {...register("reply_to")}/>
            <input  placeholder='Your message' {...register("message")}/>
            <input type="submit" />
        </form>
    )
}