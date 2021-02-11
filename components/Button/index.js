import { Children } from "react";
import { colors, fontSizes } from "../../styles/theme";

export default function Button({ children, disabled, onClick, width }) {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            align-items: center;
            background: ${colors.primary};
            border: 0;
            color: #fff;
            cursor: pointer;
            display: flex;
            justify-content: center;
            font-size: ${fontSizes.font_size_md};
            outline: 0;
            padding: 30px 40px;
            transition: opacity 0.3s ease;
            user-select: none;
            width: ${width};
          }

          button[disabled] {
            pointer-events: none;
            opacity: 0.2;
          }

          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.7;
          }
          p {
            font-size: ${fontSizes.font_size_sm};
          }
        `}
      </style>
    </>
  );
}
