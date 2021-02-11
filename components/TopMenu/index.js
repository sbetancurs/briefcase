import { breakpoints, colors } from "styles/theme";

import Colombia from "components/Icons/Colombia";
import Usa from "components/Icons/Usa";

import useTranslation from "hooks/useTranslation";

export default function TopMenu() {
  const [language, changeLanguage] = useTranslation();

  const handleClick = (e, lg) => {
    e.preventDefault();
    changeLanguage(lg);
  };

  return (
    <>
      <nav>
        <button
          style={{ background: language === "es" ? "#009" : "transparent" }}
          onClick={(e) => handleClick(e, "es")}
        >
          <Colombia width='40' height='40' />
        </button>
        <button
          style={{ background: language === "en" ? "#009" : "transparent" }}
          onClick={(e) => handleClick(e, "en")}
        >
          <Usa width='40' height='40' />
        </button>
      </nav>
      <style jsx>{`
        nav {
          backdrop-filter: blur(5px);
          background: #00002294;
          display: flex;
          height: 60px;
          justify-content: flex-end;
          outline: 0;
          position: fixed;
          width: 100%;
          z-index: 1000;
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
        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          nav {
            width: ${breakpoints.pc};
          }
        }
      `}</style>
    </>
  );
}
