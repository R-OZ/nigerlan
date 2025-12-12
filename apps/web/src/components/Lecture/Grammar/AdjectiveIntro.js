import React from 'react'
import cap from "../../images/cap.svg"
const AdjectiveIntro=()=>{
    return(
        <div className="gadject-container">
            <p className="gadject-head">What is an Adjective (Ajẹtífù)?</p>
            
            <p className="gadject-body">
                An Adjective simply is a word that gives an attribute to a noun.
                Adjectives are words that tell us the qualities or details about a noun. <br/>
                For example;
            </p>
            <div className="gadject-example1">
                <div className="gadject-textex">
                    <p className="gadject-eng">a BLACK cap</p>
                    <p className="gadject-eng">fìlà DÚDÚ</p>
                </div>
                <img alt="" className="cap" src={cap} />
            </div>
            <p className="gadject-footer">
                The Adjective is BLACK (DÚDÚ), it gives the noun cap (fìlà) a quality of color
            </p>
            <p className="gadject-footer">
                On our trip we will be learning Adjective of color, weather, shape and sizes.
            </p>
            
        </div>
    )
}

export default AdjectiveIntro