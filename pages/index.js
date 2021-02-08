import Head from "next/head";

import TopMenu from "../components/TopMenu";
import Introduction from "../components/Introduction";
import Expertisies from "../components/Expertisies";
import Biography from "../components/Biography";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";

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
