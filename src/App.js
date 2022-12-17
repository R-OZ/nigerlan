import Main from "./components/Main";

import Lecture from "./components/Lecture/Lecture";
import GrammarLec from "./components/Lecture/Grammar/GrammarLec";
import Loading from "./components/Loading";

import { HashRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Feedback from "./components/Profile/Feedback";

import boy from "./components/images/boy.svg"
import speaker from "./components/images/speaker.png"
import mute from "./components/images/mute.png"

import backgroundMusic from "./components/Sounds/backmusic.mp3"


const App = () => {
  const [audio, setAudio] = useState(new Audio(backgroundMusic))
  const [gold, setGold] = useState(0)
  const [silver, setSilver] = useState(0)
  const [bronze, setBronze] = useState(0)

  const[showSet, setShowSet] = useState(false)
  const[isToggle, setIsToggle] = useState(false)

  const [ratingAlpha, setRatingAlpha] = useState(0.0)
  const [ratingVowel, setRatingVowel] = useState(0.0)
  const [ratingCons, setRatingCons] = useState(0.0)
  const [ratingNum, setRatingNum] = useState(0.0)
  const [ratingBody, setRatingBody] = useState(0.0)
  const [ratingGram, setRatingGram] = useState(0.0)

  const [username, setUsername] = useState("User1960")
  const [progy, setProgy] = useState(0)
  const [imageID, setImageID] = useState(boy)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playingImage, setPlayingImage] = useState(mute)


  useEffect(()=>{
    setShowSet(!showSet)
    setIsToggle(!false)
  }, [])

  const updateUsername = (e)=>{
    setUsername(e)
  }
  const handleClick = () =>{
    setShowSet(!showSet)
  }
  const toggle = () =>{
    setIsToggle(!isToggle)
  }

  const playPause = () =>{
    audio.loop = true;

    if (isPlaying) {
      // Pause the song if it is playing
      audio.pause();
      setPlayingImage(mute)
    } 
    else {
      // Play the song if it is paused
      audio.play();
      setPlayingImage(speaker)
    }

    // Change the state of song
    setIsPlaying(!isPlaying);
    };

  const onChange = (newImg) => {
    setImageID(newImg)
  }

  

  const starRating = (idx,rate) =>{
    const ratingArray = [setRatingAlpha, setRatingVowel, setRatingCons, setRatingNum, setRatingBody, setRatingGram]
    ratingArray[idx](rate)
  }

 

  const handleData = (childData1, childData2, childData3) =>{
    setGold(gold + childData1)
    setSilver(silver + childData2)
    setBronze(bronze + childData3)
  }

  const updateProgy =(percent)=>{
    if (progy<100){
      setProgy(progy + percent)
    }
  }

  return (
    <HashRouter>
      <Switch>
          <Route exact path="/">
              <Main 
                music={playPause} 
                musicImage = {playingImage}
                username = {username}
                updateUsername = {updateUsername}
                newGold={gold} 
                newSilver={silver} 
                newBronze={bronze} 
                image={imageID} 
                imageChange={onChange} 
                progy={progy}
                showSet = {showSet}
                isToggle = {isToggle}
                toggle ={toggle}
                handleClick ={handleClick}
                ratings = {[ratingAlpha, ratingVowel, ratingCons, ratingNum, ratingBody, ratingGram]}
              />
          </Route>
          <Route path="/Alphabetslec">
              <Lecture id="alphabet" progy={updateProgy} setRating={starRating}/>
          </Route>
          <Route path="/Vowelslec">
              <Lecture id="vowel" medalUpdate={handleData} progy={updateProgy} setRating={starRating}/>
          </Route>
          <Route path="/Consonantslec">
              <Lecture id="consonant" medalUpdate={handleData} progy={updateProgy} setRating={starRating} />
          </Route>
          <Route path="/Numberslec">
              <Lecture id="number" medalUpdate={handleData} progy={updateProgy} setRating={starRating}/>
          </Route>
          <Route path="/Bodylec">
              <Lecture id="body" medalUpdate={handleData} progy={updateProgy} setRating={starRating}/>
          </Route>
          <Route path="/Grammarlec" >
              <GrammarLec progy={updateProgy} setRating={starRating} />
          </Route>
          <Route path="/Feedback">
              <Feedback />
          </Route>
          <Route path="/Loading"> {/*This Component is not yet in use*/}
            {/*Will be in use for asynchronous requests to the backend */}
            {/* To see view this component, simply type "/loading" after the home page and enter */}
            <Loading/>
          </Route>
      </Switch>
    </HashRouter>
  )
}

fiun
export default App;

