import React from "react";
import clsx from "clsx";
import {Link} from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Bounded from "./Bounded";


const Footer = () => {
  return (
    <Bounded className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Lipu Swain
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Lipu Swain
          </p>
        </div>
        <nav>
          <ul className="flex items-center gap-1">
            <>
              <li>
                <Link
                  className={clsx(
                    "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                  )}
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
              </span>
            </>
            <>
              <li>
                <Link
                  className={clsx(
                    "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                  )}
                  to={"/projects"}
                >
                  Projects
                </Link>
              </li>
              <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
              </span>
            </>
            <>
              <li>
                <Link
                  className={clsx(
                    "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                  )}
                  to={"/blog"}
                >
                  Blog
                </Link>
              </li>
            </>
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <a
            href={"https://github.com/lipu8144"}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaGithub />
          </a>
          <a
            href={"https://www.linkedin.com/in/lipu-swain-89b6242a8"}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaLinkedin />
          </a>
          <a
            href={"https://twitter.com/lipuswain20"}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaTwitter />
          </a>
          <a
            href={"https://www.instagram.com/its_lipu12/"}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;
