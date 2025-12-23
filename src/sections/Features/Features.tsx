import FeatureCard from "./FeatureCard";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <FeatureCard
          icon="/icons/secure.svg"
          title="SECURE"
          description="Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options."
        />

        <FeatureCard
          icon="/icons/ACCESSIBLE.svg"
          title="EASY ACCESSIBLE"
          description="Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable."
        />

        <FeatureCard
          icon="/icons/fast.svg"
          title="FAST AND RELIABLE"
          description="Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs."
        />
      </div>
    </section>
  );
};

export default Features;
