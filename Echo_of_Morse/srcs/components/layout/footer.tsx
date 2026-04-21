import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "56px",
        padding: "24px 0 0 0",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Echoes of Morse
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "#6b7280",
              maxWidth: "320px",
            }}
          >
            Learn, communicate, and compete through Morse code.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/privacy-policy"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Terms of Service
          </Link>

          <Link
            href="/login"
            style={{
              textDecoration: "none",
              color: "#4b5563",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Login
          </Link>
        </nav>
      </div>

      <p
        style={{
          margin: "20px 0 0 0",
          fontSize: "13px",
          color: "#9ca3af",
        }}
      >
        © 2026 Echoes of Morse
      </p>
    </footer>
  )
}