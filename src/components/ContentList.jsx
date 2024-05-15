import React, { useRef, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const ContentList = ({ data, readMore, page }) => {
    const component = useRef(null)
    const revealRef = useRef(null)
    const itemsRef = useRef([])


    const [currentItem, setCurrentItem] = useState(null)
    const lastMousePos = useRef({ x: 0, y: 0});

    useEffect(() => {
      let ctx = gsap.context(() => {
        itemsRef.current.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.3,
              ease: "eastic.out(1,0.3)",
              // stagger: 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top bottom-=100px",
                end: "bottom center",
                toggleActions: "play none none none",
              },
            }
          );
        });
        return () => ctx.revert();
      }, component);
    }, []);

    //done
     useEffect(() => {
       const handleMouseMove = (e) => {
         const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };

         //calculate speed and direction

         const speed = Math.sqrt(
           Math.pow(mousePos.x - lastMousePos.current.x, 2)
         );

         let ctx = gsap.context(() => {
           if (currentItem !== null) {
             const maxY = window.scrollY + window.innerHeight - 350;
             const maxX = window.innerWidth - 250;

             gsap.to(revealRef.current, {
               x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
               y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
               rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
               ease: "back.out(2)",
               duration: 1.3,
               opacity: 1,
             });
           }
           lastMousePos.current = mousePos;
           return () => ctx.revert();
         }, component);
       };

       window.addEventListener("mousemove", handleMouseMove);

       return () => {
         window.removeEventListener("mousemove", handleMouseMove);
       };
     }, [currentItem]);

    const contentImages = data.map((item) => {
      const image = item.hoverImg;
      return image;
    });

    useEffect(() => {
      contentImages.forEach((url) => {
        if (!url) return;
        const img = new Image();
        img.src = url;
      });
    }, [contentImages]);


    const onMouseEnter = (index) =>{
        setCurrentItem(index);
    }
    const onMouseLeave = () => {
        setCurrentItem(null);
    }

    const Page = page === "blog" ? "/blog" : "/projects"


  return (
    <div ref={component}>
      <ul
        className="grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="list-item opacity-0f"
            onMouseEnter={() => onMouseEnter(index)}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <Link
              to={item.liveLink ? item.liveLink : Page + "/" + item.id}
              className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
              aria-label={item.title}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                {readMore} <MdArrowOutward />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/*  Hover Element */}
      <div
        className="hover-reveal pointer-events-none absolute left-0 top-0
        -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0
         transition-[background] duration-300"
        style={{
          backgroundImage:
            currentItem !== null ? `url(${contentImages[currentItem]})` : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
};

export default ContentList;
