import React from "react";
import Bounded from "./Bounded";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <Bounded>
      <div>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-slate-300">
          Experience
        </h1>

        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <h3 className="font-bold leading-tight text-slate-300 text-3xl md:text-4xl">
            Web Developer
          </h3>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2023-24</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>SIIT</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>
              Worked as full stack developer. Build the whole website 
              <a href={"https://siitsurada.in"} target="_blank" className=" text-yellow-400"> (siitsurada.in)</a>, gave it
              a "good look and feel" with fully responsive and custome-designed
              pages. Being a <b>Node.js</b> project, used <b>Express.js</b> to
              create the server and routes for pages. Build reusable components
              for good code quality. Used
              <b> MongoDB, MongoDB Atlas</b>, and <b>Mongoose</b> for the
              database. For design and responseve used
              <b> tailwind CSS, Swiper.js </b> used to create carousels, and{" "}
              <b>AXIOS</b> to send form data asynchronously.{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <h3 className="font-bold leading-tight text-slate-300 text-3xl md:text-4xl">
            Technical Support
          </h3>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2022-23</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>SIIT</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            Configuring and maintaining the practical LAB of OKCL. ERA Server
            Maintenance and Student Data Management for OKCL ALCs.
            Troubleshooting and diagnosing basic problems with computer
            equipment.
          </div>
        </div>
      </div>

      {/* Education  */}
      <div className="mt-10">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-slate-300">
          Education
        </h1>

        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <h3 className="font-bold leading-tight text-slate-300 text-3xl md:text-4xl">
            Bachelor of Computer Application
          </h3>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2029-2022</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>Presidency College</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            Completed a Bachelor's degree in Computer Application with a focus
            on foundational Programming concepts, algorithms, and web
            development. Developed a strong understanding of software
            development principles
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Experience;
