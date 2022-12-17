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

import './profile.css'



const Profile = (props) => {

    const changeImage = (newImg)=>{
        props.imageChange(newImg)
    }
    

    return (
        <div>
            <div className={!props.isToggle? 'profile-container': 'profile-container -move'} >
                <div className="profile-header">
                    <img alt="" id='profile-img' src={props.image} />
                    <p id="profile-name">{props.username}</p>
                </div>

                <div className="profile-progress">
                    <p className="profile-text">Cumulative Progress</p>
                    <Progressbar bgcolor="#6a1b9a" completed={props.progy} />
                </div>

                <div className="profile-hr"></div>

                <div className="profile-medals">
                    <div className="profile-medal-container1">
                        <img alt="" className='medal-img' src={goldmedal} />
                        {props.num}
                    </div>
                    <div className="profile-medal-container2">
                        <div ><img alt="" className='medal-img' src={silvermedal} />{props.num2}</div>
                        <div ><img alt="" className='medal-img' src={bronzemedal} />{props.num3}</div>
                    </div>
                </div>

                <div className="profile-hr second"></div>

                <div className="profile-buttons">
                    <Link className='profile-button' to="/Feedback">
                        <img alt="" className='profile-button-img' src={feedback} />
                        <p className='profile-button-txt'>Feedback</p>
                    </Link>

                    <div className= 'profile-button' onClick={props.handleClick}>
                        <img alt="" className='profile-button-img' src={settings} />
                        <p className='profile-button-txt'>Settings</p>
                    </div>

                    <div className='profile-button'>
                        <img alt="" className='profile-button-img' src={logout} />
                        <p className='profile-button-txt'>Logout</p>
                    </div>

                    <a target="_blank" href='https://www.linkedin.com/in/reginald-ojeba/' className="profile-footer">
                        <span id="profile-footer-txt">
                            DEVELOPED BY:&nbsp;
                        </span> 
                         Reginald Ojeba
                    </a>

                </div>

                    
            
            </div>


            <div  className={!props.showSet? "settings-container": "settings-container show"}>
                <div className="settings-container2">
                    <img alt="" id="cancel-settings" onClick={props.handleClick} src={cancel} />
                    <div className="settings-form">
                        <div className="settings-header">Settings</div>
                        <div className="settings-body">
                            
                            <div className="settings-body-head">Enter username</div>
                            <input type="text" name="username" maxLength='14'  onChange={e => props.updateUsername(e.target.value)} placeholder={props.username} className="settings-username" />
                            <div className="settings-body-head">Select your avatar</div>
                            <div className="avatar-container">
                                <div className="avatar-contain">
                                    <label htmlFor="avatar-id1" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id1" defaultChecked/>
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(boy)} src={boy} />
                                    </label>
                                    <label htmlFor="avatar-id2" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id2" />
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(boy2)} src={boy2} />
                                    </label>
                                    <label htmlFor="avatar-id3" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id3"/>
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(boy3)} src={boy3} />                                    </label>
                                </div>
                                <div className="avatar-contain">
                                    <label htmlFor="avatar-id4" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id4" />
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(girl)} src={girl} />
                                    </label>
                                    <label htmlFor="avatar-id5" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id5" />
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(girl2)} src={girl2} />
                                    </label>
                                    <label htmlFor="avatar-id6" className="avatar-label">
                                        <input type="radio" name="avatar-id" id="avatar-id6" />
                                        <img className="avatar-img" alt="" onClick={()=>changeImage(girl3)} src={girl3} />
                                    </label>
                                </div>
                            </div>

                            <div className="settings-submit" onClick={props.handleClick}>Save Changes</div>

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

export default Profile;

