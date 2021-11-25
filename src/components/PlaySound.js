import React, {Component} from 'react'
import speaker from "./images/speaker.svg"
import ReactSound from 'react-sound'
import backmusic from "./Sounds/backmusic.mp3"
import { Howl } from 'howler'

class PlaySound extends Component {

    // state = {
    //     audio: new Audio(backmusic),
    //     isPlaying: false,
    //   };
      

    //   playPause = () => {
    //     let isPlaying = this.state.isPlaying;
    //     this.state.audio.loop = true;

    //     if (isPlaying) {
    //       // Pause the song if it is playing
    //       this.state.audio.pause();
    //     } else {
      
    //       // Play the song if it is paused
    //       this.state.audio.play();
    //     }
      
    //     // Change the state of song
    //     this.setState({ isPlaying: !isPlaying });
    //   };
    playPause=()=>{
      this.props.music()
    }
      
      render() {
        return (
          <div>
            <div  className="speaker-btn" onClick={()=>this.playPause()}>
            <img id="speaker" src={speaker}/>        
            </div>
          </div>             
    )
    }
}

export default PlaySound

