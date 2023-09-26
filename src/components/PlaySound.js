import React from 'react'
import { useGlobalState, ACTIONS } from '../Context'
import speaker from "../components/images/speaker.png"
import mute from "../components/images/mute.png"

const PlaySound=()=>{
  const {state:{isMusicPlaying}, dispatch} = useGlobalState()

  return (
    <div>
      <div  className="speaker-btn" onClick={()=>dispatch({type: ACTIONS.TOGGLE_MUSIC})}>
      <img alt='speaker' id="speaker" src={isMusicPlaying? speaker : mute}/>        
      </div>
    </div>             
)
    
}

export default PlaySound

