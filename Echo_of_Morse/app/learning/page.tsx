import PageShell from "@/components/layout/page-shell";
import MorsePlayer from "@/components/learning/MorsePlayer";

export default function LearningPage() {
  return (
    <PageShell>
      <h1>Learning</h1>
      <p>Practice Morse code here.</p>
      <MorsePlayer />
    </PageShell>
  );
}