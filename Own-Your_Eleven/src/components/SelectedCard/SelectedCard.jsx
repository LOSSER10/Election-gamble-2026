import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player)
      const handleRemove=()=>{
         removePlayer(player)
      }

    return (
        <div>
            

  <div className='border-2 border-gray-600 rounded-xl flex
           justify-between items-center p-1 mt-10'>
              <div className='flex items-center gap-4'>
           <img src={player?.img} className='h-[65px] w-[65px] rounded-xl' alt="" />
             <div>
                <h1>{player?.name}</h1>
                <p className='text-sm text-gray-500'>{player?.role}</p>
             </div>

              </div>
              <div onClick={handleRemove}>
               <img src="https://i.ibb.co.com/fsLvL45/Frame.png" alt="" />
              </div>
              
           </div>


        </div>
    );
};

export default SelectedCard;