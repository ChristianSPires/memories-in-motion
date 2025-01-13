import React, { useState } from 'react';
import './Popup.css';

import AmorImage from '../../assets/images/amor_2.jpg';

const Popup = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Armazena a opção selecionada
  const [showSecondPopup, setShowSecondPopup] = useState(false); // Controle do segundo pop-up

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Atualiza a opção selecionada
  };

  const handleSubmit = () => {
    setShowSecondPopup(true); // Mostra o segundo pop-up
  };

  const handleClose = () => {
    setSelectedOption(null); // Reseta a opção selecionada
    setShowSecondPopup(false); // Garante que o segundo pop-up também seja fechado
    onClose(); // Fecha o pop-up principal
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {showSecondPopup ? (
          // Conteúdo do segundo pop-up
          <>
            <img src={AmorImage} alt="Special Moment" style={{ maxWidth: '100%' }} />
            <button onClick={handleClose} className="close-button">Fechar</button>
          </>
        ) : (
          // Conteúdo do primeiro pop-up
          <>
            <h2>¡Ajá! Pero antes tendrás que responder una pregunta crucial.</h2>
            <h3>Quis magis amat?</h3>

            <div className="options">
              <label>
                <input
                  type="radio"
                  name="love"
                  value="Christian"
                  checked={selectedOption === 'Christian'}
                  onChange={() => handleOptionChange('Christian')}
                />
                Christian
              </label>
              <label>
                <input
                  type="radio"
                  name="love"
                  value="Gabriela"
                  checked={selectedOption === 'Gabriela'}
                  onChange={() => handleOptionChange('Gabriela')}
                />
                Gabriela
              </label>
            </div>

            <div className="popup-buttons">
              <button onClick={handleClose} className="close-button">Fechar</button>
              {selectedOption === 'Christian' && (
                <button onClick={handleSubmit} className="submit-button">
                  Enviar
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
