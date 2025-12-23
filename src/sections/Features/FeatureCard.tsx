import Image from "next/image";
import styles from "./Features.module.scss";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={title} width={230} height={230} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
