import { breakpoints, colors, fontSizes } from "../../styles/theme";
import { withTranslation } from "i18n.js";

import Card from "components/Card";
import Title from "components/Title";

const Expertisies = ({ t }) => {
  const getFormatText = (text) => {
    let textArray = text.split("\\");
    textArray.map();
  };
  return (
    <>
      <article className='d-flex flex-column py-5 min-vh-100'>
        <section className='d-flex align-items-center justify-content-center mb-3'>
          <Title text={t("expertisie:MyExpertisie")} />
        </section>
        <section id='cards' className='row justify-content-center'>
          <Card
            srcIcon='/icons/csharp.svg'
            title='C Sharp'
            description={t("expertisie:CSharp")}
          />

          <Card
            srcIcon='/icons/html-css-javascript.svg'
            title='HTML-CSS-JS'
            description={t("expertisie:HTML-CSS-JS")}
          />

          <Card
            srcIcon='/icons/DATABASE.svg'
            title={t("expertisie:DatabaseTitle")}
            description={t("expertisie:Database")}
          />

          <Card
            srcIcon='/icons/react.svg'
            title='React'
            description={t("expertisie:React")}
          />
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
            ${colors.background_primary} 0%,
            rgba(0, 0, 34, 1) 65%,
            ${colors.background_secondary} 100%
          );
          color: ${colors.white};
        }

        #cards {
          margin-right: 0;
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common", "expertisie"])(Expertisies);
