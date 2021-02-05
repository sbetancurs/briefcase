import Head from "next/head";

import Introduction from "../components/Introduction";
import Expertisies from "../components/Expertisies";
import Biography from "../components/Biography";

export default function Home() {
  return (
    <>
      <Introduction />
      <Biography />
      <Expertisies />
    </>
  );
}
