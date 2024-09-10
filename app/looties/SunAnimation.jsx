"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./sun.json";

const SunAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "60px", width: "60px" }}
      // Ajusta el tamaño según sea necesarios
    />
  );
};

export default SunAnimation;
