import css from "styled-jsx/css";

import { breakpoints, colors, fonts } from "../../styles/theme";

export const globalStyles = css.global`
  html,
  body {
    background-color: ${colors.backgroundPrimary};
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.body_font};
  }
  * {
    box-sizing: border-box;
  }
  textarea,
  input {
    font-family: ${fonts.base};
  }
  /** reset **/
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-family: ${fonts.base};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
    line-height: 1.125;
  }

  hr  {
    color: ${colors.white};;
  }
`;

export default css`
  div {
    height: 100%;
  }
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
      flex-direction: column;
    }
  }
`;
