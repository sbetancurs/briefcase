import { breakpoints, colors, fontSizes } from "../../styles/theme";

export default function Expertisies() {
  return (
    <>
      <article>
        <section className='main-title'>
          <h2>My Expertise</h2>
          <hr />
        </section>
        <section className='expertise cards'>
          <div className='card csharp'>
            <h1 className='title'>C Sharp</h1>
            <h2 className='subtitle'>4 years experience</h2>
            <p>ASP .NET, .NET Core, Razor pages, WPF</p>
            <p>MVC, MVVM, APIS and multiple libraries.</p>
          </div>
          <div className='card javascript'>
            <h1 className='title'>JavaScript</h1>
            <h2 className='subtitle'>4 years experience</h2>
            <p>Javascript including ES2015.</p>
            <p>Javascript MV* frameworks.</p>
          </div>
        </section>
        <section className='expertise cards'>
          <div className='card html-css'>
            <h1 className='title'>HTML / CSS</h1>
            <h2 className='subtitle'>4 years experience</h2>
            <p>HTML5 and related APIs</p>
            <p>CSS including CSS3 and SASS</p>
          </div>
          <div className='card react'>
            <h1 className='title'>React</h1>
            <h2 className='subtitle'>1 years experience</h2>
            <p>React, Hooks, and multiple React libraries.</p>
            <p>Redux and multiple Redux libraries.</p>
          </div>
        </section>
        <section className='expertise skills'>
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
          background-color: ${colors.backgroundSecondary};
          color: ${colors.white};
          display: flex;
          flex-direction: column;
          padding: 50px 0;
        }
        h2 {
          margin-bottom: 0;
        }
        hr {
          width: 16%;
          margin: 20px 0;
        }
        .main-title {
          align-items: center;
          display: flex;
          flex-direction: column;
          font-size: ${fontSizes.font_size_lg};
          width: 100%;
        }
        .title {
          font-size: ${fontSizes.font_size_md};
          margin-bottom: 20px;
          text-align: left;
          white-space: nowrap;
          color: ${colors.secondary};
        }
        .subtitle {
          font-size: ${fontSizes.font_size_sm};
          margin-bottom: 20px;
          color: ${colors.secondary};
        }
        .expertise.cards {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .card {
          max-width: 400px;
          position: relative;
          padding: 20px;
          margin: 20px;
          border-radius: 12px;
          box-shadow: 2px 8px 15px 10px rgba(0, 0, 0, 0.05),
            4px 5px 10px 0 rgba(0, 0, 0, 0.1),
            2px 2px 5px 2px rgba(0, 0, 0, 0.25);
        }
        .card::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 12px;
          opacity: 0.2;
        }
        .card h1,
        .card h2,
        .card p {
          position: relative;
        }

        .card p {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_sm};
          text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
          margin-bottom: 20px;
        }

        .card .title {
          text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.2);
          white-space: nowrap;
          font-weight: 900;
        }
        .card.javascript {
          background: linear-gradient(-45deg, #b7791f 0%, #ecc94b 100%);
        }

        .card.javascript::before {
          background: url("/icons/javascript.svg") no-repeat;
          background-size: 100%;
          background-position: calc(100% + 50px) calc(100% + 50px);
        }

        .card.html-css {
          background: linear-gradient(-45deg, #dd6b20 0%, #f6ad55 100%);
        }

        .card.html-css::before {
          background: url("/icons/html.svg") no-repeat;
          background-size: 100%;
          background-position: calc(100% + 50px) calc(100% + 50px);
        }

        .card.react {
          background: linear-gradient(-45deg, #3182ce 0%, #63b3ed 100%);
        }

        .card.react::before {
          background: url("/icons/react.svg") no-repeat;
          background-size: 100%;
          background-position: calc(100% + 50px) calc(100% + 50px);
        }

        .card.csharp {
          background: linear-gradient(-45deg, #300083 0%, #9d6dd7 100%);
        }

        .card.csharp::before {
          background: url("/icons/csharp.svg") no-repeat;
          background-size: 100%;
          background-position: calc(100% + 50px) calc(100% + 50px);
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
