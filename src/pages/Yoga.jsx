import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { yogaSessions } from "../asset/assets";

const Yoga = () => {
  

  const [currentYogaIndex, setCurrentYogaIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(yogaSessions[0].duration);
  const [showModal, setShowModal] = useState(false);
  const yogaRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else {
        setShowModal(true);
        gsap.fromTo(
          modalRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    gsap.fromTo(
      yogaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, [currentYogaIndex]);

  const showYoga = (index) => {
    if (index >= 0 && index < yogaSessions.length) {
      setCurrentYogaIndex(index);
      setTimeLeft(yogaSessions[index].duration);
    }
  };

  const previousYoga = () => {
    if (currentYogaIndex > 0) {
      setShowModal(false);
      showYoga(currentYogaIndex - 1);
    }
  };

  const nextYoga = () => {
    if (currentYogaIndex < yogaSessions.length - 1) {
      setShowModal(false);
      showYoga(currentYogaIndex + 1);
    }
  };

  return (
    <div className="yogabox flex items-center justify-center min-h-screen p-4">
      <div
        className="yogainnerbox shadow-lg bg-white p-6 rounded-xl w-full max-w-xl flex flex-col items-center"
        ref={yogaRef}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {yogaSessions[currentYogaIndex].title}
        </h2>
        <img
          src={yogaSessions[currentYogaIndex].image}
          alt={yogaSessions[currentYogaIndex].title}
          className="w-full rounded mb-4"
        />
        <p className="text-lg text-gray-700 mb-2">
          {yogaSessions[currentYogaIndex].description}
        </p>
        <p className="text-lg font-bold text-red-500 mb-4">
          Time left: {timeLeft}s
        </p>
        <div className="navigation-buttons flex justify-between w-full">
          <button
            onClick={previousYoga}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 w-1/2 mx-1"
          >
            Previous
          </button>
          <button
            onClick={nextYoga}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 w-1/2 mx-1"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
          ref={modalRef}
        >
          <div className="modal-content bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">
              {yogaSessions[currentYogaIndex].title} Completed!
            </h3>
            <p className="mb-4">
              Great job! You have completed this session. Ready for the next
              one?
            </p>
            <div className="modal-buttons flex justify-center gap-4">
              <button
                onClick={previousYoga}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={nextYoga}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yoga;
