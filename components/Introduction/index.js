import Developer from "../Icons/Developer";
import { breakpoints, colors, fontSizes } from "../../styles/theme";
import Button from "../Button";

export default function Introduction() {
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
          <Button text='Contact me' />
        </section>
        <section className='introductionLogo'>
          <Developer width={500} height={500} />
        </section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: row;
          justify-content:space-between;
          padding:40px 60px
        }
        hr {
          margin:20px 0;
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
        .introductionLogo {
          color: ${colors.white};
          display: grid;
          font-size: ${fontSizes.font_size_lg};
          text-align:center;
          width: 100%;
          place-items: center;
        }

        @media (min-width: ${breakpoints.mobile}) {
          article {
            height:90vh;
          }
        } 

         @media (max-width: ${breakpoints.mobile}) {
          article {
            flex-direction: column;
            width: ${breakpoints.mobile};
          }
          .introductionContent {
            width: ${breakpoints.mobile}
            font-size: ${fontSizes.font_size_md};
          }
          .introductionLogo {
            padding-top: 30px;
            width: ${breakpoints.mobile}
            font-size: ${fontSizes.font_size_sm};
          }
        } 
      `}</style>
    </>
  );
}
