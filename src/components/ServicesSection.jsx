import React, { useEffect, useRef } from "react";
import { FaHeartbeat, FaDumbbell, FaAppleAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Scroll-trigger animation for each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="services" className="px-7 sm:px-20 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#014028]">
          Our Healthcare Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white shadow-md rounded-lg p-8 text-center"
          >
            <FaHeartbeat className="text-5xl text-red-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cardiology
            </h3>
            <p className="text-gray-600">
              Our expert cardiologists provide the highest level of care for
              heart health, ensuring comprehensive cardiac evaluations and
              treatments.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white shadow-md rounded-lg p-8 text-center"
          >
            <FaDumbbell className="text-5xl text-blue-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Fitness Training
            </h3>
            <p className="text-gray-600">
              We offer personalized fitness programs designed by professionals
              to keep your body in shape and boost your overall well-being.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white shadow-md rounded-lg p-8 text-center"
          >
            <FaAppleAlt className="text-5xl text-green-500 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition</h3>
            <p className="text-gray-600">
              Our team of nutritionists provides customized diet plans to ensure
              you get the right nutrients for a balanced, healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
