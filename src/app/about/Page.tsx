// src/app/about/page.tsx
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutDescription}>
          ここに自己紹介文を記述してください。
        </p>
      </div>
    </section>
  );
}