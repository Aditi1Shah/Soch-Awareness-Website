import Topbar from "./topbar/Topbar";
import Topiconbar from "./topiconbar/Topiconbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Slider from "./ImageSlider/Slider";
import Foodhabbits from "./Components/Foodhabbits";
import Mentalhealth from "./Components/Mentalhealth";
import Mentalhealthfirst from "./Components/Subcomponents/Mentalhealthfirst";
import MainMentalhealth from "./Components/MainMentalhealth";
import HappyLife from "./Components/MentalHealthBlogs/HappyLife";
import Meditation from "./Components/MentalHealthBlogs/Meditation";
import Register from "./Register/Register";
import Physicalfitness from "./Components/PhysicalFitness/Physicalfitness";
import Login from "./Login/login";
import Home from "./Home";
//import Navbar from "./navbar/Navbar";
function App() {
  const user = false;
  return (
    <Router>
      <Topiconbar />
      <Topbar />
      <Routes>
        {/* <Route exact path="/" component={Slider} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/foodhabbits" component={Foodhabbits} /> */}
        <Route path="/foodhabbits" element={<Foodhabbits />} />
        <Route path="/mentalhealth" element={<MainMentalhealth />} />
        <Route path="/happylife" element={<HappyLife />} />
        <Route path="/register" element={user ? <Slider /> : <Register />} />
        <Route path="/physicalfitness" element={<Physicalfitness />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </Router>
  );
}

export default App;
