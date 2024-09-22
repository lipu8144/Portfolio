import React,{useRef} from "react";
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Bounded from "../components/Bounded";

const Contact = () => {
  document.title = "Lipu Swain | Contact"
  const form = useRef();

  // const VITE_SERVER_ID = import.meta.env.REACT_APP_SERVER_ID;
  // const VITE_TEMPLATE_ID = import.meta.env.TEMPLATE_ID;
  // const VITE_PUBLIC_KEY = import.meta.env.REACT_APP_PUBLIC_KEY;


  const sendEmail = async(e) => {
    e.preventDefault();
    console.log(form.current);

    await emailjs
      .sendForm("service_ugdnw7l", "template_itawcsn", form.current, {
        publicKey: "_r2ITh7tXCBPXbxbM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent 🚀");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Somthing is wrong ⚠️");
        }
      );
      // window.location.reload();
  };

  return (
    <Bounded>
      <Toaster />
      <div className="md:flex justify-center mt-20">
        <div className=" md:w-[50%]">
          <h1 className=" text-3xl font-bold my-2">Get In Touch</h1>
          <p className="my-6">
            I'm here to help and answer any question you might have. If you
            have any questions or concerns, feel free to reach out to me.
          </p>

          <div className="flex flex-wrap justify-between py-2 gap-6 pr-3">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 text-slate-900 rounded-md inline-block p-2">
                <FaPhoneAlt />
              </div>
              <div>
                <h2 className=" font-bold">Phone</h2>
                <p className=" text-footer_text_color1">(+91) 8144078027</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className=" bg-yellow-400 text-slate-900 rounded-md inline-block p-2">
                <IoMail />
              </div>
              <div>
                <h2 className=" font-bold">Email</h2>
                <p className=" text-footer_text_color1">
                  lipunswain10@gmail.com
                </p>
              </div>
            </div>

            <a
              href={"https://www.linkedin.com/in/lipu-swain-89b6242a8/"}
              target="_blank"
              className="flex items-center gap-2"
            >
              <div className=" bg-yellow-400 text-slate-900 rounded-md inline-block p-2">
                <FaLinkedin />
              </div>
              <div>
                <h2 className=" font-bold">LinkedIn</h2>
                <p className=" text-footer_text_color1">Lipu Swain</p>
              </div>
            </a>

            <a
              href={"https://www.instagram.com/its_lipu12"}
              target="_blank"
              className="flex items-center gap-2 mr-7"
            >
              <div className="bg-yellow-400 text-slate-900 rounded-md inline-block p-2">
                <FaInstagram />
              </div>
              <div>
                <h2 className=" font-bold">Instagram</h2>
                <p className=" text-footer_text_color1">@its_lipu12</p>
              </div>
            </a>
          </div>

          <hr className=" h-[1px] w-[70%] my-8" />

          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold">Social Media</h1>
            <a href={"https://www.linkedin.com/in/lipu-swain-89b6242a8/"} target="_blank">
              <FaLinkedin />
            </a>
            <a href={"https://facebook.com/"} target="_blank">
              <FaFacebookF />
            </a>
            <a to={"https://twitter.com/lipuswain20"} target="_blank">
              <FaXTwitter />
            </a>
            <a to={"https://www.instagram.com/its_lipu12"} target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="p-8 rounded-md ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="md:flex gap-4 mt-2 relative">
              <div className="relative">
                <label htmlFor="" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="exampl@gmail.com"
                  className="rounded h-11 w-full outline-none text-lg text-slate-900 font-bold pl-4"
                />
              </div>
              <div className="text-slate-900 font-bold ">
                <label htmlFor="" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="john smith"
                  className="rounded h-11 w-full outline-none text-lg text-footer_text_color1 pl-4"
                />
              </div>
            </div>
            <div className="mt-4 text-slate-900 font-bold">
              <label htmlFor="" className="block text-white">
                Phone
              </label>
              <input
                type="number"
                name="user_phone"
                placeholder="1234567899"
                className="rounded h-11 w-full outline-none text-lg text-footer_text_color1 pl-4"
              />
            </div>
            <div className="mt-4 text-slate-900 font-bold ">
              <label htmlFor="" className="block text-white">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="hi, Say something..."
                className=" w-full rounded h-40 outline-none pl-4 pt-1"
              />
            </div>

            <button type="submit" className="mt-3">
              <div className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105">
                <span
                  className={
                    "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"
                  }
                />
                <span className="relative flex items-center justify-center gap-2">
                  SUBMIT
                </span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
