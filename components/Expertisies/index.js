import { breakpoints, colors, fontSizes } from "../../styles/theme";

export default function Expertisies() {
  return (
    <>
      <article>
        <section className='title'>
          <h2>My Expertise</h2>
          <hr />
        </section>
        <section className='expertise'>
          <article className='items'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quo, laborum delectus similique eligendi consectetur ex laboriosam.
            Ipsum quos impedit minima at. Accusantium repudiandae impedit aut
            soluta inventore, in quis.
          </article>
          <article className='items'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quo, laborum delectus similique eligendi consectetur ex laboriosam.
            Ipsum quos impedit minima at. Accusantium repudiandae impedit aut
            soluta inventore, in quis.
          </article>
          <article className='items'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quo, laborum delectus similique eligendi consectetur ex laboriosam.
            Ipsum quos impedit minima at. Accusantium repudiandae impedit aut
            soluta inventore, in quis.
          </article>
        </section>
      </article>
      <style jsx>{`
        article {
          background-color: ${colors.secondary};
          color: ${colors.white};
          display: flex;
          flex-direction: column;
          height: 900px;
          padding: 50px 0;
        }
        h2 {
          margin-bottom: 0;
        }
        hr {
          width: 20%;
          margin: 20px 0;
        }
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: ${fontSizes.font_size_md};
        }
        .expertise {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 100px;
        }
        .items {
          border-radius: 20px;
          padding: 10px;
          border: 1px solid ${colors.white};
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 30%;
          min-height: 500px;
          height: 100%;
        }
        .items:nth-child(1) {
          background: purple;
        }
        @media (max-width: ${breakpoints.mobile}) {
          article {
            width: ${breakpoints.mobile};
          }
        }
      `}</style>
    </>
  );
}
