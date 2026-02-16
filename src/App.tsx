import './App.css'
import PlayerList from './components/PlayerList/PlayerList'
import ServerStats from './components/ServerStats/ServerStats'
import { MongoDb } from './components/MongoDB/MongoDb'
import { Application } from './components/Application/Application'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

let socket = io('https://www.odrivee.de:3002', { autoConnect: false })

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

function App() {

  useEffect(() => {

    socket.connect();

    return () => {
      socket.disconnect();
    };

  }, []);

  return (
    <>

      <div className='container'>

        <div className="server-stats">

          <ServerStats />

        </div>

        <div className="mongo-db">

          <MongoDb />

        </div>

        <div className="application">

          <Application />

        </div>

        <div className="players">

          <PlayerList />

        </div>

      </div>

    </>
  )

}

export default App
