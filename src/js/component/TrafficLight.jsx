import React, { useState } from 'react';

const TrafficLight = () => {
  const [colorOn, activarColor] = useState("");
  const [isActive, setIsActive] = useState(false);

  const alClick = (selectedColor) => {
    if (colorOn === selectedColor) {
      activarColor("");
      setIsActive(false);
    } else {
      activarColor(selectedColor);
      setIsActive(true);
    }
  }

  return (
    <div className="semáforo">
      <div
        className={`luz roja ${isActive && colorOn === "roja" ? "activa" : ""}`}
        onClick={() => alClick("roja")}
      ></div>
      <div
        className={`luz amarilla ${isActive && colorOn === "amarilla" ? "activa" : ""}`}
        onClick={() => alClick("amarilla")}
      ></div>
      <div
        className={`luz verde ${isActive && colorOn === "verde" ? "activa" : ""}`}
        onClick={() => alClick("verde")}
      ></div>
    </div>
  );
};

export default TrafficLight;



