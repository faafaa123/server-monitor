import { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList/PlayerList'
import ServerStats from './components/ServerStats/ServerStats'

function App() {

  return (
    <>

      <div className='container'>

        <div className="server-stats">

          <ServerStats/>

        </div>

        <div className="mongo-db">

          Mongo-DB

        </div>

        <div className="application">

          Application

        </div>

        <div className="players">

          <PlayerList />

        </div>

      </div>

    </>
  )

}

export default App
