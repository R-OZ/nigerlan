import React from 'react'
import Fireworks from '../data/Fireworks'
import gold from "../images/gold-medal.svg"
import silver from "../images/silver-medal.svg"
import bronze from "../images/bronze-medal.svg"
import SadAnim from '../data/SadAnim'


const EndTest = ({count, total}) => {
    let b = Math.round(0.4*total);
    let s = Math.round(0.6*total);
    let g = Math.round(0.8*total)
    if (count >= b) {
        return (
            <div className="endtest-container">
                <div className="congrats-container2">
                    <div className="endtest-txt-head">CONGRATULATIONS</div>
                    <div className="endtest-txt">You've earned a {count < s ? "Bronze" : count < g ? "Silver" : "Gold"} Medal</div>
                    <div className="fireworks"><Fireworks /></div>         
                </div>

                <img alt="" className="medal-score" src={count < s ? bronze : count < g ? silver : gold} />
                <div className="score-text">You scored: {count} out of {total}</div>
            </div>
            )
        }
    else
        return(
            <div className="endtest-container">
                <div className="endtest-text-container-sad">
                    <div className="endtest-txt-head">NEVER GIVE UP!</div>
                    <p className="endtest-txt">You've earned no Medal</p>
                </div>
                
                <div className="sad-anim"><SadAnim /></div>

                <div className="score-text-sad">You scored: {count} out of {total}</div>
            </div>
           )
    }

export default EndTest