import React, { useState, useEffect } from "react";
import yoga4 from "../asset/yoga4.gif";
import yoga5 from "../asset/yoga5.gif";
import yoga6 from "../asset/yoga6.gif";
import yoga7 from "../asset/yoga7.gif";
import yoga8 from "../asset/yoga8.gif";

const Yoga = () => {
  const yogaSessions = [
    {
      title: "Cat-Cow Pose (Marjaryasana-Bitilasana)",
      image: yoga4,
      duration: "30 seconds",
      time: 30, // Time in seconds
    },
    {
      title: "Knees-to-Chest Pose (Apanasana)",
      image: yoga5,
      duration: "45 seconds",
      time: 45,
    },
    {
      title: "Plank Pose (Phalakasana)",
      image: yoga6,
      duration: "30 seconds on each side",
      time: 30,
    },
    {
      title: "Plank Pose (Kumbhakasana)",
      image: yoga7,
      duration: "30 seconds on each leg",
      time: 30,
    },
    {
      title: "Dancer's Pose (Natarajasana)",
      image: yoga8,
      duration: "1 minute",
      time: 60,
    },
  ];

  const [currentYogaIndex, setCurrentYogaIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(yogaSessions[0].time);
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    // Start the countdown timer
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        setShowModal(true); // Show modal when time is up
      }
    }, 1000);

    // Clean up the timer on component unmount or yoga session change
    return () => clearInterval(timer);
  }, [timeLeft]);

  const previousYoga = () => {
    if (currentYogaIndex > 0) {
      setCurrentYogaIndex(currentYogaIndex - 1);
      setTimeLeft(yogaSessions[currentYogaIndex - 1].time);
      setShowModal(false); // Hide modal when navigating
    }
  };

  const nextYoga = () => {
    if (currentYogaIndex < yogaSessions.length - 1) {
      setCurrentYogaIndex(currentYogaIndex + 1);
      setTimeLeft(yogaSessions[currentYogaIndex + 1].time);
      setShowModal(false); // Hide modal when navigating
    }
  };

  return (
    <div className="yogabox flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 to-green-900">
      <div className="yogainnerbox lg:flex-row flex flex-col items-center bg-white m-5 p-8 rounded-xl shadow-lg w-fit gap-4 ">
        <div>
          <h2 className="text-2xl text-center font-semibold mb-4">
            {yogaSessions[currentYogaIndex].title}
          </h2>
          <p className="text-lg text-center text-gray-700 mb-2">
            {yogaSessions[currentYogaIndex].duration}
          </p>
          <p className="text-lg text-center text-red-500 mb-4">
            Time left: {timeLeft} seconds
          </p>
          <div className="navigation-buttons mt-32 flex justify-between">
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
        <img
          src={yogaSessions[currentYogaIndex].image}
          alt={yogaSessions[currentYogaIndex].title}
          className="lg:w-1/2 rounded mb-4 fade-in"
        />
      </div>

      {/* Modal Dialog */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Session Ended</h3>
            <p className="text-gray-700 mb-4">
              The yoga session has ended. Would you like to continue to the next
              session?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={previousYoga}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={nextYoga}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
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
