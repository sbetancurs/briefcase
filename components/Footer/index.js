import { withTranslation } from "i18n.js";
import { colors, fontSizes } from "styles/theme";

const Footer = ({ t }) => {
  return (
    <>
      <footer>
        <h6>
          {t("developed")} Sebastian Betancur Salazar ©{" "}
          {new Date().getFullYear()}{" "}
        </h6>
      </footer>
      <style jsx>
        {`
          footer {
            align-items: center;
            background: ${colors.background_secondary};
            color: ${colors.white};
            display: flex;
            font-size: ${fontSizes.font_size_xs};
            height: 80px;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default withTranslation(["common"])(Footer);
