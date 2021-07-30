import { breakpoints, colors, fontSizes } from "styles/theme";

export default function Input({ srcIcon, title, description }) {
  return (
    <>
      <div className='box'>
        <span></span>
        <span></span>
        <div className='content d-flex flex-column  align-items-center justify-content-center'>
          <div className='iconContainer'>
            <img className='icon' src={srcIcon} />
          </div>
          <label>{title}</label>
          <p>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .box {
          align-items: center;
          background-color: ${colors.background_third};
          color: white;
          display: flex;
          flex-wrap: wrap;
          height: 450px;
          justify-content: center;
          margin: 40px;
          padding: 20px;
          position: relative;
          width: 350px;

          -webkit-transition: 0.5s;
        }
        .box:hover {
          box-shadow: 0 0px 20px ${colors.primary};
          transform: scale(1.15);
          -webkit-transition: 1s;
        }
        .content:hover {
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          padding: 40px !important;
          padding-top: 0 !important;
          -webkit-transition: 1s;
        }
        .box .content {
          border: 1px solid slategrey;
          bottom: 15px;
          box-shadow: 0 5px 10px rgba(9, 0, 0, 0.1);
          left: 15px;
          padding: 20px;
          padding-top: 0;
          position: absolute;
          right: 15px;
          top: 15px;
          -webkit-transition: 1s;
        }
        .content label {
          font-weight: bold;
          font-size: ${fontSizes.font_size_md};
        }
        .content p {
          white-space: pre-line;
          min-width: 100%;
          width: 100%;
          max-width: 100%;
        }
        .box span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          box-sizing: border-box;
        }
        .box span:nth-child(1) {
          transform: rotate(0deg);
        }

        .box span:nth-child(2) {
          transform: rotate(180deg);
        }

        .box span:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: ${colors.primary};
          animation: animate 4s linear infinite;
        }

        @keyframes animate {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }

          50% {
            transform: scaleX(1);
            transform-origin: left;
          }

          50.1% {
            transform: scaleX(1);
            transform-origin: right;
          }

          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }

        .iconContainer {
          width: 100%;
          height: 200px;
          display: grid;
          place-items: center;
        }
        .icon {
          width: 200px;
          height: 200px;
        }
        @media (max-width: ${breakpoints.mobile}) {
          .box.content {
            bottom: 15px;
            left: 15px;
            right: 15px;
            top: 15px;
          }

          .box {
            width: 450px;
            height: 510px;
          }
        }
      `}</style>
    </>
  );
}
