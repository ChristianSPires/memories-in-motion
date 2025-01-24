import React, { useState } from 'react';
import './Popup.css';

import AmorImage from '../../assets/images/amor_2.jpg';

const Popup = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setShowSecondPopup(true);
  };

  const handleClose = () => {
    setSelectedOption(null);
    setShowSecondPopup(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {showSecondPopup ? (
          <>
            <img src={AmorImage} alt="Special Moment" style={{ maxWidth: '100%' }} />
            <button onClick={handleClose} className="close-button">Fechar</button>
          </>
        ) : (
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
