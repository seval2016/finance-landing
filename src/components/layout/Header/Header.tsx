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
        <div className={styles.headerContainer}>
          {/* LOGO */}
          <div className={styles.headerLogo}>
            <Image
              src="/logos/logo.svg"
              alt="EasyExchange Logo"
              fill
              priority
            />
          </div>

          {/* LOGIN */}
            <button
              className={styles.login}
              onClick={() => setIsOpen(true)}
            >
              LOGIN
            </button>
        </div>
      </header>

      {/* MODAL */}
      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
