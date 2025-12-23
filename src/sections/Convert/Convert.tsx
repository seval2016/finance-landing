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

    // Aynı para birimi seçilirse
    if (from.code === to.code) {
      setResult(amount);
      setShowResult(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/latest?apikey=${API_KEY}`);
      const data = await res.json();

      const rates = data?.data;
      if (!rates?.[from.code] || !rates?.[to.code]) return;

      const converted = (amount / rates[from.code]) * rates[to.code];

      setResult(converted);
      setShowResult(true);
    } catch (err) {
      console.error("Currency convert error:", err);
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
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
              min={0}
              step="0.01"
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
            onChange={(currency) => {
              setFrom(currency);
              setShowResult(false);
            }}
          />

          <button
            type="button"
            className={styles.swap}
            onClick={swapCurrencies}
            aria-label="Swap currencies"
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
            onChange={(currency) => {
              setTo(currency);
              setShowResult(false);
            }}
          />

          <button
            type="submit"
            className={styles.submit}
            disabled={loading}
          >
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
