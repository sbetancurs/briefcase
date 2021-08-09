
import NavigationMenu from "../components/NavigationMenu";
import Introduction from "../components/Introduction";
import Expertisies from "../components/Expertisies";
import Projects from "../components/Projects";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <Introduction />
      <Expertisies />
      <Projects />
      <Contactme />
      <Footer />
    </>
  );
}



