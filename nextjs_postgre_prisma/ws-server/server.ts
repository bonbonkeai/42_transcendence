
import { Server } from "socket.io";

const io = new Server(3001, { cors: { origin: "*" }});

io.on("connection", (socket) => {
    
  console.log("User connected");
  socket.on("send-morse", (data: string) => { socket.broadcast.emit("receive-morse", data); });
  socket.on("disconnect", () => { console.log("User disconnected"); });

});