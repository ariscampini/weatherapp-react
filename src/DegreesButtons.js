import React from "react";
import "./DegreeButtons.css";

export default function DegreesButtons() {
  return (
    <div className="row app">
      <button className="celsius">°C</button>
      <button className="fahrenheit">°F</button>
    </div>
  );
}