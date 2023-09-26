import Profile from './Profile/Profile'
import Nav from './Nav'
import React from 'react'
import { useGlobalState, ACTIONS } from '../Context'
import Module from './Module/Module'


const Main = () => {
  const {
    state:{ 
      isNavOpen, 
      starRating:{alphabet, vowel, consonant, number, body, grammar} 
    }, 
    dispatch
  } = useGlobalState();
  
  return (
    <div className="home">
      
      <div onClick={()=>dispatch({type: ACTIONS.TOGGLE_NAV})}  className={isNavOpen?"mobile-nav-shadow":"mobile-nav-shadow -null" }></div>
      
      <Profile />

      <div className="menu-container">
        <Nav />
        
        <div className="modules-section">
            <Module id = "alphabet" rating={alphabet}  /> 
            <Module id = "vowel" rating={vowel}  /> 
            <Module id = "consonant" rating={consonant}  /> 
            <Module id = "number" rating={number} /> 
            <Module id = "body" rating={body}  /> 
            <Module id = "grammar" rating={grammar}  /> 
        </div>
                
      </div>
    
    </div>

    
  )
}

export default Main
