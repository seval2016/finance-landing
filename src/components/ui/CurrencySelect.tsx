import { useState } from "react";
import Image from "next/image";
import styles from "./CurrencySelect.module.scss";
import { Currency } from "@/types/exchange-rate";

type Props = {
  label: string;
  value: Currency;
  options: Currency[];
  onChange: (currency: Currency) => void;
};

const CurrencySelect = ({ label, value, options, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <button
        type="button"
        className={styles.control}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className={styles.value}>
          <Image src={value.flag} alt={value.code} width={24} height={24} />
          <span>
            {value.code} - {value.name}
          </span>
        </div>

        <span className={styles.arrow} aria-hidden />
      </button>

      {open && (
        <ul className={styles.list} role="listbox">
          {options.map((currency) => (
            <li
              key={currency.code}
              role="option"
              className={styles.option}
              onClick={() => {
                onChange(currency);
                setOpen(false);
              }}
            >
              <Image
                src={currency.flag}
                alt={currency.code}
                width={24}
                height={24}
              />
              <span>
                {currency.code} - {currency.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencySelect;
