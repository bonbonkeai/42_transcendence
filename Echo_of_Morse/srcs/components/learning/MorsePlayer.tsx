"use client";

import { useMemo, useState } from "react";
import { encode } from "@/lib/morse";
import { playMorse } from "@/lib/audio";

export default function MorsePlayer() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const morse = useMemo(() => {
    return text.trim() ? encode(text) : "";
  }, [text]);

  async function handlePlay() {
    if (!text.trim()) {
      return;
    }

    try {
      setIsPlaying(true);
      await playMorse(morse);
    } finally {
      setIsPlaying(false);
    }
  }

  return (
    <section className="panel">
      <div style={{ display: "grid", gap: "16px" }}>
        <label style={{ display: "grid", gap: "8px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#101010",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Input Message
          </span>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            style={{
              width: "100%",
              padding: "12px 14px",
              border: "1px solid #fffcf9",
              borderRadius: "10px",
              background: "#101010",
              color: "#fffcf9",
              fontSize: "15px",
              outline: "none",
            }}
          />
        </label>

        <div>
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "14px",
              fontWeight: 700,
              color: "#101010",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Encoded Morse
          </p>

          <div
            style={{
              minHeight: "52px",
              padding: "12px 14px",
              border: "1px solid #101010",
              borderRadius: "10px",
              background: "#101010",
              color: "#fffcf9",
              fontSize: "15px",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {morse || "No transmission yet."}
          </div>
        </div>

        <button
          type="button"
          onClick={handlePlay}
          disabled={!text.trim() || isPlaying}
          style={{
            width: "fit-content",
            padding: "12px 18px",
            border: "1px solid #101010",
            borderRadius: "10px",
            background: !text.trim() || isPlaying ? "#101010" : "#101010",
            color: "#fffcf9",
            fontSize: "14px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            cursor: !text.trim() || isPlaying ? "not-allowed" : "pointer",
          }}
        >
          {isPlaying ? "Transmitting..." : "Play Morse"}
        </button>
      </div>
    </section>
  );
}