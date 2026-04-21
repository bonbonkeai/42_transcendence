import type { ReactNode } from "react"

type PageShellProps = {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main style={{ padding: "24px", maxWidth: "960px", margin: "0 auto" }}>
      {children}
    </main>
  );
}