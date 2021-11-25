import React from 'react'
import { useState } from 'react'

const VowelFunc = ({a, b, c, d}) => {
    const[message, setMessage] = useState("");
    const [answered,setAnswered] = useState("");
    
    const handleAnswer = (ans, correct_ans) =>{
        setAnswered(ans);
        if(ans == "A"| ans =="E"| ans =="Ẹ"| ans =="I"| ans =="O"| ans =="Ọ"| ans =="U"){
          setMessage('Correct!');
        }
        else{
          setMessage('InCorrect! the correct answer is' + correct_ans);
        }
        document.querySelector('.message').classList.toggle('message-active');
      }
    return(
        <div className="vtest-container">
            <div className="vobj-container">
                <div className="vobj" onClick={()=>handleAnswer(a, "Boy")} >{a}</div>
                    
                <div className="vobj" onClick={()=>handleAnswer(b, "Gil")}>{b}</div>
            </div>
                
            <div className="vobj-container">
                <div className="vobj" onClick={()=>handleAnswer(c, "Fish")}>{c}</div>
    
                <div className="vobj" onClick={()=>handleAnswer(d, "Egg")}>{d}</div>
            </div>
        </div>
        )
}

export default VowelFunc
