import { useRouter } from "next/router";
import MainLogo from "../Icons/MainLogo";
import { breakpoints, colors, fontSizes } from "../../styles/theme";
import Button from "../Button";
import Particles from "react-particles-js";

export default function Introduction() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/#Contactme");
  };

  return (
    <>
      <article>
        <section className='introductionContent'>
          <h1>
            <span style={{ color: `${colors.primary}` }}>Hello,</span> <br />{" "}
            I'm Sebastian, <br />
            web developer. <br />
          </h1>
          <p className='info'>Actually fullstack developer in Sourcecol SAS.</p>
          <hr />
          <Button text='Contact me' onClick={handleClick} />
        </section>
        <section className='introductionLogo'>
          <MainLogo width={500} height={500} />
        </section>
        <div className='particles'>
          <Particles
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  resize: true,
                },
              },
            }}
          />
        </div>
      </article>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 40px 60px;
          z-index: 100;
        }
        hr {
          margin: 20px 0;
        }
        .info {
          color: ${colors.primary_highlight};
          font-size: ${fontSizes.font_size_sm};
        }
        .introductionContent {
          align-self: center;
          color: ${colors.white};
          font-size: ${fontSizes.font_size_lg};
          width: 100%;
        }
        .particles {
          left: 0;
          top: 0;
          width: 100%;
          position: absolute;
          z-index: -100;
        }
        .introductionLogo {
          color: ${colors.white};
          display: grid;
          font-size: ${fontSizes.font_size_lg};
          text-align: center;
          width: 100%;
          place-items: center;
        }

        @media (min-width: ${breakpoints.mobile}) {
          article {
            height: 90vh;
          }
        }

        @media (max-width: ${breakpoints.mobile}) {
          article {
            flex-direction: column;
            width: ${breakpoints.mobile};
          }
          .particles {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
