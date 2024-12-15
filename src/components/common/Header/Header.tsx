import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
  return (
      <header className={styles.header}>
          <nav className={styles.nav}>
              <Link href="/" className={styles.logo}>
                  My Portfolio
              </Link>
              <ul className={styles.navList}>
                    <li>
                        <Link href="/about" className={styles.navItem}>About</Link>
                     </li>
                     <li>
                        <Link href="/projects" className={styles.navItem}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.navItem}>Contact</Link>
                    </li>
             </ul>
          </nav>
    </header>
  );
}