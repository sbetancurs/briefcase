import { colors, fontSizes } from "styles/theme";

export default function Input(props) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>{props.placeholder}</label>
        <input {...props} />
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
        }
        label {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_sm};
        }
        input {
          font-size: ${fontSizes.font_size_xs};
          padding: 10px;
        }
      `}</style>
    </>
  );
}
