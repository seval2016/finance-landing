import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* CONTENT */}
        <div className={styles.content}>
          <h1>
            <span className={styles.titleDark}>
              Exchange Your Money
            </span>

            <span className={styles.titleGreen}>
              Easily, Quickly And <br />
              Securely
            </span>
          </h1>

          <p>
            Best source for currency conversion, sending money online and
            tracking exchange rates. Live tracking and notifications + flexible
            delivery and payment options.
          </p>

          <button
            type="button"
            className={styles.cta}
            aria-label="Exchange funds"
          >
            Exchange Fund
          </button>
        </div>

        {/* IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/hero/hero.svg"
            alt="Currency exchange illustration"
            width={460}
            height={460}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
