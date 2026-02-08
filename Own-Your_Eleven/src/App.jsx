import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers.jsx'
// import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers.jsx'

const fatchPlayers = async () => {
  const res =  await fetch('./players.json')
  return res.json()
}


function App() {

  const PlayersPromise= fatchPlayers()

  return (
    <>

<Navbar></Navbar>
<Suspense fallback={<span className="loading loading-spinner text-error"></span>}><AvailablePlayers PlayersPromise={PlayersPromise}></AvailablePlayers></Suspense>
{/* <SelectedPlayers></SelectedPlayers> */}


    </>
  )
}

export default App

