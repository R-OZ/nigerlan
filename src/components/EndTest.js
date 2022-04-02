import React from 'react'
import Fireworks from './data/Fireworks'
import gold from "./images/gold-medal.svg"
import silver from "./images/silver-medal.svg"
import bronze from "./images/bronze-medal.svg"
import SadAnim from './data/SadAnim'


export const EndTest = (count, b,s,g, total) => {
    if (count > b) {
        return (
            <div className="endlec-container2">
                <div className="animation-end">
                    <div className="fireworks2"><Fireworks /></div>
                    <div className="congrats-container2">
                        <div className="congrats2">CONGRATULATIONS</div>
                        <div className="congrats-text2">You've earned a {count < s ? "Bronze" : count < g ? "Silver" : "Gold"} Medal</div>
                    </div>
                </div>
                <img className="medal-score" src={count < s ? bronze : count < g ? silver : gold} />
                <div className="score-text">You scored: {count} out of {total}</div>
            </div>
            )
        }
    else
        return(
            <div className="endlec-container2">
                <div className="animation-end">
                    <div className="congrats-container2-sad">
                        <div className="congrats2">NEVER GIVE UP!</div>
                        <div className="congrats-text2">You've earned no Medal</div>
                    </div>
                </div>
                <SadAnim />
                <div className="score-text-sad">You scored: {count} out of {total}</div>
            </div>)
    }

