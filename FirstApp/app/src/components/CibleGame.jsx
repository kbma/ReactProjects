//src/components/CibleGame.jsx
import { useState, useEffect } from "react";
 
 
const CibleGame = () => {
  // Etat pour position de la cible
  const [position, setPosition] = useState({ top: 100, left: 100 });
  // Etat pour score
  const [score, setScore] = useState(0);
  // Etat pour temps restant
  const [time, setTime] = useState(30);
 
  // Déplacement aléatoire de la cible
  const moveTarget = () => {
    const newTop = Math.floor(Math.random() * 400); // hauteur max 400px
    const newLeft = Math.floor(Math.random() * 400); // largeur max 400px
    setPosition({ top: newTop, left: newLeft });
  };
 
  // Gestion du clic sur la cible
  const handleClick = () => {
    setScore(score + 1);
    moveTarget();
  };
 
  // Timer du jeu
  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);
 
  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        border: "2px solid black",
        margin: "20px auto",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Score: {score}</h2>
      <h3>Temps restant: {time}s</h3>
      {time > 0 && (
        <div
          onClick={handleClick} // Événement de clic
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      )}
      {time === 0 && <h2>Temps écoulé ! Votre score: {score}</h2>}
    </div>
  );
};
 
export default CibleGame;
