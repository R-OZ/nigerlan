import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ 
        next = ()=>{}, 
        previous = ()=>{}, 
        isTest = false, 
        message, 
        totalCount, 
        bodyCount, 
        test1Count, 
        test2Count, 
        answered,
        isToggleCorrect, 
        isToggleWrong 
    }) => {


  return (
    
        !isTest ?
            <div className="lecture-btn-container">
                <button className="btn2" onClick={previous}>
                    <span id="spann">Previous</span>
                </button>
                        
                <Link to={totalCount=== bodyCount? "/": null} exact className="btn" onClick={next}>
                    <span id="spann">{totalCount<bodyCount? "Next Slide": "Finish"}</span>
                </Link> 
            </div>
        : totalCount <= bodyCount?
            <div className="lecture-btn-container">
              <button className="btn2" onClick={previous}>
                <span id="spann">Previous</span>
              </button>
                  
              <button className="btn" onClick={next}>
                  <span id="spann">{totalCount<bodyCount? "Next Slide": "Finish"}</span>
              </button>
            </div>
        :
          <Link to={totalCount>bodyCount+test1Count+test2Count? "/" : null} exact>
          <div className="lecture-btn-container">
              <button className="test-btn" disabled={!(totalCount>bodyCount+test1Count+test2Count) && answered === null ? true : false} onClick={next} >
                <div className="spannn"><span id="spann">{totalCount >bodyCount+test1Count+test2Count? "Finish": "Next"}</span></div>
                <div className={!isToggleCorrect? "test-response": "test-response -correct"}><span id="test-ans">{message}</span></div>
                <div className={!isToggleWrong? "test-response": "test-response -wrong"}><span id="test-ans">{message}</span></div>
              </button>
          </div>
          </Link>
    
    
  )
}

export default Button