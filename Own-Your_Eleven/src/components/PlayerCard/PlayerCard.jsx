import React, { useState } from 'react';
import humanImg from '../../assets/Group.png'
import reportImg from '../../assets/report.png'

const PlayerCard = ({playersData,setAvailableBalance,availableBalance}) => {
  const[isSelected,setIsSelected]=useState(false)
  const handleSelectedCoin=(playersData)=>{
    if(availableBalance<playersData.price){
      alert("You don't have enough balance to select this player.")
      return;
    }
setIsSelected(true)
        setAvailableBalance(availableBalance-playersData.price)
  }
    return (
        <div className="card bg-base-100  shadow-sky-900 bg-zinc-600" >
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={playersData.img} alt="Player" />
  </figure>
  <div className="mt-4">
<div  className='flex'>
     <img src={humanImg} alt="" />
    <h2 className="card-title ml-2"> {playersData.name}</h2>
</div>
  
<div  className='flex items-center justify-between border-b-2 border-gray-400 pb-2'>

<div  className='flex items-center mt-4 '>
    <img className="border-2 " src={reportImg} alt="" />
    <span className='ml-1'>{playersData.country}</span>
</div>

 <button className='btn'>All rounder</button>
</div>
<div className='flex justify-between font-bold'>
  <span>Rating</span>
  <span>5</span>
</div>

<div className='flex justify-between font-bold'>
  <span className='font-bold'>{playersData.role}</span>
  <span>{playersData.battingStyle}</span>
</div>

    <div className="card-actions justify-between mt-4">
      <span className='font-bold'>Price: ${playersData.price}</span>
      <button disabled={isSelected} onClick={()=>{
        
handleSelectedCoin(playersData)

      }
        
      } className="btn btn-primary">{isSelected===true?"Seleted" :"Choose Player"}</button>
    </div>
  </div>
</div>
    );
};

export default PlayerCard;