import React from "react";
import PlaySound from "./PlaySound";


const Nav = (props) => {

    
    return (
        <nav className={!props.isToggle? 'nav-bar': 'nav-bar -no-radius'}>
            <h2 className="nav-text">
                Welcome to NigerLan
            </h2>

            <img onClick={props.toggle} src={props.image} alt="" className={!props.isToggle?"mobile-profile-nav":"mobile-profile-nav -scale" } />

            <div className="mobile-logo-container">
                <p className="nav-text">NigerLan</p>
            </div>

 
            <div className="nav-icons">
                <PlaySound music={props.music} musicImage={props.musicImage} />
                <a href="https://docs.google.com/presentation/d/1BehOHWUcica_NkXcn6U8wK0P20zTRvXZ/edit?usp=share_link&ouid=110134511589767215603&rtpof=true&sd=true" rel="noopener noreferrer" target="_blank"className="about">i</a>
            </div>
        </nav>
    )
}

export default Nav
