// "use client";

// import { useState } from "react";
// import styles from "./language-switcher.module.css";

// export default function LanguageSwitcher() {
//   const [language, setLanguage] = useState("en");

//   return (
//     <div className={styles.switcher} aria-label="Language switcher">
//       <button
//         type="button"
//         onClick={() => setLanguage("en")}
//         className={`${styles.button} ${language === "en" ? styles.active : ""}`}
//       >
//         EN
//       </button>

//       <button
//         type="button"
//         onClick={() => setLanguage("fr")}
//         className={`${styles.button} ${language === "fr" ? styles.active : ""}`}
//       >
//         FR
//       </button>

//       <button
//         type="button"
//         onClick={() => setLanguage("zh")}
//         className={`${styles.button} ${language === "zh" ? styles.active : ""}`}
//       >
//         中文
//       </button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import styles from "./language-switcher.module.css";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  return (
    <div className={styles.switcher} aria-label="Language switcher">
      <Button
        type="button"
        size="sm"
        variant={language === "en" ? "primary" : "secondary"}
        onClick={() => setLanguage("en")}
        className={styles.button}
      >
        EN
      </Button>

      <Button
        type="button"
        size="sm"
        variant={language === "fr" ? "primary" : "secondary"}
        onClick={() => setLanguage("fr")}
        className={styles.button}
      >
        FR
      </Button>

      <Button
        type="button"
        size="sm"
        variant={language === "zh" ? "primary" : "secondary"}
        onClick={() => setLanguage("zh")}
        className={styles.button}
      >
        中文
      </Button>
    </div>
  );
}