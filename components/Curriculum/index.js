import { useRef } from "react";
import Link from "next/link";
import { withTranslation } from "i18n.js";
import { breakpoints, colors, fontSizes } from "styles/theme";
import TopMenu from "components/TopMenu";

const Curriculum = ({ t }) => {
  const info = {
    cel: "3118828394",
    email: "sebasbetancur97@gmail.com",
    github: "sbetancurs",
    domain: "https://portfolio-sbetancurs.vercel.app",
    name: "Sebastian Betancur Salazar",
  };

  const docRef = useRef();

  const print = () => {
    if (window) {
      window.print();
    }
  };

  return (
    <>
      <section ref={docRef} id='hv' className='container-fluid min-vh-100'>
        <div className='row content'>
          <div className='left-section col-lg-2 d-flex flex-column align-items-center py-3'>
            <img
              src='/images/me.jpg'
              alt='Curriculum'
              className='photo rounded-circle w-100'
            />
            <div className='text-center my-3 d-block d-lg-none'>
              <h2>{info.name}</h2>
              <h3>{t("hv:softwaredev")}</h3>
            </div>
            <div className='w-100 mt-3 px-2'>
              <h2 className='mb-2 text-center'>{t("hv:contact")}</h2>
              <ul>
                <li>
                  <img src='/icons/github.svg' alt='github' />
                  <span className=''>
                    <a href='https://github.com/sbetancurs'>{info.github}</a>
                  </span>
                </li>
                <li>
                  <img src='/icons/mail.svg' alt='mail' />
                  <span className='mx-2'>{info.email}</span>
                </li>
                <li>
                  <img src='/icons/phone.svg' alt='phone' />
                  <span className='mx-2'>{info.cel}</span>
                </li>
                <li>
                  <img src='/icons/geo.svg' alt='localization' />
                  <span className='mx-2'>Medellín, Colombia.</span>
                </li>
              </ul>
            </div>
            <div className='line w-100 '>
              <div className='arrow'>
                <div className='pin'></div>
                <div className='pin'></div>
              </div>
            </div>
            <div className='w-100 mt-5 px-2'>
              <h2 className='mb-2  text-center'>{t("hv:education")}</h2>
              <ul>
                <li>
                  <img src='/icons/award.svg' alt='award' />
                  <span className='mx-2'>
                    {t("hv:engineer")}, Tecnológico de Antioquia,
                    {t("hv:awarded")} March 2021.
                  </span>
                </li>

                <li>
                  <img src='/icons/check.svg' alt='check' />
                  <span className='mx-2'>{t("hv:english")} B2.</span>
                </li>
              </ul>
            </div>
            <div id='language' className='line w-100 '>
              <div className='arrow'>
                <div className='pin'></div>
                <div className='pin'></div>
              </div>
            </div>
            <div id='languageMenu' className='w-100 mt-5 px-2'>
              <div className='printFeature d-flex justify-content-center mb-3'>
                <img src='/icons/printer.svg' alt='print' />
                <a className='mx-2 print' onClick={print}>
                  {t("hv:print")}
                </a>
              </div>
              <ul>
                <li className='d-flex justify-content-center'>
                  <TopMenu hv={true} />
                </li>
              </ul>
            </div>
          </div>
          <div className='right-section col-lg-10 pt-2 pt-lg-0'>
            <img
              src='/images/me.jpg'
              alt='Curriculum'
              className='photo rounded-circle w-100 d-none d-print-inline-block'
            />
            <div
              id='contact-info'
              className='d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start'
            >
              <h1 id='mainName' className='d-none d-lg-inline-block'>
                {info.name}
              </h1>
              <div>
                <a id='email' href={`mailto:${info.email}`}>
                  {info.email}
                </a>
                <br />
                <a href={info.domain} target='_blank'>
                  {t("hv:portfolio")}
                </a>
                <br />
                <a>{info.cel}</a>
                <br />
                Medellín, Colombia
              </div>
            </div>
            <div className='hv-section'>
              <h2>{t("hv:qualifications")}</h2>
            </div>
            <div className='hv-content'>
              <ul>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>{t("hv:languages")}:</b> C#, JavaScript, PHP.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>{t("hv:frameworks")}:</b> Blazor,.Net Core,NextJS,
                  Angular,TypeScript, NodeJS, Xamarin, WPF, ExpressJS, ASP.NET,
                  ASP.NET MVC, React Native.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>{t("hv:libraries")}:</b> React, Redux, JQuery.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>{t("hv:databases")}:</b> SQL Server, MySQl, MongoDB,
                  Firebase.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>{t("hv:respositories")}:</b> Git, Github, GitLab, Azure
                </li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>{t("hv:workExperience")}</h2>
            </div>
            <div className='hv-content'>
              <p className='date'>
                {t("hv:april")} 2019 &rArr; {t("hv:present")}
              </p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>Sourcecol S.A.S</h3>
              </div>
              <address>Mid {t("hv:engineer")} - Medellín, Colombia.</address>
              <p>{t("hv:sourcecolExp")}</p>

              <p className='date'>
                {t("hv:march")} 2018 &rArr; {t("hv:april")} 2019
              </p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>E-city Software</h3>
              </div>
              <address>
                Junior {t("hv:developer")} - Medellín, Colombia.
              </address>
              <p>{t("hv:ecityExp")}</p>

              <p className='date'>
                {t("hv:january")} 2017 &rArr; {t("hv:march")} 2018
              </p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>1Cero1 Software</h3>
              </div>
              <address>
                Junior {t("hv:developer")} - Medellín, Colombia.
              </address>
              <p>{t("hv:1cero1Exp")}</p>
            </div>

            <div className='hv-section'>
              <h2>{t("hv:entrepreneurship")}</h2>
            </div>
            <div className='hv-content mb-3'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <Link href='https://oxigiovanny.vercel.app'>
                    <a target='_blank'>Oxigiovanny App</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:oxigiovannyExp")}</p>
            </div>

            <div className='hv-section'>
              <h2>{t("hv:openSource")}</h2>
            </div>
            <div className='hv-content pb-0'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='/'>
                    <a target='_blank'>{t("hv:portfolio")}</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:portfolioExp")}</p>
            </div>

            <div className='hv-content pb-0'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://task-app-psi.vercel.app'>
                    <a target='_blank'>Task App</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:taskAppDescription")}</p>
            </div>

            <div className='hv-content pb-0'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://team-management-five.vercel.app'>
                    <a target='_blank'>Team management</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:teamManagerAppDescription")}</p>
            </div>

            <div className='hv-content pb-0'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://rick-and-morty-app-liart.vercel.app'>
                    <a target='_blank'>Rick & Morty App</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:RickAndMortyAppDescription")}</p>
            </div>

            <div className='hv-content'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://movies-api-swart.vercel.app'>
                    <a target='_blank'>Movies API</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:moviesApiDescription")}</p>
            </div>

            <div className='hv-content'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://marvel-react-app.vercel.app'>
                    <a target='_blank'>React Marvel App</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:marvelReactExp")}</p>
            </div>

            <div className='hv-content mb-3'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' />
                  <Link href='https://marvel-app-sbetancurs.vercel.app'>
                    <a target='_blank'>Marvel App</a>
                  </Link>
                </div>
              </h3>
              <p>{t("hv:marvelExp")}</p>
            </div>

            <div className='hv-section'>
              <h2>{t("hv:education")}</h2>
            </div>
            <div className='hv-content'>
              <p>{t("hv:educationExp")}</p>
            </div>

            <div className='hv-section'>
              <h2>{t("hv:activitiesInterests")}</h2>
            </div>
            <div className='hv-content'>
              <p>{t("hv:activities")}</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        div.scroll-to-top {
          visibility: hidden !important;
        }
        @media (max-width: ${breakpoints.mobile}),
          (max-width: ${breakpoints.ipad}) {
          nav {
            width: 20%!important;
        }
      `}</style>
      <style jsx>{`
        section {
          background: ${colors.white};
        }

        .content {
          min-height: 100vh;
        }

        .left-section {
          background: ${colors.secondary};
          color: ${colors.white};
          white-space: pre-line;
        }

        .right-section {
          background: ${colors.white};
          color: ${colors.black};
          white-space: pre-line;
        }

        h1 {
          font-size: ${fontSizes.font_size_md};
        }

        h2 {
          font-size: ${fontSizes.font_size_md};
        }

        span {
        }

        h3 {
          font-size: ${fontSizes.font_size_sm};
        }

        a {
          text-decoration: none;
        }

        .left-section a {
          color: ${colors.white};
        }

        .right-section a {
          color: ${colors.black};
        }

        .photo {
          border: 1px solid ${colors.white};
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        }

        .hv-section {
          background-color: ${colors.secondary};
          color: ${colors.white};
          text-align: left !important;
          padding: 10px;
          border-radius: 5px;
        }

        .hv-content {
          padding: 10px;
        }

        .line {
          border-bottom: solid 2px #fff;
          height: 40px;
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .arrow {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          height: 20px;
          width: 80px;
          z-index: 2;
          background-color: ${colors.secondary};
        }
        .arrow .pin {
          width: calc(50% + 5px);
          height: 2px;
          background: #fff;
          display: inline-block;
          float: left;
          transform: rotate(25deg);
          transform-origin: 0 0;
        }
        .arrow .pin:last-child {
          transform: rotate(-25deg);
          transform-origin: 100% 0;
          float: right;
          margin-top: -2px;
        }

        #address h3 {
          border-bottom: none;
          margin-top: 0;
        }
        p.date {
          font-size: 0.8em;
          margin-top: 0.4em;
          float: right;
        }
        address {
          font-style: italic;
          color: #333;
          font-size: 0.9em;
        }

        .subtitle {
          margin: 1em 0 0 0;
        }
        li {
          font-size: 0.9em;
        }

        .print {
          cursor: pointer;
        }
        .print:hover {
          text-decoration: underline;
        }

        @media (max-width: ${breakpoints.ipad}) {
          span {
            font-size: ${fontSizes.font_size_sm};
          }

          .photo {
            width: 50% !important;
          }

          .printFeature {
            display: none !important;
          }
        }

        @media print {
          html {
            background-color: #eee;
          }
          body {
            background-color: #fff;
            font-family: Helvetica, Arial, sans-serif;
            padding: 1em;
            border: solid #aaa;
            border-width: 1px 3px 3px 1px;
            margin: 1em auto;
            max-width: 50em;
          }

          .left-section,
          #language,
          #languageMenu {
            display: none !important;
          }

          #mainName {
            display: block !important;
          }
          #address h3 {
            border-bottom: none;
            margin-top: 0;
            margin-bottom: 0;
          }

          h2 {
            margin-top: 0;
            margin-bottom: 0;
          }

          hv-section,
          hv-content {
            margin-bottom: 0;
            padding: 0;
          }

          div#contact-info {
            float: right;
            margin-bottom: 12px;
            text-align: right;
          }
          p.date {
            float: right;
            font-size: 0.8em;
            margin-top: 0.4em;
          }
          address {
            font-style: italic;
            color: #333;
            font-size: 0.9em;
          }
          h1 {
            font-size: 1.3em;
            font-family: Helvetica, Arial, sans-serif;
          }
          h2 {
            clear: both;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 1.3em;
            font-variant: small-caps;
            padding-left: 0.25em;
            background-color: #eee;
            border-bottom: 1px solid #999;
            letter-spacing: 0.06em;
          }
          h3 {
            margin: 1em 0 0 0;
          }
          li {
            font-size: 0.9em;
          }
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common", "hv"])(Curriculum);
