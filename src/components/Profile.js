import logout from './images/logout.svg'
import settings from './images/settings.svg'
import goldmedal from './images/gold-medal.svg'
import silvermedal from './images/silver-medal.svg'
import bronzemedal from './images/bronze-medal.svg'
import feedback from './images/feedback.svg'
import cancel from "./images/cancel.svg"
import girl from "./images/girl.svg"
import girl2 from "./images/girl2.svg"
import girl3 from "./images/girl3.svg"
import boy from "./images/boy.svg"
import boy2 from "./images/boy2.svg"
import boy3 from "./images/boy3.svg"
import Progressbar from './Progressbar'
import { NavLink } from 'react-router-dom';
import { Component, useState } from 'react'
// import { useEffect } from 'react'
import React from 'react'




class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.messageRef = React.createRef();
    }

    state = {
        bronze: 0,
        silver: 0,
        gold: 0,
        progy: 1,
        num:0,
    }

    showSettings = () => {
        const message = this.messageRef.current;
        message.classList.toggle('show')
    }
    onChange = (tuff) => {
        let image = document.getElementById('image1');
        image.src = tuff;
    }
    changeImage = (tuffer)=>{
        this.props.imageChange(tuffer)
    }

    // componentWillMount = () => {
    //     this.setState({
    //         bronze: Number(window.localStorage.getItem("Bronze")),
    //         silver: Number(window.localStorage.getItem("Silver")),
    //         gold: Number(window.localStorage.getItem("Gold")),
    //         progy: Number(window.localStorage.getItem("Progress")),
    //     })
        // if(Number(window.localStorage.getItem("Gold"))<4){
        //     this.setState({num: Number(window.localStorage.getItem("Gold"))-2 })
        // }
        



    render() {
        return (
            <div>
                <div className='profile-container' >
                    <div className="header">
                        <img alt="" id='image1' src={this.props.image} />
                        <h2>Daniel</h2>
                    </div>
                    <div className='profile-stuff'>
                        <div className="progress">
                            <h3>Cummulative progress</h3>
                            <Progressbar bgcolor="#6a1b9a" completed={this.props.progy} />
                        </div>

                        <div className="horizontal"></div>

                        <div className="medals">
                            <div className="gold-medal"><img alt="" className='medal-img' src={goldmedal} />{this.props.num}</div>
                            <div className="silver-bronze">
                                <div className="silver-medal"><img alt="" className='medal-img' src={silvermedal} />{this.props.num2}</div>
                                <div className="bronze-medal"><img alt="" className='medal-img' src={bronzemedal} />{this.props.num3}</div>
                            </div>
                        </div>

                        <div className="horizontal"></div>

                        <NavLink className='profile-handler' activeclassName='profile-handler' to="/Feedback">
                            <img alt="" id='feedback' src={feedback} />
                            <h3 className='wordP'>Feedback</h3>
                        </NavLink>

                        <div className='profile-handler' onClick={() => this.showSettings()}>
                            <img alt="" id='settings' src={settings} />
                            <h3 className='wordP'>Settings</h3>
                        </div>

                        <div className='profile-handler'>
                            <img alt="" id='logout' src={logout} />
                            <h3 className='wordP'>Logout</h3>
                        </div>
                    </div>

                </div>

                <div ref={this.messageRef} className="settings-container">
                    <div className="settings-container2">
                        <img alt="" id="cancel-settings" onClick={() => this.showSettings()} src={cancel} />
                        <div className="settings-form">
                            <div className="settings-header">Settings</div>
                            <div className="settings-body">
                                <div className="settings-body-head">Select your avatar</div>
                                <div className="avatar-container">
                                    <div className="avatar-contain">
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(boy)} src={boy} />
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(boy2)} src={boy2} />
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(boy3)} src={boy3} />
                                    </div>
                                    <div className="avatar-contain">
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(girl)} src={girl} />
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(girl2)} src={girl2} />
                                        <img className="avatar-img" alt="" onClick={() => this.changeImage(girl3)} src={girl3} />
                                    </div>
                                </div>
                                <div className="settings-footer">
                                    Pssssst!...don't forget to give us a feedback.<br />Use the &nbsp; <img alt="" id="footer-image" src={feedback} />&nbsp;feedback button to fill in our questionnaire.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile
