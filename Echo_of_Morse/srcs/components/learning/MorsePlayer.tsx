"use client";

import { useState } from "react";
import { encode } from "@/lib/morse";
import { playMorse } from "@/lib/audio";

async function handlePlay(text: string) 
{
  const morse = encode(text);
  await playMorse(morse);
}

export default function MorsePlayer() 
{
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={() => handlePlay(text)}>Play</button>
    </div>
  );
}