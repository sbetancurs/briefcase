
import TopMenu from "../components/TopMenu";
import Introduction from "../components/Introduction";
import Expertisies from "../components/Expertisies";
import Biography from "../components/Biography";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import { withTranslation } from "i18n.js";

export default function Home() {
  return (
    <>
      <TopMenu />
      <Introduction />
      <Biography />
      <Expertisies />
      <Contactme />
      <Footer />
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "introduction", "biography"],
});

