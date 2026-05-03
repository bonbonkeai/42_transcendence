// import { Server } from "socket.io";

// const io = new Server(3001, { cors: { origin: "*" }});

// io.on("connection", (socket) => {
    
//   console.log("User connected");
//   socket.on("send-morse", (data: string) => { socket.broadcast.emit("receive-morse", data); });
//   socket.on("disconnect", () => { console.log("User disconnected"); });

// });



const { Server } = require("socket.io");

const io = new Server(3001, {
  cors: { origin: "*" }
});

// Cleanup lost client every 30s
setInterval(() => {
  fetch("http://web:3000/api/users/cleanup", {
    method: "POST",
  });
}, 30000);

io.on("connection", (socket) => {
  console.log("User connected");

// Get userId from frontend
  const userId = socket.handshake.auth.userId;

// Set as online
  if (userId) {
    fetch("http://web:3000/api/users/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, isOnline: true }),
    });
  }

// Hearbeat, update lastSeen
  socket.on("ping", () => {
    if (userId) {
      fetch("http://web:3000/api/users/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, isOnline: true }),
      });
    }
  });

  socket.on("send-morse", (data) => {
    socket.broadcast.emit("receive-morse", data);
  });

// Client leave: set isOnline false.
  socket.on("disconnect", () => {
    console.log("User disconnected");
    if (userId) {
      fetch("http://web:3000/api/users/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, isOnline: false }),
      });
    }
  });
});




