import { colors, fontSizes, breakpoints } from "../../styles/theme";

export default function Button({
  children,
  isEnable = true,
  onClick,
  classNames,
}) {
  return (
    <>
      <button
        className={
          "bButton " +
          classNames +
          (isEnable ? " animationOn" : " animationOff noHover")
        }
        disabled={!isEnable}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </button>
      <style jsx>
        {`
          .bButton {
            background: transparent;
            color: ${colors.primary_highlight};
            font-size: ${fontSizes.font_size_md};
            letter-spacing: 4px;
            overflow: hidden;
            transition: 0, 2s;
            padding: 15px 25px;
            position: relative;
            display: block;
            border: 0;
            border-radius: 2px;
            border-bottom: 1px solid ${colors.primary};
            min-width: max-content;
          }

          .bButton.inForm {
            border: 1px solid ${colors.primary};
          }

          .bButton.inForm:hover {
            border: 0;
          }

          .bButton:hover {
            color: white;
            border-bottom: 0;
            background: ${colors.primary};
            box-shadow: 0 0 10px ${colors.primary}, 0 0 30px ${colors.primary},
              0 0 80px ${colors.primary};
            transition-delay: 0.5s;
          }

          .noHover {
            pointer-events: none;
          }

          .bButton span {
            position: absolute;
            display: block;
          }

          .bButton span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, ${colors.primary});
          }

          .bButton:hover span:nth-child(1) {
            left: 100%;
            transition: 1s;
          }

          .bButton span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, ${colors.primary});
          }

          .bButton:hover span:nth-child(3) {
            right: 100%;
            transition: 0.5s;
          }

          @media (max-width: ${breakpoints.mobile}),
            (max-width: ${breakpoints.ipad}) {
            .bButton {
              color: white;
              border-bottom: 0;
              background: ${colors.primary};
              box-shadow: 0 0 10px ${colors.primary};
            }
          }
        `}
      </style>
    </>
  );
}
