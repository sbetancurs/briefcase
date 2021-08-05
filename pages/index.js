
import TopMenu from "../components/TopMenu";
import Introduction from "../components/Introduction";
import Expertisies from "../components/Expertisies";
import Projects from "../components/Projects";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopMenu />
      <Introduction />
      <Expertisies />
      <Projects />
      <Contactme />
      <Footer />
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "introduction"],
});

