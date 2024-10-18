import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Hero from "./pages/Hero";
import Yoga from "./pages/Yoga.jsx";
import Workout from "./pages/Workout.jsx";
import Bmi from "./pages/Bmi.jsx";
import Calorie from "./pages/Calorie.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/calorie" element={<Calorie />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
