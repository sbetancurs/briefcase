import { colors, fontSizes } from "styles/theme";

const Curriculum = () => {
  return (
    <>
      <section className='container-fluid min-vh-100'>
        <div className='row content'>
          <div className='left-section col-2 d-flex flex-column align-items-center'>
            <img src='/icons/cv.svg' alt='Curriculum' />
            <div>
              <h2>Contact me</h2>
              <ul>
                <li>address</li>
                <li>celphone</li>
                <li>github</li>
              </ul>
            </div>
          </div>
          <div className='right-section col-10'></div>
        </div>
      </section>
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
        }

        .right-section {
          background: ${colors.primary};
        }

        .scroll-to-top {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default Curriculum;
