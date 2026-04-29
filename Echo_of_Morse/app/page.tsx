import IntroSection from "@/components/home/intro-section"
import OnlineCounter from "@/components/home/online-counter"
import HistoryMorse from "@/components/home/history-morse"
import PageShell from "@/components/layout/page-shell"

export default function HomePage() {
  return (
    <main id="main-content">
      <PageShell>
        <OnlineCounter />
        <IntroSection />
        <HistoryMorse />
      </PageShell>
    </main>
  )
}