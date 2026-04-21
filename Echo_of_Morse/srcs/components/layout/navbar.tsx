import Link from "next/link"
import LanguageSwitcher from "@/components/layout/language-switcher"

const navLinkStyle = {
  textDecoration: "none",
  color: "#fcfbf5",
  fontSize: "15px",
  fontWeight: 600,
  padding: "6px 0",
}

export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        padding: "20px 0 16px 0",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "40px",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#fcfbf5",
          fontSize: "28px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        Echoes of Morse
      </Link>

      <nav
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/dashboard" style={navLinkStyle}>
          Dashboard
        </Link>
        <Link href="/profile" style={navLinkStyle}>
          Profile
        </Link>
        <Link href="/login" style={navLinkStyle}>
          Login
        </Link>

        <LanguageSwitcher />

      </nav>
    </header>
  )
}