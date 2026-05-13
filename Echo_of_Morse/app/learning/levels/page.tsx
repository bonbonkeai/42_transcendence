import Link from "next/link";
import { morseLevels } from "@/data/morseLevels";
import { mockLearningProgress } from "@/data/mockLearningProgress";
import LevelGrid from "@/components/learning/LevelGrid";
import styles from "@/components/learning/css/Learning.module.css";

export default function LevelsPage() {
  return (
    <main className={styles.learningPage}>
      <div className={styles.learningContainer}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link className={styles.link} href="/learning">
            Learning
          </Link>
          <span aria-hidden="true"> / </span>
          <span className={styles.breadcrumbCurrent}>Levels</span>
        </nav>

        <section className={styles.hero} aria-labelledby="levels-title">
          <p className={styles.eyebrow}>Level Directory</p>
          <h1 id="levels-title" className={styles.title}>
            Morse levels
          </h1>

          <p className={styles.description}>
            Each level introduces new characters and reviews previous ones. The
            practice mode automatically mixes Morse-to-letter and
            letter-to-Morse questions.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="all-levels-title">
          <div className={styles.sectionHeader}>
            <div>
              <h2 id="all-levels-title" className={styles.sectionTitle}>
                All levels
              </h2>
              <p className={styles.sectionText}>
                Locked levels become available after you reach the required
                accuracy.
              </p>
            </div>
          </div>

          <LevelGrid levels={morseLevels} progress={mockLearningProgress} />
        </section>
      </div>
    </main>
  );
}