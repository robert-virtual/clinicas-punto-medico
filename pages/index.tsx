import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
const SHEETS_BASE_URL =
  "https://sheets.googleapis.com/v4/spreadsheets/1N3ybCqwq9xPiya0W9F8xWdMBOeGJyiz1sj15PMXkM2I";
const access_token = "AIzaSyCRYiEmV3V4C7e4q0hJhuhBKwwJZUHLa-o";
const fetcher = (...args: [RequestInfo | URL, RequestInit | undefined]) =>
  fetch(...args).then((res) => res.json());

interface IGetValuesRes {
  range: string;
  majorDimension: string;
  values: string[][];
}

const Home: NextPage = () => {
  const getDermatologaCount = `${SHEETS_BASE_URL}/values/Metadata!A2?key=${access_token}`;
  const { data: count, error: countErr } = useSWR<IGetValuesRes>(
    getDermatologaCount,
    fetcher
  );

  const [dermatologaEp, setDermatologaEp] = useState("");
  useEffect(() => {
    if (count) {
      const last = Number(count.values[0][0]) + 1;
      const endpoint = `${SHEETS_BASE_URL}/values/dermatologa!A${
        last - 10
      }:D${last}?key=${access_token}`;
      setDermatologaEp(endpoint);
      console.log(endpoint);
    }
  }, [count]);
  const { data, error } = useSWR<IGetValuesRes>(dermatologaEp, fetcher);
  return (
    <div className={styles.container}>
      <Head>
        <title>Clinicas Punto Medico</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Clinicas Punto Medico</h1>

      <p className={styles.description}>Danli, El Paraiso, Honduras</p>
      <code className={styles.code}>Telefono: 2763-0000</code>
      <p>
        Dermatologa Pasientes:{" "}
        {countErr
          ? "no se pudo cargar"
          : !count
          ? "cargando..."
          : count.values[0][0]}
      </p>
      <div className={styles.grid}>
        {/* <a href="https://nextjs.org/docs" className={styles.card}> */}
        {/*   <h2>Documentation &rarr;</h2> */}
        {/*   <p>Find in-depth information about Next.js features and API.</p> */}
        {/* </a> */}
        {error ? (
          <p>{error}</p>
        ) : !data ? (
          <span>Cargando...</span>
        ) : (
          data.values.reverse().map((e, i) => (
            <div key={i.toString()} className={styles.card}>
              <h2>
                #{i + 1} {e[0].split(" ").slice(0, 2).join(" ")}
              </h2>
              <p>{new Date(e[1]).toLocaleString()}</p>
              {/* <img src={e[1]} alt={e[0]}/> */}
            </div>
          ))
        )}
      </div>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
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
