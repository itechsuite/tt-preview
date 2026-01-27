"use client";

import { useEffect, useState } from "react";
import "./Scrollup.css";

const ScrollUpBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className="customScrollUp" onClick={scrollUp} aria-label="Scroll to top">
          <i className="icofont-rocket-alt-1"></i>
        </button>
      )}
    </>
  );
};

export default ScrollUpBtn;
