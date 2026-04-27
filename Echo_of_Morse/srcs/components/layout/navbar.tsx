import Link from "next/link";
import LanguageSwitcher from "@/components/layout/language-switcher";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Echoes of Morse
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/dashboard" className={styles.navLink}>
          Dashboard
        </Link>

        <Link href="/profile" className={styles.navLink}>
          Profile
        </Link>

        <Link href="/login" className={styles.navLink}>
          Login
        </Link>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}