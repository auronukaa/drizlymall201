"use client";

import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const Confetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  setTimeout(() => {
    setShowConfetti(true);
  }, 500);

  return (
    <div>
      {showConfetti && (
        <ConfettiExplosion
          duration={6000}
          numberOfPieces={500}
          recycle={false}
          size={5}
        />
      )}
    </div>
  );
};

export default Confetti;
