"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Primero, importa la librería de manera dinámica
const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
  ssr: false,
});

const SunAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Importa el JSON de manera dinámica
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import('./sun.json').then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!isClient || !animationData) return null;

  return (
    <LottiePlayer
      autoplay
      loop
      src={animationData}
      style={{ height: "60px", width: "60px" }}
    />
  );
};

export default SunAnimation;