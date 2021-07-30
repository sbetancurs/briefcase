import { colors, fontSizes } from "styles/theme";

export default function Input(props) {
  return (
    <>
      <div className='px-1 py-3'>
        <input className='w-100' {...props} />
      </div>
      <style jsx>{`
        input {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_xs};
          padding: 10px;
          background: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid ${colors.white};
        }

        input::placeholder {
          color: ${colors.white};
        }
      `}</style>
    </>
  );
}
