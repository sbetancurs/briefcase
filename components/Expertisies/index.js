import { breakpoints, colors, fontSizes } from "../../styles/theme";
import { withTranslation } from "i18n.js";

const Expertisies = ({ t }) => {
  const getFormatText = (text) => {
    let textArray = text.split("\\");
    textArray.map();
  };
  return (
    <>
      <article className='d-flex flex-column py-5 min-vh-100'>
        <section className='d-flex align-items-center justify-content-center mb-3'>
          <span className='main-title mt-5'>
            <span></span>
            <p>{t("expertisie:MyExpertisie")}</p>
          </span>
        </section>
        <section id='cards' className='row justify-content-center'>
          <div className='box'>
            <span></span>
            <span></span>
            <div className='content d-flex flex-column  align-items-center justify-content-center'>
              <div className='iconContainer'>
                <img className='icon' src='/icons/csharp.svg' />
              </div>
              <label>C Sharp</label>
              <p>{t("expertisie:CSharp")}</p>
            </div>
          </div>

          <div className='box'>
            <span></span>
            <span></span>
            <div className='content d-flex flex-column  align-items-center justify-content-center'>
              <div className='iconContainer'>
                <img className='icon' src='/icons/html-css-javascript.svg' />
              </div>
              <label>HTML-CSS-JS</label>
              <p>{t("expertisie:HTML-CSS-JS")}</p>
            </div>
          </div>

          <div className='box'>
            <span></span>
            <span></span>
            <div className='content d-flex flex-column  align-items-center justify-content-center'>
              <div className='iconContainer'>
                <img className='icon' src='/icons/database.svg' />
              </div>
              <label>{t("expertisie:DatabaseTitle")}</label>
              <p>{t("expertisie:Database")}</p>
            </div>
          </div>

          <div className='box'>
            <span></span>
            <span></span>
            <div className='content d-flex flex-column  align-items-center justify-content-center'>
              <div className='iconContainer'>
                <img className='icon' src='/icons/react.svg' />
              </div>
              <label>React</label>
              <p>{t("expertisie:React")}</p>
            </div>
          </div>
        </section>
        <section className='d-none expertise skills'>
          <h3 className='skills title'>Skills</h3>
          <div className='skills content'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quodoloribus eligendi, esse possimus perferendis beatae neque
              dicta voluptates consectetur. Harum molestiae suscipit sapiente
              nobis aut ratione. At impedit libero nesciunt!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quodoloribus eligendi, esse possimus perferendis beatae neque
              dicta voluptates consectetur. Harum molestiae suscipit sapiente
              nobis aut ratione. At impedit libero nesciunt!
            </p>
          </div>
        </section>
      </article>
      <style jsx>{`
        article {
          background: linear-gradient(
            to bottom,
            ${colors.backgroundPrimary} 0%,
            rgba(0, 0, 34, 1) 65%,
            ${colors.backgroundSecondary} 100%
          );
          color: ${colors.white};
        }
        .main-title {
          display: block;
          font-size: ${fontSizes.font_size_lg};
          letter-spacing: 4px;
          overflow: hidden;
          padding: 15px 25px;
          position: relative;
          transition: 0, 2s;
        }
        @keyframes slidein {
          from {
            left: -100%;
          }

          to {
            left: 100%;
          }
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

        #cards {
          margin-right: 0;
        }
        .box {
          align-items: center;
          background-color: #191c1f;
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

          .main-title {
            letter-spacing: 0;
          }
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common", "expertisie"])(Expertisies);
