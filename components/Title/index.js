import { breakpoints, colors, fontSizes } from "styles/theme";

export default function Title({ text, classNames }) {
  return (
    <>
      <span className={"main-title mt-5 " + classNames}>
        <span></span>
        <p>{text}</p>
      </span>
      <style jsx>{`
        .main-title {
          display: block;
          font-size: ${fontSizes.font_size_lg};
          letter-spacing: 4px;
          overflow: hidden;
          padding: 15px 25px;
          position: relative;
          transition: 0, 2s;
        }
        .main-title span {
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-name: slidein;
          display: block;
          position: absolute;
        }
        .main-title span:nth-child(1) {
          background: linear-gradient(90deg, transparent, ${colors.white});
          bottom: 0;
          height: 2px;
          left: -100%;
          width: 100%;
        }
        .main-title:hover span:nth-child(1) {
          left: 100%;
          transition: 0.5s;
        }
        @keyframes slidein {
          from {
            left: -100%;
          }

          to {
            left: 100%;
          }
        }
        @media (max-width: ${breakpoints.mobile}) {
          .main-title {
            letter-spacing: 0;
          }
        }
      `}</style>
    </>
  );
}
