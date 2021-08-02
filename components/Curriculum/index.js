import Link from "next/link";
import { breakpoints, colors, fontSizes } from "styles/theme";

const Curriculum = () => {
  const info = {
    cel: "3118828394",
    email: "sebasbetancur97@gmail.com",
    github: "sbetancurs",
    domain: "www.sbetancurs.co",
    name: "Sebastian Betancur Salazar",
  };

  return (
    <>
      <section className='container-fluid min-vh-100'>
        <div className='row content'>
          <div className='left-section col-lg-2 d-flex flex-column align-items-center py-3'>
            <img
              src='/images/me.jpg'
              alt='Curriculum'
              className='photo rounded-circle w-100'
            />
            <div className='w-100 mt-3 px-2'>
              <h2 className='mb-2 text-center'>Contact</h2>
              <ul>
                <li>
                  <img src='/icons/mail.svg' alt='mail' />
                  <span className='mx-2'>{info.email}</span>
                </li>
                <li>
                  <img src='/icons/phone.svg' alt='phone' />
                  <span className='mx-2'>{info.cel}</span>
                </li>
                <li>
                  <img src='/icons/github.svg' alt='github' />
                  <span className='mx-2'>
                    <a href='https://github.com/sbetancurs'>{info.github}</a>
                  </span>
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
              <h2 className='mb-2  text-center'>Education</h2>
              <ul>
                <li>
                  <img src='/icons/award.svg' alt='award' />
                  <span className='mx-2'>
                    Software Engineer, Tecnológico de Antioquia, awarded March
                    2021.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='right-section col-lg-10 pt-2 pt-lg-0'>
            <div
              id='contact-info'
              className='d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start'
            >
              <h1>{info.name}</h1>
              <div>
                <a
                  id='email'
                  href='mailto:c2ViYXNiZXRhbmN1cjk3QGdtYWlsLmNvbQ=='
                >
                  {info.email}
                </a>
                <br />
                <a
                  href='https://portfolio-mu-livid.vercel.app/'
                  target='_blank'
                >
                  {info.domain}
                </a>
                <br />
                Medellín, Colombia
              </div>
            </div>
            <div className='hv-section'>
              <h2>Summary of Qualifications</h2>
            </div>
            <div className='hv-content'>
              <ul>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>Programming Languages:</b> C#, Blazor, .Net Core,
                  JavaScript, NodeJS, TypeScript.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>Web Frameworks:</b> NextJS, Angular.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>Libraries:</b> React.
                </li>
                <li>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <b>Respositories:</b> Git, Github, GitLab, Azure
                </li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>Work Experience</h2>
            </div>
            <div className='hv-content'>
              <p className='date'>April 2019 &rArr; Present</p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>Sourcecol S.A.S</h3>
              </div>
              <address>Mid Software Engineer - Medellín, Colombia.</address>
              <ul>
                <li>
                  Working as backend and frontend developer for develop web form
                  where users can do procurements, generate orders, track
                  contracts.
                </li>
                <li>
                  Manage roles and permissions to enable some functions to users
                  and restrict others.
                </li>
                <li>Desing main web for be more friendly with the users.</li>
              </ul>
              <a name='suitable'></a>
              <p className='date'>March 2018 &rArr; April 2019</p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>E-city Software</h3>
              </div>
              <address>Software developer - Medellín, Colombia</address>
              <ul>
                <li>
                  Worked as backend and frontend developer, developing API's,
                  design forms, developing workflows, etc.
                </li>
                <li>
                  Worked programming physical devices that companies put in its
                  branch offices where users can pay taxes, search for
                  informations and all these with cash.
                </li>
                <li>
                  Worked programming physical devices that cinemas put in its
                  branch offices where users can pay tickets, search for
                  functions, select position room, search for tickets bought and
                  all these with cash.
                </li>
                <li>
                  Integrated physical devices that manage cash like wallet, coin
                  purse, finger scanner, etc. Used in software for get money,
                  return money, enable authentication.
                </li>
                <li>
                  Implemented and managed the translation infrastructure on our
                  frontend and backend applications
                </li>
              </ul>
              <a name='google'></a>
              <p className='date'>January 2017 &rArr; March 2018</p>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>1Cero1 Software</h3>
              </div>
              <address>Junior Software developer - Medellín, Colombia</address>
              <ul>
                <li>
                  Developing web form for a town hall's portal, where users can
                  pay taxes and make some procedure for get licenses or send
                  documents.
                </li>
                <li>
                  Designed and implemented automatizations for create the web
                  forms faster.
                </li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>Entrepreneurship</h2>
            </div>
            <div className='hv-content mb-3'>
              <div className='d-flex subtitle'>
                <img src='/icons/arrow-right-short.svg' alt='mail' />
                <h3>Oxigiovanny App</h3>
              </div>
              <ul>
                <li>
                  Used Javascript,NodeJS, NextJS to create a Web app that helps
                  one health company to manage the data generated inside
                  company's process, also generate reports and export these in
                  excel files.
                </li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>Open Source</h2>
            </div>
            <div className='hv-content mb-3'>
              <h3>
                <div className='d-flex subtitle'>
                  <img src='/icons/arrow-right-short.svg' alt='mail' />
                  <Link href='/'>
                    <a target='_blank'>Portfolio</a>
                  </Link>
                </div>
              </h3>
              <ul>
                <li>
                  Implemented my own portfolio based in my professional
                  experience and info about me, the portfolio was created in
                  NextJS, HTML5 and CSS3.
                </li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>Education</h2>
            </div>
            <div className='hv-content'>
              <ul>
                <li>
                  Software Engineer, Tecnológico de Antioquia, awarded March
                  2021.
                </li>
                <li>Platzi certifications, Platzi, awarded since 2019.</li>
              </ul>
            </div>

            <div className='hv-section'>
              <h2>Activities and Interests</h2>
            </div>
            <div className='hv-content'>
              <ul>
                <li>Sports, chess, reading, keep learning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        div.scroll-to-top {
          visibility: hidden !important;
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
          border-bottom: 1px solid ${colors.white};
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

        @media (max-width: ${breakpoints.ipad}) {
          span {
            font-size: ${fontSizes.font_size_sm};
          }

          .photo {
            width: 50% !important;
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

          .left-section {
            display: none !important;
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

export default Curriculum;
