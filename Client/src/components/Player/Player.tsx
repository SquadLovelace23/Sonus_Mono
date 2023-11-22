import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./Player.css"
import { useDarkModeContext } from '../../context/DarkMode';

const Player = () => {
  const { getClassName } = useDarkModeContext()

  const MyCustomPlayButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName('icon')} icon-tabler icon-tabler-player-play-filled `} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor"></path>
      </svg>
  )
  
  const MyCustomFFButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-player-skip-forward-filled`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" strokeWidth="0" fill="currentColor"></path>
        <path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor"></path>
      </svg>
  )
  
  const MyCustomRewindButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-player-skip-back-filled`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" strokeWidth="0" fill="currentColor"></path>
        <path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor"></path>
      </svg>
  )
  
  const MyCustomPauseButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-player-pause-filled`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor"></path>
        <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor"></path>
      </svg>
  )
  
  const MyCustomLoopButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-repeat`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
      </svg>
  )
  
  const MyCustomLoopOffButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-repeat-off`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"></path>
        <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"></path>
        <path d="M3 3l18 18"></path>
      </svg>
  )
  
  const MyCustomVolumeButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-volume`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 8a5 5 0 0 1 0 8"></path>
        <path d="M17.7 5a9 9 0 0 1 0 14"></path>
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
      </svg>
  )
  
  const MyCustomMuteButton = () => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${getClassName("icon")} icon-tabler icon-tabler-volume-3`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
        <path d="M16 10l4 4m0 -4l-4 4"></path>
      </svg>
  )
  
  return (

    <AudioPlayer
      showSkipControls
      showJumpControls={false}
      src="https://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.05.mp3"
      customIcons={{
        play: <MyCustomPlayButton />,
        next: <MyCustomFFButton />,
        previous: <MyCustomRewindButton />,
        loop: <MyCustomLoopButton />,
        volume: <MyCustomVolumeButton />,
        pause: <MyCustomPauseButton />,
        volumeMute: <MyCustomMuteButton />,
        loopOff: <MyCustomLoopOffButton />
      }}
    // other props here
    />

  )
}

export default Player