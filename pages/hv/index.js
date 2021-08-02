import Curriculum from "components/Curriculum";

export default function Hv() {
  return (
    <>
      <Curriculum />
    </>
  );
}

Hv.getInitialProps = async () => ({
  namespacesRequired: ["common", "introduction"],
});
