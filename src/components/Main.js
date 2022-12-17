import Profile from './Profile/Profile'
import Nav from './Nav'
import React from 'react'
import { useState} from 'react'

import Module from './Module/Module'


const Main = (props) => {

  
    return (
      <div className="home">
        
        <div onClick={props.toggle}  className={props.isToggle?"mobile-nav-shadow":"mobile-nav-shadow -null" }></div>
        
        <Profile 
          username = {props.username}
          updateUsername = {props.updateUsername}
          num={props.newGold} 
          num2={props.newSilver} 
          num3={props.newBronze} 
          image={props.image} 
          imageChange={props.imageChange} 
          progy={props.progy}
          showSet ={props.showSet}
          isToggle = {props.isToggle}
          handleClick={props.handleClick}
        />

        <div className="menu-container">
          <Nav image={props.image} isToggle = {props.isToggle} toggle={props.toggle} music={props.music} musicImage = {props.musicImage}/>
          
          <div className="modules-section">
              <Module id = "alphabet" rating={props.ratings[0]}  /> 
              <Module id = "vowel" rating={props.ratings[1]}  /> 
              <Module id = "consonant" rating={props.ratings[2]}  /> 
              <Module id = "number" rating={props.ratings[3]} /> 
              <Module id = "body" rating={props.ratings[4]}  /> 
              <Module id = "grammar" rating={props.ratings[5]}  /> 
          </div>
                  
        </div>
      
      </div>

      
    )
}

export default Main
