import React, { use } from 'react';
import humanImg from '../../assets/Group.png'
import reportImg from '../../assets/report.png'
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({PlayersPromise}) => {
    
     const playersData = use(PlayersPromise)
     console.log(playersData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4 mt-10'>
          
{
 playersData.map(player=><PlayerCard  playersData={playersData}></PlayerCard>)
}

        </div>
    );
};

export default AvailablePlayers;