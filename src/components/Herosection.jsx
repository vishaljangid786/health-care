import React, { useEffect, useRef } from "react";
import { homepage } from "../asset/assets";
import gsap from "gsap";

const Herosection = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation for text content (heading, paragraph)
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animation for image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section id="home" className="px-7 sm:px-20">
      <div className="container lg:flex mt-10 lg:p-8 p-4 items-start">
        <div
          className="home-content lg:px-32 p-0 lg:mt-14 sm:w-full"
          ref={contentRef}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#9A8E4C]">Refreshing</span>
            <br />
            <span className="text-[#014028]">Soul and body</span>
          </h2>
          <p className="text-white text-xl mb-8">
            Your health is our top priority. At HealthCare, we offer premium
            healthcare services delivered by a dedicated team of professionals
            ready to meet all your medical needs. Experience personalized care
            tailored just for you.
          </p>
        </div>
        <div className="home-image mt-8 lg:mt-0">
          <img
            src={homepage}
            alt="Doctor"
            className="w-full lg:max-w-xl transform transition-transform duration-500 hover:scale-110"
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
