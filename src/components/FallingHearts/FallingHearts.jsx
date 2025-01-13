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

      // Remove o coração após o fim da animação (8s da animação + 2s de atraso máximo)
      setTimeout(() => heart.remove(), 11000); // 8s + margem de segurança

      // Cria o próximo coração após 700ms
      setTimeout(createHeart, 700);
    };

    createHeart();

    // Limpa os corações ao desmontar o componente
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="falling-hearts-container"></div>;
};

export default FallingHearts;
