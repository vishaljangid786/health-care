import homepage from "./homepage.png";
import bot from "./bot.jpg";
import yoga4 from "./yoga4.gif";
import yoga5 from "./yoga5.gif";
import yoga6 from "./yoga6.gif";
import yoga7 from "./yoga7.gif";
import yoga8 from "./yoga8.gif";
import squatsGif from "./squats.gif";
import pushUpsGif from "./Push-Ups.gif";
import plankGif from "./Plank.gif";
import legRaisesGif from "./Leg Raises.gif";
import highKneesGif from "./High Knees.gif";

const calorieData = {
  // Grains & Breads
  roti: 80, // 1 Roti (medium)
  rice: 130, // 100g cooked
  brown_rice: 112, // 100g cooked
  paratha: 120, // 1 (medium)
  bread: 70, // 1 slice (white)
  whole_wheat_bread: 80, // 1 slice

  // Pulses & Legumes
  dal: 100, // 100g cooked
  rajma: 140, // 100g cooked
  chole: 180, // 100g cooked
  moong_dal: 104, // 100g cooked
  toor_dal: 122, // 100g cooked

  // Dairy & Dairy Products
  milk: 42, // 100ml
  paneer: 265, // 100g
  curd: 60, // 100g
  ghee: 112, // 1 tbsp
  butter: 102, // 1 tbsp

  // Vegetables
  potato: 87, // 100g boiled
  spinach: 23, // 100g cooked
  carrot: 35, // 100g raw
  cauliflower: 25, // 100g cooked
  peas: 81, // 100g cooked
  tomato: 18, // 100g raw
  onion: 40, // 100g raw

  // Fruits
  apple: 52, // 100g
  banana: 89, // 100g
  mango: 60, // 100g
  orange: 47, // 100g
  grapes: 69, // 100g
  papaya: 43, // 100g
  watermelon: 30, // 100g

  // Meat & Poultry
  chicken: 230, // 100g cooked
  mutton: 294, // 100g cooked
  fish: 206, // 100g cooked
  egg: 70, // 1 large boiled
  prawns: 99, // 100g cooked

  // Snacks
  samosa: 252, // 1 piece (100g)
  pakora: 180, // 100g
  namkeen: 550, // 100g
  bhujia: 550, // 100g
  poha: 180, // 100g cooked
  idli: 39, // 1 small
  dosa: 133, // 1 medium
  upma: 170, // 100g cooked
  pav: 150, // 1 piece

  // Beverages
  tea_with_milk_sugar: 90, // 1 cup
  coffee_with_milk_sugar: 110, // 1 cup
  soft_drink: 150, // 1 can (330ml)
  lassi: 220, // 1 glass (200ml)
  coconut_water: 19, // 100ml

  // Desserts
  gulab_jamun: 143, // 1 piece
  rasgulla: 106, // 1 piece
  jalebi: 150, // 100g
  ice_cream: 207, // 100g vanilla
  chocolate: 546, // 100g
  ladoo: 186, // 1 piece
  kheer: 143, // 100g

  // Fast Food
  pizza: 285, // 1 slice (medium)
  burger: 295, // 1 piece (medium)
  french_fries: 312, // 100g
  sandwich: 250, // 1 medium sandwich
  biryani: 290, // 1 cup (200g)
};
const yogaSessions = [
  {
    title: "Cat-Cow Pose (Marjaryasana-Bitilasana)",
    image: yoga4,
    description: "Hold for 30 seconds",
    duration: 30, // Time in seconds
  },
  {
    title: "Knees-to-Chest Pose (Apanasana)",
    image: yoga5,
    description: "Hold for 45 seconds",
    duration: 45,
  },
  {
    title: "Plank Pose (Phalakasana)",
    image: yoga6,
    description: "Hold for 30 seconds on each side",
    duration: 30,
  },
  {
    title: "Plank Pose (Kumbhakasana)",
    image: yoga7,
    description: "Hold for 30 seconds on each leg",
    duration: 30,
  },
  {
    title: "Dancer's Pose (Natarajasana)",
    image: yoga8,
    description: "Hold for 1 minute",
    duration: 60,
  },
];
const tips = [
  {
    text: "Eat a balanced diet with fruits, vegetables, and whole grains.",
    direction: "top",
  },
  {
    text: "Stay hydrated with at least 8 glasses of water daily.",
    direction: "left",
  },
  {
    text: "Engage in regular exercise, at least 150 minutes per week.",
    direction: "right",
  },
  { text: "Get 7-9 hours of quality sleep each night.", direction: "bottom" },
  {
    text: "Manage stress with relaxation techniques like meditation.",
    direction: "top",
  },
  {
    text: "Avoid harmful habits such as smoking and excessive alcohol.",
    direction: "left",
  },
  { text: "Schedule regular health check-ups.", direction: "right" },
  {
    text: "Stay connected with loved ones for emotional well-being.",
    direction: "bottom",
  },
];

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

export { homepage, calorieData, yogaSessions, tips, workouts };
