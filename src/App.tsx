import './App.css'
import PlayerList from './components/PlayerList/PlayerList'
import ServerStats from './components/ServerStats/ServerStats'
import { MongoDb } from './components/MongoDB/MongoDb'
import { Application } from './components/Application/Application'

function App() {

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
