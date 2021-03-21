import React from "react";
import "./Temperature.css";
import DegreesButtons from "./DegreesButtons";

export default function Temperature() {
  return (
    <div class="row app">
      <div class="col-6">
        <p className="currentTemperature">13°C</p>
        <img
          src="images/sun.png"
          alt="ClearSky"
          className="Sunny"
          width="50px"
        />
        <p class="clearsky">Clear Sky</p>
      </div>
      <DegreesButtons />
    </div>
  );
}