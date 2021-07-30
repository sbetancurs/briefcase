/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/theme";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className='scroll-to-top'>
        {isVisible && (
          <a onClick={scrollToTop} className='float'>
            ☝
          </a>
        )}
      </div>
      <style jsx>{`
        .float {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${colors.primary};
          border-radius: 50px;
          bottom: 40px;
          box-shadow: 2px 2px 3px ${colors.primary_highlight};
          color: black;
          cursor: pointer;
          height: 65px;
          position: fixed;
          right: 40px;
          text-align: center;
          width: 65px;
          font-size: 4rem;
          padding-bottom: 0.5rem;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
