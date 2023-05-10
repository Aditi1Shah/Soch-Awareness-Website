import React from "react";
import "./topiconbar.css";
export default function Topiconbar() {
  return (
    <div className="topiconbar">
      <div className="topiconbarleft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
        <i className="topicon fa-brands fa-youtube"></i>
      </div>
      <div className="topiconbarright">
        <i className="tophomeicon fa-solid fa-house-chimney"></i>
        <p className="address">
          60, 3rd Avenue, Angel's Colony, Bangalore, Karnataka, 560034|
        </p>
        <i className=" tophomeicon fa-sharp fa-solid fa-phone"></i>
        <p className="phone">0000000000</p>
      </div>
    </div>
  );
}
