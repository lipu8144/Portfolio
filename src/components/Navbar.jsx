import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={"Lipu Swain"} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          <div>
            <li className="first:mt-8">
              <Link
                to={"/about"}
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                )}
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    pathname.includes("/about")
                      ? "translate-y-6"
                      : "translate-y-18"
                  )}
                />
                <span className="relative">About</span>
              </Link>
            </li>

            <li className=" first:mt-8">
              <Link
                to={"/projects"}
                className={clsx(
                  "group relative block overflow-hidden my-2 rounded px-3 text-3xl font-bold text-slate-900 "
                )}
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    pathname.includes("/projects")
                      ? "translate-y-6"
                      : "translate-y-18"
                  )}
                />
                <span className="relative">Projects</span>
              </Link>
            </li>

            <li className=" first:mt-8">
              <Link
                to={"/blog"}
                className={clsx(
                  "group relative block overflow-hidden my-2 rounded px-3 text-3xl font-bold text-slate-900 "
                )}
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    pathname.includes("/blog")
                      ? "translate-y-6"
                      : "translate-y-18"
                  )}
                />
                <span className="relative">Blog</span>
              </Link>
            </li>

            <li className=" first:mt-8">
              {/* <Button
                url={"/contact"} 
                label={"Contact"}
                className="ml-3"
              /> */}
              <Link
                to={"/contact"}
                className={clsx(
                  "group relative block overflow-hidden my-2 rounded px-3 text-3xl font-bold text-slate-900 "
                )}
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                    pathname.includes("/contact")
                      ? "translate-y-6"
                      : "translate-y-18"
                  )}
                />
                <span className="relative">Contact</span>
              </Link>
            </li>
          </div>
        </div>
        <DesktopMenu />
      </ul>
    </nav>
  );
};

export default Navbar;

const NameLogo = ({name}) =>{
  return (
    <Link
      to="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}


const DesktopMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      <>
        <li>
          <Link
            className={clsx(
              "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
            )}
            to={"/about"}
          >
            <span
              className={clsx(
                "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                pathname.includes("/about") ? "translate-y-6" : "translate-y-8"
              )}
            />
            <span className="relative">About</span>
          </Link>
        </li>
        <span
          className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
          aria-hidden="true"
        >
          /
        </span>

        {/* projects */}
        <li>
          <Link
            className={clsx(
              "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
            )}
            to={"/projects"}
          >
            <span
              className={clsx(
                "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                pathname.includes("/projects")
                  ? "translate-y-6"
                  : "translate-y-8"
              )}
            />
            <span className="relative">Projects</span>
          </Link>
        </li>
        <span
          className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
          aria-hidden="true"
        >
          /
        </span>

        {/* blog */}

        <li>
          <Link
            className={clsx(
              "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
            )}
            to={"/blog"}
          >
            <span
              className={clsx(
                "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                pathname.includes("/blog") ? "translate-y-6" : "translate-y-8"
              )}
            />
            <span className="relative">Blog</span>
          </Link>
        </li>
        <span
          className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
          aria-hidden="true"
        >
          /
        </span>

        {/* contact */}
        <li>
          {/* <Link
            className={clsx(
              "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
            )}
            to={"/contact"}
          >
            <span
              className={clsx(
                "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                pathname.includes("/contact") ? "translate-y-6" : "translate-y-8"
              )}
            />
            <span className="relative">Contact</span>
          </Link> */}
      <Button url={"/contact"} label={"Contact"} showIcon={true} className="ml-3" />
        </li>
       
      </>

      {/* <li>
      </li> */}
    </div>
  );
}