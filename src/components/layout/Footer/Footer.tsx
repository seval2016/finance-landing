import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/logos/logo.svg"
              alt="Finance"
              width={200}
            height={30}
            />
          </div>

          <nav className={styles.nav}>
            <a href="#">Features</a>
            <a href="#">Rates</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
