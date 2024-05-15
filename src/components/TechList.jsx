import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

import Bounded from "./Bounded";
import { MdCircle } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger)


const TechList = () => {
  const techList = [
    { tech_name: "React.js", tech_color: "#61DAFB" },
    { tech_name: "Next.js", tech_color: "#ffffff" },
    { tech_name: "Express.js", tech_color: "#000000" },
    { tech_name: "Node.JS", tech_color: "#FFA500" },
    { tech_name: "MongoDB", tech_color: "#13AA52" },
  ];

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          // markers: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 6,
        },
      });
      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); //cleanup
  });

  return (
    <div ref={component} className=" overflow-hidden">
      <Bounded>
        <h1 className="md:text-9xl text-7xl font-extrabold">What I Use</h1>
      </Bounded>
      {techList.map(({ tech_name, tech_color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || undefined}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="tech-item text-8xl font-extrabold uppercase text-nowrap tracking-tighter"
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechList;
