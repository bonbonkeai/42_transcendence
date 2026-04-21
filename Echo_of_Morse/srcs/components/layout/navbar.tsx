import Link from "next/link"

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="site-nav">
        <Link href="/">Echoes of Morse</Link>
        <div className="nav-links">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/chat">Chat</Link>
        </div>
      </nav>
    </header>
  )
}