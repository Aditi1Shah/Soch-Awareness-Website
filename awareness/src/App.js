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
import Write from "./Write/Write";
import Home from "./Home";
import { useContext } from "react";
import { Context } from "./Context/Context";
import SinglePost from "./Components/Singleposts/SinglePost";
import DisplayPosts from "./Components/DisplayPosts";
import MainDrugAddiction from "./Components/DrugAddictionMain/MainDrugAddiction";
import AboutUs from "./Components/AboutUs/AboutUs";
import Gitashlokaspage from "./Components/GitaShloks/Gitashlokaspage";
import Angerpage from "./Components/GitaShloks/PagesGita/Angerpage";
import Demotivated from "./Components/GitaShloks/PagesGita/Demotivated";
import Discriminationpage from "./Components/GitaShloks/PagesGita/Discriminationpage";
import Confusionpage from "./Components/GitaShloks/PagesGita/Confusionpage";
import DeathOfLovedOne from "./Components/GitaShloks/PagesGita/DeathOfLovedOne";

//import Navbar from "./navbar/Navbar";
function App() {
  //const user = false;
  const { user } = useContext(Context);
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
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/physicalfitness" element={<Physicalfitness />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/displaypost" element={<DisplayPosts />} />
        <Route path="/drugaddiction" element={<MainDrugAddiction />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gitapage" element={<Gitashlokaspage />} />
        <Route path="/angerpage" element={<Angerpage />} />
        <Route path="/demotivatedpage" element={<Demotivated />} />
        <Route path="/discriminationdpage" element={<Discriminationpage />} />
        <Route path="/confusionpage" element={<Confusionpage />} />
        <Route path="/deathoflovedpage" element={<DeathOfLovedOne />} />
      </Routes>
    </Router>
  );
}

export default App;
