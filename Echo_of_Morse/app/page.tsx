import HeroSection from "@/components/home/hero-section"
import IntroSection from "@/components/home/intro-section"
import LoginEntry from "@/components/home/login-entry"
import OnlineCounter from "@/components/home/online-counter"
import FeatureGrid from "@/components/home/feature-section"
import PageShell from "@/components/layout/page-shell"

export default function HomePage() {
  return (
    <main id="main-content">
      <PageShell>
        <HeroSection />
        <IntroSection />
        <LoginEntry />
        <OnlineCounter />
        <FeatureGrid />
      </PageShell>
    </main>
  )
}