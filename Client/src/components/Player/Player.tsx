import React from 'react'


import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

type Props = {}

const Player = () => {

    return (
      
       
        <AudioPlayer
       
        src="https://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.05.mp3"
        onPlay={e => console.log("onPlay")}
        // other props here
      />
  
    )
}

export default Player