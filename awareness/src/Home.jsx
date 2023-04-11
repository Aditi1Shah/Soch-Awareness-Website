import React from "react";
import Mentalblog from "./Components/HomeSubComponents/Mentalblog";
import Slider from "./ImageSlider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Mentalblog />
    </div>
  );
}
