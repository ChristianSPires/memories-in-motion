// eslint-disable-next-line no-unused-vars
import React, { useState }  from 'react';
import FallingHearts from './components/FallingHearts';
import Slider from "./components/Slider";
import Popup from './components/Popup';
import Countdown from './components/Countdown';
import "./App.css";

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <FallingHearts />
      <div className="content">
        <h1>Congratulations! You have reached level 12! 💖</h1>
        <Slider />
        <Countdown />

        <div className="text-section">
        <p>
          Você foi a coisa mais preciosa que apareceu na minha vida. Adoro todos os momentos que passo com você. A sua sabedoria e inteligência sobre todo e qualquer tipo de assunto são invejáveis, ainda mais do que o seu belo sorriso.
        </p>
        <p>
          Mas por que parar por aqui? Ainda há muito mais para ser dito. Mas, para isso, você passará por um teste! Em algum lugar desta página há um botão escondido que lhe permitirá seguir a sua jornada.
        </p>

          <p><strong>Boa sorte!</strong></p>
        </div>

        <div className="hidden-button-container">
          <button className="resgatar-button" onClick={openPopup}>Resgatar Prêmio</button>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}

export default App;