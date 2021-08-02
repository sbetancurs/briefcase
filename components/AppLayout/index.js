import Head from "next/head";
import styles, { globalStyles } from "./styles";
import { withTranslation } from "i18n.js";
import ScrollToTop from "components/ScrollToTop";

const AppLayout = ({ children, t }) => {
  return (
    <>
      <Head>
        <title>{t("portfolio")}</title>
        <link rel='icon' href='/sebas.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Martel:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <main>
          {children}
          <ScrollToTop />
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default withTranslation(["common"])(AppLayout);
