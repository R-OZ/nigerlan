import React from "react";
import PlaySound from "./PlaySound";
import { useGlobalState, ACTIONS } from "../Context";

const Nav = () => {
    const {state:{isNavOpen, profile:{avatar}}, dispatch} = useGlobalState();
    
    return (
        <nav className={!isNavOpen? 'nav-bar': 'nav-bar -no-radius'}>
            <h2 className="nav-text">
                Welcome to NigerLan
            </h2>

            <img onClick={()=> dispatch({type: ACTIONS.TOGGLE_NAV})} src={avatar} alt="" className={!isNavOpen?"mobile-profile-nav":"mobile-profile-nav -scale" } />

            <div className="mobile-logo-container">
                <p className="nav-text">NigerLan</p>
            </div>

 
            <div className="nav-icons">
                <PlaySound />
                <a href="https://docs.google.com/presentation/d/1BehOHWUcica_NkXcn6U8wK0P20zTRvXZ/edit?usp=share_link&ouid=110134511589767215603&rtpof=true&sd=true" rel="noopener noreferrer" target="_blank"className="about">i</a>
            </div>
        </nav>
    )
}

export default Nav
