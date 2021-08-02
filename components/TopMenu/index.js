import { breakpoints, colors } from "styles/theme";

import Colombia from "components/Icons/Colombia";
import Usa from "components/Icons/Usa";

import useTranslation from "hooks/useTranslation";

export default function TopMenu({ hv = false }) {
  const [language, changeLanguage] = useTranslation();
  const handleClick = (e, lg) => {
    e.preventDefault();
    changeLanguage(lg);
  };

  const esActive = language === "es";

  return (
    <>
      <nav
        className={
          "d-flex justify-content-center" +
          (!hv
            ? "flex-lg-column align-items-start justify-content-end position-fixed"
            : "")
        }
      >
        <button
          className={esActive ? "bActive" : "bDesactive"}
          onClick={(e) => handleClick(e, "es")}
        >
          <img
            className={"icon " + (esActive ? "animationOn" : "animationOff")}
            src='/icons/colombia.svg'
          />
        </button>
        <button
          className={!esActive ? "bActive" : "bDesactive"}
          onClick={(e) => handleClick(e, "en")}
        >
          <img
            className={"icon " + (!esActive ? "animationOn" : "animationOff")}
            src='/icons/usa.svg'
          />
        </button>
      </nav>

      <style jsx>{`
        nav {
          top: 40vh;
          border-top-right-radius: 120%;
          border-bottom-right-radius: 120%;
          padding: 10px;
          z-index: 1000;
          background-color: ${colors.secondary};
          width: max-content;
        }
        button {
          background: transparent;
          border: 0 solid transparent;
          cursor: pointer;
          padding: 10px;
          user-select: none;
        }
        button:hover {
          opacity: 0.7;
        }

        .icon {
          width: 50px;
          height: 50px;
        }

        .bActive {
          border-left: 1px solid ${colors.primary};
        }
        .bDesactive {
          border-left: 0;
        }

        .animationOn {
          -webkit-animation: breathing 2s ease-out infinite normal;
          animation: breathing 1s ease-out infinite normal;
        }

        .animationOff {
          animation: none 0s;
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
        @media (max-width: ${breakpoints.mobile}),
          (max-width: ${breakpoints.ipad}) {
          nav {
            width: 100%;
            top: 0;
            background-color: transparent;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          .bActive {
            border-left: 0;
            border-bottom: 1px solid ${colors.primary};
          }
        }
      `}</style>
    </>
  );
}
