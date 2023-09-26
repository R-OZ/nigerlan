import logout from '../images/logout.svg'
import settings from '../images/settings.svg'
import goldmedal from '../images/gold-medal.svg'
import silvermedal from '../images/silver-medal.svg'
import bronzemedal from '../images/bronze-medal.svg'
import feedback from '../images/feedback.svg'
import cancel from '../images/cancel.svg'
import girl from "../images/girl.svg"
import girl2 from "../images/girl2.svg"
import girl3 from "../images/girl3.svg"
import boy from "../images/boy.svg"
import boy2 from "../images/boy2.svg"
import boy3 from "../images/boy3.svg"
import Progressbar from '../Progressbar'
import { Link } from 'react-router-dom';
import React from 'react'
import { ACTIONS, useGlobalState } from '../../Context'
import './profile.css'



const Profile = () => {
    const { 
        state:{ 
            isNavOpen,
            showSettings,
            profile:{userName, avatar, progress}, 
            medal:{goldCount, silverCount, bronzeCount} 
        }, 
        dispatch 
    } = useGlobalState();


    const toggleSettings =()=>{
        dispatch({type: ACTIONS.TOGGLE_SETTINGS});
    }

    const AvatarComponent = ({id, imgSrc})=>{
        const isSelected = avatar === imgSrc;
        const handleAvatarClick = () => {
            dispatch({ type: ACTIONS.SET_AVATAR, payload: imgSrc });
        }
        return(
            <label htmlFor={`avatar-id${id}`} className="avatar-label" >
                <input type="radio" name="avatar-id" id={`avatar-id${id}`} defaultChecked={isSelected} />
                <img className="avatar-img" alt={`avatar-${id}`} onClick={handleAvatarClick} src={imgSrc} />
            </label>
        )
    }
    

    return (
        <React.Fragment>
            <div className={!isNavOpen? 'profile-container': 'profile-container -move'} >
                <div className="profile-header">
                    <img alt="" id='profile-img' src={avatar} />
                    <p id="profile-name">{userName}</p>
                </div>

                <div className="profile-progress">
                    <p className="profile-text">Cumulative Progress</p>
                    <Progressbar bgcolor="#6a1b9a" completed={progress} />
                </div>

                <div className="profile-hr"></div>

                <div className="profile-medals">
                    <div className="profile-medal-container1">
                        <img alt="" className='medal-img' src={goldmedal} />
                        {goldCount}
                    </div>
                    <div className="profile-medal-container2">
                        <div ><img alt="" className='medal-img' src={silvermedal} />{silverCount}</div>
                        <div ><img alt="" className='medal-img' src={bronzemedal} />{bronzeCount}</div>
                    </div>
                </div>

                <div className="profile-hr second"></div>

                <div className="profile-buttons">
                    <Link className='profile-button' to="/Feedback">
                        <img alt="" className='profile-button-img' src={feedback} />
                        <p className='profile-button-txt'>Feedback</p>
                    </Link>

                    <div className= 'profile-button' onClick={toggleSettings}>
                        <img alt="" className='profile-button-img' src={settings} />
                        <p className='profile-button-txt'>Settings</p>
                    </div>

                    <div className='profile-button'>
                        <img alt="" className='profile-button-img' src={logout} />
                        <p className='profile-button-txt'>Logout</p>
                    </div>

                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/reginald-ojeba/' className="profile-footer">
                        <span id="profile-footer-txt">
                            DEVELOPED BY:&nbsp;
                        </span> 
                         Reginald Ojeba
                    </a>

                </div>
            
            </div>


            <div  className={showSettings? "settings-container show": "settings-container"}>
                <div className="settings-container2">
                    <img alt="" id="cancel-settings" onClick={toggleSettings} src={cancel} />
                    <div className="settings-form">
                        <div className="settings-header">Settings</div>
                        <div className="settings-body">
                            
                            <div className="settings-body-head">Enter username</div>
                            <input 
                                type="text" name="username" 
                                maxLength='14'  
                                onChange={e => dispatch({type: ACTIONS.SET_USERNAME, payload: e.target.value})} 
                                placeholder={userName} className="settings-username" 
                            />
                            <div className="settings-body-head">Select your avatar</div>
                            <div className="avatar-container">
                                <div className="avatar-contain">
                                    <AvatarComponent id={1} imgSrc={boy} />
                                    <AvatarComponent id={2} imgSrc={boy2} />
                                    <AvatarComponent id={3} imgSrc={boy3} />
                                </div>
                                <div className="avatar-contain">
                                    <AvatarComponent id={4} imgSrc={girl} />
                                    <AvatarComponent id={5} imgSrc={girl2} />
                                    <AvatarComponent id={6} imgSrc={girl3} />
                                </div>
                            </div>

                            <div className="settings-submit" onClick={toggleSettings}>Save Changes</div>

                            <div className="settings-footer">
                                Pssssst!...don't forget to give us a feedback.<br />
                                Use the &nbsp; <img alt="" id="footer-image" src={feedback} />&nbsp;feedback button to fill in our questionnaire.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;
