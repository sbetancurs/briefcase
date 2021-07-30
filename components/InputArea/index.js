import { colors, fontSizes } from "styles/theme";

export default function InputArea(props) {
  return (
    <>
      <div className='px-1 py-3'>
        <textarea className='w-100' {...props} />
      </div>
      <style jsx>{`
        textarea {
          color: ${colors.white};
          font-size: ${fontSizes.font_size_xs};
          padding: 10px;
          resize: vertical;
          background: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid ${colors.white};
        }
      `}</style>
    </>
  );
}
