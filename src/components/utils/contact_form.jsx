import { motion } from "framer-motion";
import Swal from 'sweetalert2'
import { useRef } from "react";

const ContactForm = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const formRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "8ab56b22-4796-424c-8566-f00210c562da");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            Toast.fire({
                icon: "success",
                title: "Email Send"
            });

            if (formRef.current) {
                formRef.current.reset();
            }
        }
    };

    return (
        <section className="contact-form justify-center items-center flex">
            <form ref={formRef} action="" onSubmit={onSubmit} className="flex-col p-4 space-y-2">
                <h2 className="lg:text-[50px] md:text-[40px] text-[30px] font-semibold px-10 mb-4"> Send me an Email! </h2>
                <div className="input-box">
                    <label className="font-semibold" > Name </label>
                    <input className="h-10 border border-neutral-800 p-2" type="text" placeholder="Your Name..." required name="name" />
                </div>
                <div className="input-box">
                    <label className="font-semibold" > Email </label>
                    <input className="h-10 border border-neutral-800 p-2" type="text" placeholder="Your Email..." required name="email" />
                </div>
                <div className="input-box">
                    <label className="font-semibold" > Message </label>
                    <textarea className="h-32 border border-neutral-800 p-2 mb-4" id="" placeholder="Your Message..." required name="message" ></textarea>
                </div>
                <button className="h-10 bg-white w-full border border-black p-2 font-semibold" type="submit"> Send Email </button>
            </form>
        </section>
    );
}


export default ContactForm;