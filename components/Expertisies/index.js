import { breakpoints, colors, fontSizes } from "../../styles/theme";

export default function Expertisies() {
  return (
    <>
      <article className='d-flex flex-column py-3'>
        <section className='d-flex align-items-center justify-content-center mb-3'>
          <span className='main-title mt-5'>
            <span></span>
            <p>My Expertisie</p>
          </span>
        </section>
        <section className='expertise cards'>
          <div className='card csharp'>
            <h1 className='display-4'>C Sharp</h1>
            <p className='lead'>ASP .NET, .NET Core, Razor pages, WPF</p>
            <p className='lead'>MVC, MVVM, APIS and multiple libraries.</p>
          </div>
          <div className='card javascript'>
            <h1 className='title'>JavaScript</h1>
            <p>Javascript including ES2015.</p>
            <p>Javascript MV* frameworks.</p>
          </div>
          <div className='card html-css'>
            <h1 className='title'>HTML / CSS</h1>
            <p>HTML5 and related APIs</p>
            <p>CSS including CSS3 and SASS</p>
          </div>
          <div className='card react'>
            <h1 className='title'>React</h1>
            <p>React, Hooks, and multiple React libraries.</p>
            <p>Redux and multiple Redux libraries.</p>
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
            ${colors.backgroundPrimary} 50%,
            #111112 50%,
            #111112 100%
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

        .expertise.cards {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .card {
          background-color: #111112;
          border: 3px solid ${colors.primary};
          box-shadow: -15px 15px 0 -3px #111112, -15px 15px ${colors.primary},
            -20px 20px 0 3px #111112;
          cursor: pointer;
          display: block;
          margin: calc(50vh - 30px) auto 0 auto;
          min-height: 90px;
          padding: 15px;
          width: 300px;
        }

        .expertise.skills {
          display: flex;
          flex-direction: column;
          padding: 50px 500px;
          widht: 100%;
        }
        .skills.title {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_xl};
        }

        .skills.content p {
          margin-bottom: 20px;
          font-size: ${fontSizes.font_size_xs};
        }

        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          article {
            width: ${breakpoints.pc};
          }
          .expertise.skills {
            align-items: center;
            padding: 20px 50px;
          }
        }

        @media (max-width: ${breakpoints.mobile}) {
          article {
            width: ${breakpoints.mobile};
          }
          hr {
            width: 50%;
          }
          .expertise.cards {
            flex-direction: column;
            align-items: center;
          }
          .expertise.skills {
            align-items: center;
            padding: 20px 50px;
          }
        }
      `}</style>
    </>
  );
}
