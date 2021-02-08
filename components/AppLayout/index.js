import Head from "next/head";
import styles, { globalStyles } from "./styles";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Briefcase</title>
        <link rel='icon' href='/sebas.ico' />
      </Head>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
