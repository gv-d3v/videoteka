import React from 'react';
import YouTube from 'react-youtube';
import CloseSVG from '../../../../_iconsAndImages/close-icon';

export default function Trailer({ top, showTrailer, playerRef, setPlayer, closeTrailer, trailer }) {
   
   return (
      <div
         style={{ top: top }}
         className={`trailer-window ${showTrailer}`}
      >
         <YouTube
            sandbox='allow-same-origin allow-scripts'
            className='trailer-video'
            videoId={trailer}
            onReady={event => {
               // Store a reference to the player when it's ready
               playerRef.current = event.target;
               setPlayer(event.target);
            }}
         /> 
         <div className='trailer-exit-box'>
            <div
               className='trailer-exit'
               onClick={() => closeTrailer()}
            >
               <CloseSVG />
               <span>Close</span>
            </div>
         </div>
      </div>
   );
}
