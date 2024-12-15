import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Welcome to my Portfolio</h2>
        <p className={styles.heroDescription}>
          Here you will find all of my projects and information about myself.
        </p>
      </div>
    </section>
  );
}