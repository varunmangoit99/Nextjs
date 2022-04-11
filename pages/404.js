import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <Head>
        <title>Opps...</title>
      </Head>
      <p className={styles.err}>404</p>
      <h1 className={styles.err1}>WE ARE SORRY, PAGE NOT FOUND!</h1>
      <button onClick={() => router.push("/")} className={styles.errcss}>
        BACK TO HOMEPAGE
      </button>
    </div>
  );
}

export default Error;
