"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Convert.module.scss";
import CurrencySelect from "@/components/ui/CurrencySelect";
import { currencies } from "@/utils/currencies";
import { Currency } from "@/types/exchange-rate";

const BASE_URL = process.env.NEXT_PUBLIC_FREECURRENCY_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_FREECURRENCY_API_KEY!;

const Convert = () => {

  const [amount, setAmount] = useState(10);
  const [from, setFrom] = useState<Currency>(currencies[0]);
  const [to, setTo] = useState<Currency>(currencies[1]);
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!amount) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&base_currency=${from.code}&currencies=${to.code}`
      );

      const data = await res.json();
      const rate = data?.data?.[to.code];
     

      if (!rate) return;

      setResult(amount * rate);
      setShowResult(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setShowResult(false);
  };

  return (
    <section className={styles.convert}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
            src="/icons/convert_icon.svg"
            alt="Convert"
            width={48}
            height={48}
          />
          <h3>Convert Fund</h3>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            calculate();
          }}
        >
          <div className={styles.field}>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
                setShowResult(false);
              }}
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
          >
            <Image
              src="/icons/exchance.svg"
              alt="Swap"
              width={22}
              height={22}
            />
          </button>

          <CurrencySelect
            label="To"
            value={to}
            options={currencies}
            onChange={setTo}
          />

          <button type="submit" className={styles.submit}>
            {loading ? "Converting..." : "Convert"}
          </button>
        </form>

        {showResult && result !== null && (
          <div className={styles.result}>
            <p className={styles.info}>
              {amount.toFixed(2)} {from.code} =
            </p>

            <h2 className={styles.value}>
              {result.toFixed(6)} {to.code}
            </h2>

            <div className={styles.rates}>
              <span>
                1 {from.code} = {(result / amount).toFixed(6)} {to.code}
              </span>
              <span>
                1 {to.code} = {(1 / (result / amount)).toFixed(6)} {from.code}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Convert;
