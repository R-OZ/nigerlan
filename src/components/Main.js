import Profile from './Profile'
import Nav from './Nav'
import Alphabets from './Alphabets'
import Vowels from './Vowels'
import Consonants from './Consonants'
import Numbers from './Numbers'
import Body from './Body'
import Grammar from './Grammar'
import React from 'react'


const Main = (props) => {
    return (
          <div className="container">
          <Profile num={props.newGold} num2={props.newSilver} num3={props.newBronze} image={props.image} imageChange={props.imageChange} progy={props.progy}/>
          <div className="container2">
            <div className="container2-sub">
              <Nav music={props.music}/>
              <div className="container3">
                <div className="container4">
                <Alphabets /><Vowels /> <Consonants />
                </div>
                <div className="container5">
                <Numbers /> <Body /> <Grammar /> 
            </div>
            </div>
          </div>
        </div>
        </div>
      
    )
}

export default Main
