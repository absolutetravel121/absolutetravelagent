"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import ImageWrapper from "./ImageWrapper";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);

      anime({
        targets: "#logo",
        scale: [0.8, 1.2, 1],
        duration: 1000,
        easing: "easeInOutQuad",
        complete: () => {
          setTimeout(() => {
            finishLoading();
          }, 500);
        },
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="splashScreen" isMounted={isMounted}>
      <ImageWrapper
        priority={true}
        id="logo"
        src="/splashLogo.gif"
        alt=""
        width={60}
        height={60}
      />
    </div>
  );
};

export default SplashScreen;
