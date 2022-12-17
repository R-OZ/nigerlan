import React from 'react'


const PlaySound=(props)=>{

    const playPause=()=>{
      props.music()
    }
      
     
    return (
      <div>
        <div  className="speaker-btn" onClick={playPause}>
        <img alt='' id="speaker" src={props.musicImage}/>        
        </div>
      </div>             
)
    
}

export default PlaySound

