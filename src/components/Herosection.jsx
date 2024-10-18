import React from "react";
import { homepage } from "../asset/assets";

const Herosection = () => {
  return (
    <section id="home" className="px-7 sm:px-20">
      <div className="container lg:flex mt-10 lg:p-8 p-4 items-start">
        <div className="home-content lg:px-32 p-0 lg:mt-14 sm:w-full">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#9A8E4C]">Refreshing</span>
            <br />
            <span className="text-[#014028]">Soul and body</span>
          </h2>
          <p className="text-white text-xl mb-8">
            Your health is our top priority. At HealtCare, we offer premium
            healthcare services delivered by a dedicated team of professionals
            ready to meet all your medical needs. Experience personalized care
            tailored just for you.
          </p>
        </div>
        <div className="home-image mt-8 lg:mt-0">
          <img
            src={homepage}
            alt="Doctor"
            className="w-full scale-125 lg:max-w-xl"
          />
        </div>
      </div>
    </section>
      );
};
export default Herosection;