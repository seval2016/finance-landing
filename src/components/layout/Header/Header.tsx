import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Image
            src="/logos/logo.svg"
            alt="EasyExchange Logo"
            width={260}
            height={60}
            priority
          />
        </div>

        {/* LOGIN */}
        <nav className={styles.nav}>
          <a href="#" className={styles.login}>
            LOGIN
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
