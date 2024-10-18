import React, { useState, useEffect } from "react";
import squatsGif from "../asset/squats.gif";
import pushUpsGif from "../asset/Push-Ups.gif";
import plankGif from "../asset/Plank.gif";
import legRaisesGif from "../asset/Leg Raises.gif";
import highKneesGif from "../asset/High Knees.gif";

const Workout = () => {
  const workouts = [
    {
      title: "Squats",
      image: squatsGif,
      description: "Total Reps: 12",
      duration: 30, // 30 seconds
    },
    {
      title: "Push-Ups",
      image: pushUpsGif,
      description: "Total Reps: 15",
      duration: 45, // 45 seconds
    },
    {
      title: "Plank",
      image: plankGif,
      description: "Hold for 30 seconds",
      duration: 30, // 30 seconds
    },
    {
      title: "Leg Raises",
      image: legRaisesGif,
      description: "Total Reps: 12",
      duration: 40, // 40 seconds
    },
    {
      title: "High Knees",
      image: highKneesGif,
      description: "Total Reps: 30 (each leg)",
      duration: 60, // 60 seconds
    },
  ];

  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(workouts[0].duration);
  const [showModal, setShowModal] = useState(false);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else {
        setShowModal(true); // Show modal when time runs out
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const showWorkout = (index) => {
    if (index >= 0 && index < workouts.length) {
      setCurrentWorkoutIndex(index);
      setTimeLeft(workouts[index].duration); // Reset the timer
    }
  };

  const previousWorkout = () => {
    if (currentWorkoutIndex > 0) {
      setShowModal(false);
      showWorkout(currentWorkoutIndex - 1);
    }
  };

  const nextWorkout = () => {
    if (currentWorkoutIndex < workouts.length - 1) {
      setShowModal(false);
      showWorkout(currentWorkoutIndex + 1);
    }
  };

  return (
    <div className="workoutbox flex items-center justify-center min-h-screen  p-4">
      <div className="workoutinnerbox shadow-lg bg-white p-6 rounded-xl w-full max-w-xl flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {workouts[currentWorkoutIndex].title}
        </h2>
        <img
          src={workouts[currentWorkoutIndex].image}
          alt={workouts[currentWorkoutIndex].title}
          className="w-full rounded mb-4 fade-in"
        />
        <p className="text-lg text-gray-700 mb-2">
          {workouts[currentWorkoutIndex].description}
        </p>
        <p className="text-lg font-bold text-red-500 mb-4">
          Time left: {timeLeft}s
        </p>
        <div className="navigation-buttons flex justify-between w-full">
          <button
            onClick={previousWorkout}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 w-1/2 mx-1"
          >
            Previous
          </button>
          <button
            onClick={nextWorkout}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 w-1/2 mx-1"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">
              {workouts[currentWorkoutIndex].title} Completed!
            </h3>
            <p className="mb-4">
              Great job! You have completed this workout. Ready for the next
              one?
            </p>
            <div className="modal-buttons flex justify-center gap-4">
              <button
                onClick={previousWorkout}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={nextWorkout}
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

export default Workout;
