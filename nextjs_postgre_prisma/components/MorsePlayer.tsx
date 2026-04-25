// "use client";

// import { useState } from "react";
// import { encode } from "@/lib/morse";
// import { playMorse } from "@/lib/audio";

// async function handlePlay(text: string) 
// {
//   const morse = encode(text);
//   await playMorse(morse);
// }

// export default function MorsePlayer() 
// {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text"
//       />
//       <button onClick={() => handlePlay(text)}>Play</button>
//     </div>
//   );
// }

//-----------------------------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { encode } from "@/lib/morse";
import { playMorse } from "@/lib/audio";

let socket: Socket;

  async function handlePlay(text: string) 
  {
    const morse = encode(text);
    await playMorse(morse);
    socket.emit("send-morse", morse);
  }

export default function MorsePlayer() 
{
  const [text, setText] = useState("");

  useEffect(() => {
    socket = io("http://localhost:3001");

    const handler = async (morse: string) => {
      console.log("Received:", morse);
      await playMorse(morse);
    };

    socket.on("receive-morse", handler);

    return () => {
      socket.off("receive-morse", handler);
      socket.disconnect();
    };
  }, []);

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