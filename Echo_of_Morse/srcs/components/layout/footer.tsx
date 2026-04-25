import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>Echoes of Morse</p>

          <p className={styles.description}>
            Learn, communicate, and compete through Morse code.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>

          <Link href="/terms-of-service" className={styles.link}>
            Terms of Service
          </Link>

          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </nav>
      </div>

      <p className={styles.copyright}>© 2026 Echoes of Morse</p>
    </footer>
  );
}