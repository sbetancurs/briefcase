import { breakpoints, colors, fontSizes } from "../../styles/theme";
import Button from "../Button";

export default function Biography() {
  return (
    <>
      <article>
        <section className='title'>
          <h2>
            My <br /> Biography
          </h2>
          <hr />
          <Button text='Contact me' />
        </section>
        <section className='biography'>
          <h3 className='bio-title'>
            Full stack software developer,
            <br />
            experience with microsoft technologies
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quo, laborum delectus similique eligendi consectetur ex laboriosam.
            Ipsum quos impedit minima at. Accusantium repudiandae impedit aut
            soluta inventore, in quis. Lorem ipsum dolor sit amet consectetur
          </p>
          <p>
            adipisicing elit. Consequatur quo, laborum delectus similique
            eligendi consectetur ex laboriosam. Ipsum quos impedit minima at.
            Accusantium repudiandae impedit aut soluta inventore, in quis.
            Loremquis.
          </p>
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
        .items:nth-child(1) {
          background: purple;
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
