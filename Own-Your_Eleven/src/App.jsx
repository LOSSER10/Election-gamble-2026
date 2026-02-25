import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  import { ToastContainer } from 'react-toastify';


import Navbar from './components/Navbar/Navbar.jsx'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers.jsx'
 import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers.jsx'

const fatchPlayers = async () => {
  const res =  await fetch('./players.json')
  return res.json()
}

 const PlayersPromise= fatchPlayers()
function App() {

const [availableBalance,setAvailableBalance] =useState(6000000)
const [toggle,setToggle]=useState(false)
const [purchasedPlayers,setPurchasedPlayers]=useState([])

const removePlayer=(p)=>{
 
  const fileteredPlayers=purchasedPlayers.filter(ply=>ply.name!==p.name)
  console.log(fileteredPlayers)
  setPurchasedPlayers(fileteredPlayers)
}


  return (
    <>

<Navbar availableBalance={availableBalance}></Navbar>
<div className='max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
 <h1 className='font-bold text-2xl'>{toggle=== true ? "Available Players" :`Selected Players(${purchasedPlayers.length}/6)`}</h1>
 <div>
  <button onClick={()=>setToggle(true)
  } className={`p-3 border-1 border-blue-700 rounded-l-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]' : ''} text-black font-bold`}>Available</button>
  <button onClick={()=>{setToggle(false
  )}} className={`p-3 border-1 border-blue-700 rounded-r-2xl border-l-0 font-bold text-black ${toggle === false ? 'bg-[#E7FE29]' : ''}`}>Selected <span>{purchasedPlayers.length}</span></button>
 </div>
</div>

{
  toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
    <AvailablePlayers setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance}   setAvailableBalance={setAvailableBalance}PlayersPromise={PlayersPromise}>
      </AvailablePlayers></Suspense>: 
      <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
}

<ToastContainer />
    </>
  )
}

export default App

