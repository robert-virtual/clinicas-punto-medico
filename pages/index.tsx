import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clinicas Punto Medico</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clinicas Punto Medico</h1>

        <p className={styles.description}>Danli, El Paraiso, Honduras</p>
        <code className={styles.code}>Telefono: 2763-0000</code>

        <div className={styles.grid}>
          {/* <a href="https://nextjs.org/docs" className={styles.card}> */}
          {/*   <h2>Documentation &rarr;</h2> */}
          {/*   <p>Find in-depth information about Next.js features and API.</p> */}
          {/* </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por Roberto Castillo{" "}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
