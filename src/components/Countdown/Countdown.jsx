import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [timeTogether, setTimeTogether] = useState({});

  const startDate = new Date('2024-02-13'); // Data de início do relacionamento
  const [nextAnniversary, setNextAnniversary] = useState(() => {
    const now = new Date();
    let anniversary = new Date(now.getFullYear(), 1, 13); // 13 de fevereiro
    if (now > anniversary) {
      anniversary.setFullYear(anniversary.getFullYear() + 1);
    }
    return anniversary;
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = nextAnniversary - now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Reseta para o próximo ano quando a contagem chegar a zero
      setNextAnniversary((prev) => {
        const newDate = new Date(prev);
        newDate.setFullYear(newDate.getFullYear() + 1);
        return newDate;
      });
    }

    return timeLeft;
  };

  const calculateTimeTogether = () => {
    const now = new Date();
    let diffYears = now.getFullYear() - startDate.getFullYear();
    let diffMonths = now.getMonth() - startDate.getMonth();
    let diffDays = now.getDate() - startDate.getDate();

    if (diffDays < 0) {
      diffMonths--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      diffDays += prevMonth.getDate();
    }

    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }

    return {
      anos: diffYears,
      meses: diffMonths,
      dias: diffDays,
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setTimeTogether(calculateTimeTogether());
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [nextAnniversary]); // Atualiza quando o próximo aniversário mudar

  return (
    <div className="timers">
      <div className="countdown">
        <h2>Contagem Regressiva para o Próximo Aniversário:</h2>
        <p>
          <span className="highlight">{timeLeft.dias || 0}</span> dias, 
          <span className="highlight"> {timeLeft.horas || 0}</span> horas, 
          <span className="highlight"> {timeLeft.minutos || 0}</span> minutos, 
          <span className="highlight"> {timeLeft.segundos || 0}</span> segundos
        </p>
      </div>
      <div className="time-together">
        <h2>Estamos juntos há:</h2>
        <p>
          {timeTogether.anos || 0} anos, {timeTogether.meses || 0} meses e {timeTogether.dias || 0} dias
        </p>
      </div>
    </div>
  );
};

export default Countdown;
