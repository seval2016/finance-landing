"use client";

import styles from "./LoginModal.module.scss";
import Image from "next/image";

interface Props {
  onClose: () => void;
}

const LoginModal = ({ onClose }: Props) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* LOGO */}
        <div className={styles.logo}>
          <Image
            src="/logos/logo.svg"
            alt="EasyExchange"
            width={320}
            height={100}
          />
        </div>

        <div className={styles.divider} />
        <h3 className={styles.title}>Login Account</h3>

        <form className={styles.form}>
          <input type="email" placeholder="Email ID" />
          <input type="password" placeholder="Password" />

          <div className={styles.links}>
            <a href="#">I don’t have account</a>
            <a href="#">Forgot your password?</a>
          </div>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
