import "./globals.css"

export const metadata = {
  title: "Echoes of Morse",
  description: "Learn, communicate, and compete through Morse code.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

// ! i18n: move metadata title, metadata description, html lang, and skip-link text into the i18n setup.
// ! i18n: html lang should follow the current selected locale, for example en / fr / zh.