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

        {/* //! yren: this link should probably be visible only when the user is logged in */}
        {/* //! yren: later, profile page should use current user data from auth/session */}
        <Link href="/profile" className={styles.navLink}>
          Profile
        </Link>

        {/* //! yren: replace this static Login link with auth/session logic */}
        {/* //! yren: if user is not logged in, show Login/Register; if logged in, show user name/avatar and Logout */}
        <Link href="/login" className={styles.navLink}>
          Login
        </Link>

        {/* //! yren: optional place to add current user name/avatar after session is connected */}
        {/* Example later:
            <div className={styles.userPreview}>
              <span>User avatar</span>
              <span>User name</span>
            </div>
        */}

        <LanguageSwitcher />
      </nav>
    </header>
  );
}