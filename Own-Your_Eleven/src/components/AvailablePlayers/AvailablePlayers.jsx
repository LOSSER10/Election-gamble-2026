import React, { use } from 'react';
import humanImg from '../../assets/Group.png'
import reportImg from '../../assets/report.png'

const AvailablePlayers = ({PlayersPromise}) => {
    
     const playersData = use(PlayersPromise)
     console.log(playersData)
    return (
        <div className='max-w-[1200px] mx-auto'>
          



      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-4">
<div  className='flex'>
     <img src={humanImg} alt="" />
    <h2 className="card-title ml-2">Card Title</h2>
</div>
  
<div  className='flex items-center justify-between'>
<div  className='flex items-center mt-4'>
    <img className="border-2 " src={reportImg} alt="" />
    <span className='ml-1'>Bangladesh</span>
</div>
 <button className='btn'>All rounder</button>
</div>

    <div className="card-actions justify-end mt-4">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>




        </div>
    );
};

export default AvailablePlayers;