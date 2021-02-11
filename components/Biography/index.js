import { breakpoints, colors, fontSizes } from "../../styles/theme";
import { withTranslation } from "i18n.js";

function Biography({ t }) {

  const getDate = () =>{
      let today = new Date();
      let bornDate = new Date("1997/12/31 11:30:00");
      let age = today.getFullYear() - bornDate.getFullYear();
      let monthsDif = today.getMonth() - bornDate.getMonth();
      if (
        monthsDif < 0 ||
        (monthsDif === 0 && today.getDate() < bornDate.getDate())
      ) {
        age--;
      }
      
      return age;
  }

  return (
    <>
      <article>
        <section className='title'>
          <h2>
            {t("My")} <br /> {t("biography:Biography")}
          </h2>
          <hr />
        </section>
        <section className='biography'>
          <h3 className='bio-title'>{t("biography:BioTitle")}</h3>
          <p>{t("biography:BioContent1").replace("<age>", getDate())}</p>
          <p>{t("biography:BioContent2")}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          background-image: radial-gradient(${colors.black} 1px, ${colors.third} 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
          border-top: 10px solid ${colors.primary_shine};
          color: ${colors.white};
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content:center
          height: 900px;
          padding: 50px 0;
        }
        h2 {
          margin-bottom: 0;
        }
        hr {
          margin: 20px 0;
        }
        p{
          margin-bottom:20px;
          font-size: ${fontSizes.font_size_xs};
        }
        .title {
          font-size: ${fontSizes.font_size_lg};
          background: ${colors.third};
          align-self:center;
        }
        .bio-title {
          font-size: ${fontSizes.font_size_sm};
          background: ${colors.third};
          text-align:left;
          margin-bottom:20px;
        }
        .biography {
          padding: 0 50px;
          width:700px;
          background: ${colors.third};
        }
        @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
          article {
            width: ${breakpoints.pc};
            padding: 100px 50px;
          }
          .biography {
            padding: 0;
            background: ${colors.third};
          }
          .title {
            margin-right:30px; 
          }
        }
        @media (max-width: ${breakpoints.mobile}) {
          article {
            width: ${breakpoints.mobile};
            flex-direction: column;
          }
          .biography {
          padding: 20px 50px;
          width:100%
          }
        }
      `}</style>
    </>
  );
}

export default withTranslation(["common", "biography"])(Biography);