import React, { useState, useRef, useEffect } from "react";
import { calorieData } from "../asset/assets";
import { gsap } from "gsap";

const CalorieCalculator = () => {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalCalories, setTotalCalories] = useState(null);
  const resultRef = useRef(null);

  const calculateCalories = () => {
    const caloriesPerUnit = calorieData[food.toLowerCase()] || 0;
    const total = parseFloat(quantity) * caloriesPerUnit;
    setTotalCalories(
      total
        ? `Total Calories: ${total} kcal`
        : "Food item not found. Please try again."
    );
  };

  useEffect(() => {
    if (totalCalories) {
      // Animate the result when calories are calculated
      gsap.fromTo(
        resultRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    }
  }, [totalCalories]);

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className="calorie-section bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-green-600 mb-4 text-center">
          Calorie Calculator
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Calculate the total calories you consumed today based on common Indian
          foods.
        </p>
        <div className="calorie-form bg-gray-100 p-6 rounded-xl shadow-md">
          <label
            className="block text-left text-lg text-gray-700 mb-2"
            htmlFor="food"
          >
            Food Item (e.g., Roti, Rice, Dal, etc.):
          </label>
          <input
            type="text"
            id="food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            placeholder="Enter food item"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label
            className="block text-left text-lg text-gray-700 mb-2"
            htmlFor="quantity"
          >
            Quantity (number of servings):
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="button"
            onClick={calculateCalories}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-all duration-200"
          >
            Calculate Calories
          </button>
        </div>
        {totalCalories && (
          <div
            ref={resultRef}
            className="result text-2xl font-bold text-green-600 mt-6 text-center"
          >
            {totalCalories}
          </div>
        )}
      </div>
    </section>
  );
};

export default CalorieCalculator;
