import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export const socket: Socket = io("https://www.odrivee.de:3002", {
  autoConnect: false
});

socket.on("connect", () => {
  console.log("✅ Connected successfully!");
  console.log("Socket ID:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("❌ Connection failed:", err.message);
});

socket.on("disconnect", (reason) => {
  console.log("🔌 Disconnected:", reason);
});

socket.connect();

export const SocketContext = createContext<Socket | null>(null);


