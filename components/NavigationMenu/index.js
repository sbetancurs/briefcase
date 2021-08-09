import Link from "next/link";
import { useRouter } from "next/router";

import { breakpoints, colors } from "styles/theme";
import Logo from "../Icons/MainLogo";
import TopMenu from "components/TopMenu";
import { withTranslation } from "i18n.js";

const NavigationMenu = ({ t }) => {
  const router = useRouter();

  const checkActivePath = (path) => router.asPath.includes(path);
  return (
    <>
      <nav className='navbar navbar-expand-lg px-2 navbar-light position-fixed'>
        <div className='navbar-brand'>
          <Logo alt='logo' width='50' className='d-inline-block' />
          <Link href='/#start'>
            <a>{t("common:Portfolio")}</a>
          </Link>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse d-lg-flex justify-content-lg-between'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav'>
            <li className='py-2'>
              <Link href='/#start'>
                <a className={checkActivePath("start") ? " active" : " "}>
                  {t("common:Start")}
                </a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/#myKnowledges'>
                <a
                  className={checkActivePath("myKnowledges") ? " active" : " "}
                >
                  {t("common:MyKnowledges")}
                </a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/#publicProjects'>
                <a
                  className={
                    checkActivePath("publicProjects") ? " active" : " "
                  }
                >
                  {t("common:PublicProjects")}
                </a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/#Contactme'>
                <a className={checkActivePath("Contactme") ? " active" : " "}>
                  {t("common:Contactme")}
                </a>
              </Link>
            </li>
            <li className='py-2'>
              <Link href='/hv'>
                <a target='_blank'>HV</a>
              </Link>
            </li>
          </ul>
          <TopMenu />
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: rgba(7, 31, 71, 0.8);
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .navbar-toggler {
          background-color: ${colors.primary};
        }

        a {
          text-decoration: none;
          cursor: pointer;
          color: ${colors.white};
        }

        .navbar-brand > a {
          margin-left: 0.5rem;
        }

        ul > li {
          padding: 0 10px;
          font-weight: bold;
        }

        li > a:hover {
          text-decoration: underline;
        }

        button:hover {
          opacity: 0.7;
        }

        .active {
          text-decoration: underline;
          font-weight: bold;
        }
        .desactive {
          text-decoration: none;
          font-weight: normal;
          transform: scale(1);
        }

        @media (max-width: ${breakpoints.mobile}),
          (max-width: ${breakpoints.ipad}) {
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common"])(NavigationMenu);
