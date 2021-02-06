import Colombia from "components/Icons/Colombia";
import Usa from "components/Icons/Usa";

import { colors } from "styles/theme";

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
          border-bottom: 1px solid ${colors.secondary};
          height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        div {
          cursor: pointer;
          padding: 10px;
        }
        div:hover {
           {
            /* background: ${colors.primary}; */
          }
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
