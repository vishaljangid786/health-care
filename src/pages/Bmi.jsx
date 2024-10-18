import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100; // Convert height from cm to meters

    if (!isNaN(weightValue) && !isNaN(heightValue) && heightValue > 0) {
      const calculatedBMI = (weightValue / (heightValue * heightValue)).toFixed(
        2
      );
      setBMI(calculatedBMI);
    } else {
      alert("Please enter valid weight and height values.");
    }
  };

  return (
    <section className=" h-screen flex justify-center items-center ">
      <div className="bg-white p-8 sm:m-0 m-3 rounded-xl shadow-lg w-full max-w-xl text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          BMI Calculator
        </h2>
        <p className="mb-4">
          Calculate your Body Mass Index to understand your health better.
        </p>

        <form className="bmi-form space-y-4">
          <div>
            <label
              htmlFor="weight"
              className="block text-left mb-1 text-lg text-gray-700"
            >
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label
              htmlFor="height"
              className="block text-left mb-1 text-lg text-gray-700"
            >
              Height (cm):
            </label>
            <input
              type="number"
              id="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <button
            type="button"
            onClick={calculateBMI}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-all"
          >
            Calculate BMI
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-2xl font-semibold text-green-800">
            Your BMI is: {bmi}
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;
