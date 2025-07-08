"use client";
import React, { useEffect, useState } from "react";
import { animate } from "animejs";     
import ImageWrapper from "./ImageWrapper";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    animate("#logo", {
      scale: [0.8, 1.2, 1],          
      duration: 1000,
      ease: "inOutQuad",      
    }).then(() => {
      
      setTimeout(() => finishLoading(), 500);
    });
  }, [finishLoading]);

  return (
    <div className={`splashScreen ${isMounted ? "mounted" : ""}`}>
      <ImageWrapper
        priority
        id="logo"
        src="/splashLogo.gif"
        alt="App logo"
        width={60}
        height={60}
      />
    </div>
  );
};

export default SplashScreen;
