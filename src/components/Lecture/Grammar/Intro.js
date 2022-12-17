import React from 'react'
import SchoolBus from '../../data/SchoolBus'

const Intro =()=>{
    return(
        <div className="gintro-container">
            <p className="gintro-head">This lecture trip you are on will cover:</p> 
            
            <div className="gintro-container2">
                <div className="gintro-stuff">
                    <p id="gintro-txt">- Adjectives (Ajẹtífù)</p>
                    <p id="gintro-txt">- Adverbs (Èpón)</p>
                    <p id="gintro-txt">- Nouns (Orúkọ)</p>
                    <p id="gintro-txt">- Pronouns (Àrọpò Orúkọ)</p>
                    <p id="gintro-txt">- Verbs (Òrò ìse) in Yoruba.</p> 
                </div>
                
                <div className="school"><SchoolBus /></div>
            </div>
        </div>
    )
}

export default Intro