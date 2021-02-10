import { breakpoints } from "styles/theme";

import Colombia from "components/Icons/Colombia";
import Usa from "components/Icons/Usa";

export default function TopMenu() {
  return (
    <>
      <nav>
        <div>
          <Colombia width='40' height='40' />
        </div>
        <div>
          <Usa width='40' height='40' />
        </div>
      </nav>
      <style jsx>{`
        nav {
          height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          z-index: 100;
        }
        div {
          cursor: pointer;
          padding: 10px;
        }
        div:hover {
          border-radius: 50%;
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
