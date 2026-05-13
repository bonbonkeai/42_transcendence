import Link from "next/link";
import type { UserLearningProgress } from "@/types/learning";
import styles from "@/components/learning/css/Learning.module.css";

type LearningEntryCardsProps = {
  progress: UserLearningProgress;
};

export default function LearningEntryCards({
  progress,
}: LearningEntryCardsProps) {
  return (
    <section className={styles.entryGrid} aria-label="Learning options">
      <article className={styles.entryCard}>
        <div>
          <p className={styles.cardLabel}>Levels</p>

          <h2 className={styles.entryTitle}>Choose a level</h2>

          <p className={styles.cardText}>
            View the 10 Morse levels and continue with an unlocked level.
          </p>
        </div>

        <Link className={styles.primaryButton} href="/learning/levels">
          Open levels
        </Link>
      </article>

      <article className={styles.entryCard}>
        <div>
          <p className={styles.cardLabel}>Play</p>

          <h2 className={styles.entryTitle}>Start practice</h2>

          <p className={styles.cardText}>
            Enter a mixed practice session from your current level.
          </p>
        </div>

        <Link
          className={styles.secondaryButton}
          href={`/learning/levels/${progress.currentLevel}/practice`}
        >
          Play Level {progress.currentLevel}
        </Link>
      </article>
    </section>
  );
}

//Math.random() 在服务端渲染时可能导致刷新后随机结果变化。如果你们之后遇到 hydration 问题，就把 Quick Practice 改成固定跳转-><Link href="/learning/levels">Choose a level</Link>