import Link from "next/link";
import { morseLevels } from "@/data/morseLevels";
import { mockLearningProgress } from "@/data/mockLearningProgress";
import LearningProgressSummary from "@/components/learning/LearningProgressSummary";
import LearningActionCards from "@/components/learning/LearningActionCards";
import LevelGrid from "@/components/learning/LevelGrid";
import styles from "@/components/learning/css/Learning.module.css";

export default function LearningPage() {
  return (
    <main className={styles.learningPage}>
      <div className={styles.learningContainer}>
        <section className={styles.hero} aria-labelledby="learning-title">
          <p className={styles.eyebrow}>Training Center</p>
          <h1 id="learning-title" className={styles.title}>
            Learn Morse Code
          </h1>

          <p className={styles.description}>
            Practice Morse code through mixed exercises. Each level combines
            listening, visual signals, and keyboard input.
          </p>
        </section>

        <LearningProgressSummary progress={mockLearningProgress} />

        <LearningActionCards progress={mockLearningProgress} />

        <section className={styles.section} aria-labelledby="levels-preview-title">
          <div className={styles.sectionHeader}>
            <div>
              <h2 id="levels-preview-title" className={styles.sectionTitle}>
                Your levels
              </h2>
              <p className={styles.sectionText}>
                Continue your current level or review previously unlocked levels.
              </p>
            </div>

            <Link className={styles.link} href="/learning/levels">
              View all levels
            </Link>
          </div>

          <LevelGrid levels={morseLevels} progress={mockLearningProgress} />
        </section>
      </div>
    </main>
  );
}