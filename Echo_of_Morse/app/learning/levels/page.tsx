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
            Morse Levels
          </h1>

          <p className={styles.description}>
            Each level uses mixed practice: sometimes you decode Morse signals,
            sometimes you encode characters with the keyboard.
          </p>
        </section>

        <LevelGrid levels={morseLevels} progress={mockLearningProgress} />
      </div>
    </main>
  );
}