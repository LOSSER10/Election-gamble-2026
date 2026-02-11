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
<div className='border-2 border-red-500 max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
 <h1>Available Players</h1>
 <div>
  <button className='p-3 border-1 border-blue-700 rounded-l-2xl'>Available</button>
  <button  className='p-3 border-1 border-blue-700 rounded-r-2xl'>Selected <span>(0)</span></button>
 </div>
</div>
<Suspense fallback={<span className="loading loading-spinner text-error"></span>}><AvailablePlayers PlayersPromise={PlayersPromise}></AvailablePlayers></Suspense>
{/* <SelectedPlayers></SelectedPlayers> */}


    </>
  )
}

export default App

