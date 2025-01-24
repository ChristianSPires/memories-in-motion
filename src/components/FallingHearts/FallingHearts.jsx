import React, { useEffect } from "react";
import "./FallingHearts.css";

const FallingHearts = () => {
  useEffect(() => {
    const container = document.querySelector(".falling-hearts-container");

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerText = "🩷";
      heart.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: -40px;
        font-size: 30px;
        animation: fall 9s linear ${Math.random() * 2}s;
        user-select: none;
        pointer-events: none;
      `;

      container.appendChild(heart);

      setTimeout(() => heart.remove(), 11000);

      setTimeout(createHeart, 700);
    };

    createHeart();

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="falling-hearts-container"></div>;
};

export default FallingHearts;
