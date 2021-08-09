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
            ☝️
          </a>
        )}
      </div>
      <style jsx>{`
        .float {
          align-items: center;
          animation: breathing 1.5s linear infinite normal;
          background-color: ${colors.background_primary};
          border-radius: 50px;
          bottom: 40px;
          box-shadow: 2px 2px 3px ${colors.white};
          color: white;
          cursor: pointer;
          display: flex;
          font-size: 3rem;
          height: 65px;
          justify-content: center;
          position: fixed;
          right: 40px;
          text-align: center;
          text-decoration: none;
          transform: scale(1);
          width: 65px;
        }

        @keyframes breathing {
          0% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }

          25% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }

          60% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }

          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
