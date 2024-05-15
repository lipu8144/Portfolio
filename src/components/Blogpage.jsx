import React from "react";
import { BlogData } from "../db/db";
import { useParams } from "react-router-dom";
import Bounded from "./Bounded";

const Blogpage = () => {
  //get blog data from backend and send to contentList
  const dummyData = [
    {
      id: 1,
      title: "Mastering JavaScript Animation",
      des: "",
      hoverImg: "/animation.jpg",
      tags: ["JS", "Animation"],
      date: "Tuesday, April 16, 2024",
    },
    {
      id: 2,
      title: "DOM and Virtual Dom",
      des:"",
      hoverImg: "/code.jpg",
      tags: ["JS", "React"],
      date: "Monday, March 6, 2024",
    },
  ];

  const {id} = useParams();

  const data = BlogData.find((blog)=> blog.id === Number(id));

  return (
    <Bounded>
      <div className=" rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-2">
        <h1 className="md:text-5xl text-2xl">{data.title}</h1>
        <div className="flex gap-4 text-yellow-400 md:text-xl font-bold">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 md:text-xl font-medium text-slate-300">
          {data.date}
        </p>
        {/* make a component leter for better look */}

        {data.id === 1 ? (
          <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:text-xl text-lg md:mt-20">
            {/* <SliceZone slices={page.data.slices} components={components} />; */}
            <p>
              Mastering JavaScript animation involves understanding both the
              basics of JavaScript itself and the principles of animation. Here
              are the key steps and concepts to get you started on mastering
              JavaScript animation:
            </p>
            <h2 className="text-2xl md:text-3xl">
              1. Learn the Basics of JavaScript
            </h2>
            <p>
              Before diving into animation, make sure you are comfortable with
              JavaScript fundamentals:
            </p>
            <ul>
              <li>Variables, data types, and functions</li>
              <li>DOM manipulation</li>
              <li>Event handling</li>
              <li>Event handling Timing functions (setTimeout, setInterval)</li>
            </ul>
            <h2 className="text-2xl md:text-3xl">
              2. Understand CSS Animations and Transitions
            </h2>
            <p>
              Though this is about mastering JavaScript animation, a good
              understanding of CSS animations and transitions is essential
              because they often complement JavaScript animations.
            </p>
            <h2 className="text-2xl md:text-3xl">3. Use the Canvas API</h2>
            <p>
              The HTML5 Canvas API is a powerful way to create complex
              animations:
            </p>
            <ul>
              <li>Learn how to draw shapes, text, and images on the canvas.</li>
              <li>
                Understand the requestAnimationFrame function for smooth
                animations.
              </li>
            </ul>
            <h2 className="text-2xl md:text-3xl">
              4. Explore Libraries and Frameworks
            </h2>
            <p>
              Several libraries make JavaScript animations easier and more
              robust:
            </p>
            <ul>
              <li>
                <b> GreenSock (GSAP):</b> A powerful, professional-grade
                animation library.
              </li>
              <li>
                <b>Anime.js:</b>Lightweight and easy-to-use.
              </li>
              <li>
                <b> Three.js:</b>For 3D animations.
              </li>
            </ul>
            <h2 className="text-2xl md:text-3xl">
              {" "}
              5. Practice with Basic Animations{" "}
            </h2>
            <p> Start with simple animations to build your confidence:</p>
            <ul>
              <li>Move an element from one position to another.</li>
              <li> Fade elements in and out.</li>
              <li> Rotate elements.</li>
            </ul>
            <h2 className="text-2xl md:text-3xl">
              Tips for Mastering JavaScript Animation
            </h2>
            <ol>
              <li>
                <b>
                  Practice Regularly:Experiment with different types of
                  animations regularly.
                </b>
              </li>
              <li>
                <b>Learn from Examples:</b>Study animations on popular websites
                and try to replicate them.
              </li>
              <li>
                <b>Read Documentation:</b>Thoroughly read the documentation of
                animation libraries.
              </li>
              <li>
                <b> Join Communities:</b>Participate in forums and communities
                like Stack Overflow, Reddit, and animation-focused groups.
              </li>
            </ol>
            <h2 className="text-2xl md:text-3xl">Recommended Resources </h2>
            <ol>
              <li>
                <b>MDN Web Docs:</b>Comprehensive resource for JavaScript,
                Canvas API, and more.
              </li>
              <li>
                <b>GreenSock (GSAP) Documentation:</b>Learn the ins and outs of
                GSAP.
              </li>
              <li>
                <b>Mozilla Developer Network (MDN):</b> Detailed guides and
                tutorials on using the Canvas API and requestAnimationFrame.
              </li>
            </ol>
          </div>
        ) : (
          <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:text-xl text-lg md:mt-20">
            <p>
              The differences between the DOM (Document Object Model) and the
              Virtual DOM is crucial for modern web development, particularly
              with libraries like React that heavily utilize the Virtual DOM.
              Here’s a detailed comparison and explanation of both concepts:
            </p>
            <h2>The DOM (Document Object Model)</h2>
            <p>
              <b>Definition:</b> The DOM is a programming interface for web
              documents. It represents the page so that programs can change the
              document structure, style, and content.
            </p>
            <h4>Key Characteristics:</h4>
            <ol>
              <li>
                <b>Tree Structure:</b>The DOM represents a document as a tree
                structure where each node is an object representing a part of
                the document (like elements, attributes, and text).
              </li>
              <li>
                <b>Direct Manipulation: </b>Changes to the DOM are made
                directly, which can be slow if there are many changes because
                the browser must re-render the affected parts of the document
                each time a change is made.
              </li>
              <li>
                <b>Performance Issues: </b> Frequent updates to the DOM can lead
                to performance bottlenecks because of the need to reflow and
                repaint the layout.
              </li>
            </ol>
            <h2>The Virtual DOM</h2>
            <p>
              <b>Definition:</b> The Virtual DOM is an in-memory representation
              of the real DOM elements generated by libraries like React. It
              acts as a middle layer between the actual DOM and the
              application’s code.
            </p>
            <h4>Key Characteristics:</h4>
            <ol>
              <li>
                <b>Virtual Representation:</b>The Virtual DOM is a lightweight
                copy of the real DOM. Changes are first made to the Virtual DOM.
              </li>
              <li>
                <b>Efficient Updates: </b>React uses a diffing algorithm to
                compare the Virtual DOM with a snapshot of its previous state
                and calculates the most efficient way to update the real DOM.
              </li>
              <li>
                <b>Batch Updates: </b>Updates to the real DOM are batched and
                minimized, reducing the number of reflows and repaints, thus
                improving performance.
              </li>
              <h2>How React Uses the Virtual DOM</h2>
              <ol>
                <li>
                  <b>Render:</b> When a component’s state or props change, React
                  renders a new Virtual DOM tree.
                </li>
                <li>
                  <b>Diff:</b> React compares the new Virtual DOM tree with the
                  previous one and identifies the differences.
                </li>
                <li>
                  <b>Patch:</b> React updates the real DOM only where changes
                  occurred, minimizing reflows and repaints.
                </li>
              </ol>
            </ol>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Blogpage;
