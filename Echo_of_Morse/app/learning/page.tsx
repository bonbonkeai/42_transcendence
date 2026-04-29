import PageShell from "@/components/layout/page-shell";
import MorsePlayer from "@/components/learning/MorsePlayer";
import styles from "./learning.module.css";

export default function LearningPage() {
  return (
    <main id="main-content">
      <PageShell>
        <section className={styles.learningPanel}>
          <h1 className={styles.title}>Learning</h1>

          <p className={styles.description}>
            Practice Morse code and improve your decoding skills.
          </p>

          <MorsePlayer />
        </section>
      </PageShell>
    </main>
  );
}