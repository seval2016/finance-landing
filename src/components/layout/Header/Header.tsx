"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import LoginModal from "@/components/ui/LoginModal";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            <button
              className={styles.login}
              onClick={() => setIsOpen(true)}
            >
              LOGIN
            </button>
          </nav>
        </div>
      </header>

      {/* MODAL */}
      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
