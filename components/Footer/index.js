import { colors, fontSizes } from "styles/theme";

export default function Footer() {
  return (
    <>
      <footer>
        <h6>Developed by Sebastian Betancur Salazar ©</h6>
      </footer>
      <style jsx>
        {`
          footer {
            font-size: ${fontSizes.font_size_sm};
            height: 100px;
            color: ${colors.white};
          }
        `}
      </style>
    </>
  );
}
