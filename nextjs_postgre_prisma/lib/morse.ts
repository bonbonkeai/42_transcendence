const MORSE: Record<string, string> = {
  A: ".-",
  B: "-...",
  S: "...",
  O: "---",
};

export function encode(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((c) => MORSE[c] || "")
    .join(" ");
}