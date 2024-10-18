import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tips } from "../asset/assets";

gsap.registerPlugin(ScrollTrigger);

const HealthyTips = () => {


  const listItemsRef = useRef([]);

  useEffect(() => {
    // Animate each tip based on the scroll trigger and direction
    listItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y:
            tips[index].direction === "top"
              ? -50
              : tips[index].direction === "bottom"
              ? 50
              : 0,
          x:
            tips[index].direction === "left"
              ? -50
              : tips[index].direction === "right"
              ? 50
              : 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [tips]);

  return (
    <div className="max-w-2xl mb-10 mx-auto p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
        Healthy Living Tips
      </h2>
      <ul className="space-y-6">
        {tips.map((tip, index) => (
          <li
            key={index}
            ref={(el) => (listItemsRef.current[index] = el)}
            className="text-lg bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-green-100 hover:text-green-700"
          >
            {tip.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthyTips;
