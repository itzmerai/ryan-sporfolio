import { useEffect, useState } from "react";

export const LightBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000);
    setStars(Array.from({ length: starCount }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 3,
    })));
  };

  const generateMeteors = () => {
    setMeteors(Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 40,
      delay: Math.random() * 10,
      speed: Math.random() * 1.8 + 2.2,
    })));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: 'rgba(255, 200, 80, 0.9)',
            opacity: star.opacity,
            boxShadow: '0 0 6px rgba(255, 200, 100, 0.6), 0 0 12px rgba(255, 200, 100, 0.3)',
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor absolute"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animation: `meteorFly ${meteor.speed}s cubic-bezier(0.55, 0.085, 0.68, 0.53) ${meteor.delay}s infinite`,
          }}
        />
      ))}

      {/* Animations */}
      <style jsx="true">{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.9); }
        }

        .meteor {
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: rgba(255, 180, 80, 0.95);
          box-shadow: 0 0 8px 3px rgba(255, 150, 50, 0.6);
          transform: rotate(-45deg);
          opacity: 0;
        }

        .meteor::after {
          content: "";
          position: absolute;
          top: 0;
          left: -80px;
          width: 80px;
          height: 2px;
          background: linear-gradient(
            to right,
            rgba(255, 200, 100, 0.6),
            rgba(255, 150, 0, 0.2),
            transparent
          );
          transform: rotate(45deg);
          filter: blur(1px);
        }

        @keyframes meteorFly {
          0% {
            transform: translate(0, 0) rotate(-45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(100vw, 100vh) rotate(-45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
