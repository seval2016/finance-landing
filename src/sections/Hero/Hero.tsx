import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.content}>
          <h1>
            <span className={styles.titleDark}>Exchange Your Money</span>
            <span className={styles.titleGreen}>
              Easily, Quickly And <br /> Securely
            </span>
          </h1>

          <p>
            Best source for currency conversion, sending money online and
            tracking exchange rates. Live tracking and notifications + flexible
            delivery and payment options.
          </p>

          <button className={styles.cta}>Exchange Fund</button>
        </div>

        {/* RIGHT */}
        <div className={styles.imageWrapper}>
          <div className={styles.circle} />
          <Image
            src="/hero/hero.svg"
            alt="Exchange illustration"
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
