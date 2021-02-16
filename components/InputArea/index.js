import { colors, fontSizes } from "styles/theme";

export default function InputArea(props) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>{props.placeholder}</label>
        <textarea {...props} />
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
        textarea {
          font-size: ${fontSizes.font_size_xs};
          padding: 10px;
          resize: vertical;
        }
      `}</style>
    </>
  );
}
