import { useRouter } from "next/router";
import MainLogo from "../Icons/MainLogo";
import { breakpoints, colors, fontSizes } from "../../styles/theme";
import Particles from "react-particles-js";
import Button from "components/Button";
import { withTranslation } from "i18n.js";

function Introduction({ t }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/#Contactme");
  };

  const getYears = (date) => {
    let today = new Date();
    let beginDate = new Date(date);
    let experience = today.getFullYear() - beginDate.getFullYear();
    let diff = today.getMonth() - beginDate.getMonth();
    if (diff < 0 || (diff === 0 && today.getDate() < beginDate.getDate())) {
      experience--;
    }
    return experience;
  };

  return (
    <>
      <article className='container d-flex flex-column justify-content-center min-vh-100 pt-5'>
        <section className='d-flex justify-content-center'>
          <MainLogo width={200} height={200} />
        </section>
        <section className='introductionContent d-flex flex-column align-items-center justify-content-center'>
          <h1 className='backgroundSolid'>SEBASTIAN BETANCUR SALAZAR</h1>
          <p className='info backgroundSolid mb-5'>
            🇨🇴{" "}
            {t("introduction:Actually").replace(
              "{0}",
              getYears("2017/01/26 11:30:00")
            )}{" "}
            <br />
            <span className='d-block w-100 text-center'>
              👨‍💻{" "}
              {t("introduction:Im").replace(
                "{0}",
                getYears("1997/12/31 11:30:00")
              )}
            </span>
          </p>
          <div className='d-flex align-items-center justify-content-center'>
            <Button onClick={handleClick}>
              <p>{t("Contactme")}</p>
            </Button>
          </div>
        </section>
        <div className='particles'>
          <Particles
            params={{
              particles: {
                number: {
                  value: 250,
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                },
                modes: {
                  bubble: {
                    distance: 150,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                },
              },
            }}
          />
        </div>
      </article>
      <style jsx>{`
        article {
          background-color: ##111112;
          z-index: 100;
        }
        .backgroundSolid {
          background-color: ${colors.background_primary};
        }
        .info {
          color: ${colors.primary_highlight};
          font-size: ${fontSizes.font_size_xs};
        }
        .introductionContent {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_lg};
        }
        .particles {
          left: 0;
          top: 0;
          width: 100%;
          position: absolute;
          z-index: -100;
        }
        
          @media (max-width: ${breakpoints.mobile}), (max-width: ${breakpoints.ipad}) {
            h1 {
              font-size: ${fontSizes.font_size_sm};
            }
            .info {
              margin-top: 0.5rem;
            }

            .particles {
              display:none;
            }
          }
        }
      `}</style>
    </>
  );
}

export default withTranslation(["common", "introduction"])(Introduction);
