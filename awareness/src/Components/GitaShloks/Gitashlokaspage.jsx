import React from "react";
import Anger from "./CardsGita/Anger";
import Demotivation from "./CardsGita/Demotivation";
import "./gitapages.css";
import Discrimination from "./CardsGita/Discrimination";
import Confusion from "./CardsGita/Confusion";
import Death from "./CardsGita/Death";
function Gitashlokaspage() {
  return (
    <div className="maindivpage">
      <h1 className="mainhead">
        Finding Solutions for your problems in Bhagvat Gita
      </h1>
      <div className="Gitapagediv">
        <Anger />
        <Demotivation />
        <Discrimination />
      </div>
      <div className="Gitapagediv">
        <Confusion />
        <Death />
      </div>
    </div>
  );
}

export default Gitashlokaspage;
