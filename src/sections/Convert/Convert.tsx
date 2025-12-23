"use client";

import { useState } from "react";
import styles from "./Convert.module.scss";
import Image from "next/image";
import CurrencySelect from "@/components/ui/CurrencySelect";
import { currencies } from "@/utils/currencies";
import { Currency } from "@/types/exchange-rate";

const Convert = () => {
  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState<Currency>(currencies[0]);
  const [to, setTo] = useState<Currency>(currencies[1]);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <section className={styles.convert}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
            src="/icons/convert_icon.svg"
            alt="Convert"
            width={50}
            height={50}
          />
          <h3>Convert Fund</h3>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <CurrencySelect
            label="From"
            value={from}
            options={currencies}
            onChange={setFrom}
          />

          <button
            type="button"
            className={styles.swap}
            onClick={swapCurrencies}
            aria-label="Swap currencies"
          >
            <Image
              src="/icons/exchance.svg"
              alt="Swap currencies"
              width={24}
              height={24}
            />
          </button>

          <CurrencySelect
            label="To"
            value={to}
            options={currencies}
            onChange={setTo}
          />

          <button className={styles.submit}>Convert</button>
        </form>
      </div>
    </section>
  );
};

export default Convert;
