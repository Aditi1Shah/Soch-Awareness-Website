import React from "react";
import Mentalhealth from "./Mentalhealth";
import Mentalhealthfirst from "./Subcomponents/Mentalhealthfirst";
import Mentalhealthsecond from "./Subcomponents/Mentalhealthsecond";
import Mentalhealththird from "./Subcomponents/Mentalhealththird";
import "./MainMentalhealth.css";
export default function MainMentalhealth() {
  return (
    <div className="posts">
      <Mentalhealth />
      <br />
      <Mentalhealthfirst />
      <Mentalhealthsecond />
      <Mentalhealththird />
    </div>
  );
}
