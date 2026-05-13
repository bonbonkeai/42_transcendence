import LearningProgressCard from "@/components/learning/LearningProgressCard";
import LearningEntryCards from "@/components/learning/LearningEntryCards";
import { mockLearningProgress } from "@/components/learning/data/mockLearningProgress";
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
            Continue your Morse training through mixed practice levels.
          </p>
        </section>

        <LearningProgressCard progress={mockLearningProgress} />

        <LearningEntryCards progress={mockLearningProgress} />
      </div>
    </main>
  );
}