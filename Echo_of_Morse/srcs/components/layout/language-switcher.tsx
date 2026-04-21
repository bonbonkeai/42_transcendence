"use client"

import { useState } from "react"

const buttonStyle = (active: boolean) => ({
  background: "transparent",
  border: "1px solid #eceae8",
  color: active ? "#fcfbf5" : "#fcfbf5",
  padding: "6px 10px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
  opacity: active ? 1 : 0.8,
})

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en")

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        style={buttonStyle(language === "en")}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("fr")}
        style={buttonStyle(language === "fr")}
      >
        FR
      </button>

      <button
        type="button"
        onClick={() => setLanguage("zh")}
        style={buttonStyle(language === "zh")}
      >
        中文
      </button>
    </div>
  )
}