import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export let data: {

  serverStats: {

    'cpu': number,

    'ram': number,

    'disk': number,

  },

  mongoDb: {

    collectionName: string,

    storageSize: number,

    unit: number,

  }[],

  application: {

    totalNumberOfChunks: number,

    createableChunks: number,

    squareMetersCurrent: number,

    squareMetersPotencial: number,

    creatingChunks: number,

    chunksToCreate: number,

  },

  dynamicObjects: any

}

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

export const SocketContext = createContext<any | null>(null);


