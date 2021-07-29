import { colors, fontSizes, breakpoints } from "styles/theme";

export default function Footer() {
  return (
    <>
      <footer>
        <h6>Developed by Sebastian Betancur Salazar 2021 ©</h6>
      </footer>
      <style jsx>
        {`
          footer {
            align-items: center;
            background: ${colors.backgroundSecondary};
            color: ${colors.white};
            display: flex;
            font-size: ${fontSizes.font_size_xs};
            height: 80px;
            justify-content: center;
          }
          @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
            footer {
              width: ${breakpoints.pc};
            }
          }
        `}
      </style>
    </>
  );
}
