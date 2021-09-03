import { breakpoints, colors, fontSizes } from "../../styles/theme";
import { withTranslation } from "i18n.js";

import Card from "components/Card";
import Title from "components/Title";

const Expertisies = ({ t }) => {
  return (
    <>
      <article id='myKnowledges' className='d-flex flex-column py-1'>
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
      </article>
      <style jsx>{`
        article {
          color: ${colors.white};
        }

        #cards {
          margin: 0;
        }

        #myKnowledges {
          min-height: 90vh;
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common", "expertisie"])(Expertisies);
