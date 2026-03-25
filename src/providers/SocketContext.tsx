import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export const socketClient: Socket = io("https://odrivee.de:3002", {
  autoConnect: false
});

socketClient.on("connect", () => {
  console.log("✅ Connected successfully!");
  console.log("Socket ID:", socketClient.id);

  socketClient.emit('setupForMonitor')
});

socketClient.on("connect_error", (err) => {
  console.error("❌ Connection failed:", err.message);
});

socketClient.on("disconnect", (reason) => {
  console.log("🔌 Disconnected:", reason);
});

socketClient.connect();

export const SocketContext = createContext<Socket | null>(null);


