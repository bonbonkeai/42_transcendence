import type { UserLearningProgress } from "@/types/learning";
import styles from "@/components/learning/css/Learning.module.css";

type LearningProgressSummaryProps = {
  progress: UserLearningProgress;
};

export default function LearningProgressSummary({
  progress,
}: LearningProgressSummaryProps) {
  return (
    <section className={styles.section} aria-labelledby="progress-summary-title">
      <div className={styles.sectionHeader}>
        <div>
          <h2 id="progress-summary-title" className={styles.sectionTitle}>
            Progress summary
          </h2>
          <p className={styles.sectionText}>
            Your current learning status and recent performance.
          </p>
        </div>
      </div>

      <dl className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <dt className={styles.summaryLabel}>Current level</dt>
          <dd className={styles.summaryValue}>Level {progress.currentLevel}</dd>
        </div>

        <div className={styles.summaryCard}>
          <dt className={styles.summaryLabel}>Completed levels</dt>
          <dd className={styles.summaryValue}>{progress.completedLevels.length}</dd>
        </div>

        <div className={styles.summaryCard}>
          <dt className={styles.summaryLabel}>Global accuracy</dt>
          <dd className={styles.summaryValue}>{progress.globalAccuracy}%</dd>
        </div>

        <div className={styles.summaryCard}>
          <dt className={styles.summaryLabel}>Reaction time</dt>
          <dd className={styles.summaryValue}>{progress.averageReactionTime}s</dd>
        </div>

        <div className={styles.summaryCard}>
          <dt className={styles.summaryLabel}>Sessions</dt>
          <dd className={styles.summaryValue}>{progress.totalSessions}</dd>
        </div>
      </dl>
    </section>
  );
}