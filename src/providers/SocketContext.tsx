import { io, Socket } from "socket.io-client";
import { createContext } from "react";
import type { basic } from "../interfaces/basic";

export let data: basic

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

socket.on("monitor", (data: basic) => {

  console.log("Receive monitor data");

  console.log(data)

});

socket.connect();

export const SocketContext = createContext<basic | null>(null);


