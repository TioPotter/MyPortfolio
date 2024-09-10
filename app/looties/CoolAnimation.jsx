"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./cool.json";

const CoolAnimation = () => {
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

export default CoolAnimation;
