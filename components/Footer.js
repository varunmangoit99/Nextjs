import styles from "../styles/Home.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.maxx}>
      <div style={{ background: "black" }}>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            VarunPatidar © 2020 Copyright, All Right Reserved{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
