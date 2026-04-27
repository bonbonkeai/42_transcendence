import styles from "./home.module.css";

export default function IntroSection() {
  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.sectionTitle}>A Project of Morse?</h2>

      <p className={styles.sectionText}>
        Morse code becomes here a way to learn signals, rhythm, communication,
        and interaction.
      </p>
    </section>
  );
}