import Main from "./components/Main";
import Alphabetslec from "./components/Alphabetslec";
import Vowelslec from "./components/Vowelslec";
import Consonantslec from "./components/Consonantslec";
import Numberslec from "./components/Numberslec";
import Bodylec from "./components/Bodylec";
import Grammarlec from "./components/Grammarlec";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
import girl from "./components/images/girl.svg"
import girl2 from "./components/images/girl2.svg"
import girl3 from "./components/images/girl3.svg"
import boy from "./components/images/boy.svg"
import boy2 from "./components/images/boy2.svg"
import boy3 from "./components/images/boy3.svg"
import backmusic from "./components/Sounds/backmusic.mp3"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gold: 0,
      silver: 0,
      bronze: 0,
      progy: 0,
      imageID: boy,
      audio: new Audio(backmusic),
      isPlaying: false,
    }
}
  playPause = () => {
    let isPlaying = this.state.isPlaying;
    this.state.audio.loop = true;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
    };

  onChange = (tuff) => {
  this.setState({imageID: tuff})
  }

  handleData = (childData1, childData2, childData3) =>{
    this.setState({gold: this.state.gold + childData1})
    this.setState({silver: this.state.silver + childData2})
    this.setState({bronze: this.state.bronze + childData3})
}
  updateProgy =(percy)=>{
    if (this.state.progy<100){
      this.setState({progy: this.state.progy + percy})
    }
    else{
      null
    }
  }
  render(){
  return (
    <div>
      
      <BrowserRouter >
        <Route exact path="/">
         <Main music={this.playPause} newGold={this.state.gold} newSilver={this.state.silver} newBronze={this.state.bronze} image={this.state.imageID} imageChange={this.onChange} progy={this.state.progy}/>
        </Route>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Alphabetslec">
            <Alphabetslec progy={this.updateProgy}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Vowelslec">
            <Vowelslec calcGold={this.handleData} progy={this.updateProgy} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Consonantslec">
            <Consonantslec calcGold={this.handleData} progy={this.updateProgy}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Numberslec">
            <Numberslec calcGold={this.handleData} progy={this.updateProgy}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Bodylec">
            <Bodylec calcGold={this.handleData} progy={this.updateProgy}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Grammarlec" >
            <Grammarlec progy={this.updateProgy}/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/Feedback">
            <Feedback />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
