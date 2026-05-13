import Link from "next/link";
import type { UserLearningProgress } from "@/types/learning";
import styles from "@/components/learning/css/Learning.module.css";

type LearningActionCardsProps = {
  progress: UserLearningProgress;
};

export default function LearningActionCards({
  progress,
}: LearningActionCardsProps) {
  return (
    <section className={styles.section} aria-labelledby="learning-actions-title">
      <div className={styles.sectionHeader}>
        <div>
          <h2 id="learning-actions-title" className={styles.sectionTitle}>
            Start training
          </h2>
          <p className={styles.sectionText}>
            Choose how you want to continue your Morse training.
          </p>
        </div>
      </div>

      <div className={styles.actionGrid}>
        <article className={styles.actionCard}>
          <div>
            <h3 className={styles.actionTitle}>Continue current level</h3>
            <p className={styles.actionText}>
              Resume your current mixed practice session.
            </p>
          </div>

          <Link
            className={styles.primaryButton}
            href={`/learning/levels/${progress.currentLevel}/practice`}
          >
            Continue Level {progress.currentLevel}
          </Link>
        </article>

        <article className={styles.actionCard}>
          <div>
            <h3 className={styles.actionTitle}>Quick practice</h3>
            <p className={styles.actionText}>
              Practice one of your unlocked levels in mixed mode.
            </p>
          </div>

          <Link className={styles.secondaryButton} href="/learning/levels">
            Choose a level
          </Link>
        </article>

        <article className={styles.actionCard}>
          <div>
            <h3 className={styles.actionTitle}>Weak characters</h3>
            <p className={styles.actionText}>
              Review letters and numbers that need more work.
            </p>
          </div>

          <Link className={styles.secondaryButton} href="/learning/weak-practice">
            Review weak characters
          </Link>
        </article>

        <article className={styles.actionCard}>
          <div>
            <h3 className={styles.actionTitle}>Dashboard</h3>
            <p className={styles.actionText}>
              View your accuracy, reaction time, and learning history.
            </p>
          </div>

          <Link className={styles.secondaryButton} href="/learning/dashboard">
            Open dashboard
          </Link>
        </article>
      </div>
    </section>
  );
}

//Math.random() 在服务端渲染时可能导致刷新后随机结果变化。如果你们之后遇到 hydration 问题，就把 Quick Practice 改成固定跳转-><Link href="/learning/levels">Choose a level</Link>