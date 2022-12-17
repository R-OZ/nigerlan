import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import buttonsound from "../../Sounds/buttonsound.mp3"
import Progressbar from '../../Progressbar'
import EndLecture from '../EndLecture'
import cancel from "../../images/cancel.svg"
import Intro from './Intro'
import AdjectiveIntro from './AdjectiveIntro'
import AdjectiveColor from './AdjectiveColor'
import AdjectiveWeather from './AdjectiveWeather'
import AdjectiveSize from './AdjectiveSize'
import Adverbs from './Adverbs'
import Adverbs2 from './Adverbs2'
import Nouns from './Nouns'
import Pronouns from './Pronouns'
import Verbs from './Verbs'

const GrammarLec = ({progy, setRating}) => {
  const buttonSound = new Audio(buttonsound)
  const[prog, setProg] = useState(10)
  const[isCaptionLarge, setIsCaptionLarge] = useState(false)
  const[counter, setCounter] = useState(0)

  const cumProgy=()=>{progy(17)}

  useEffect(()=>{
    setIsCaptionLarge(!isCaptionLarge)
    setIsCaptionLarge(!isCaptionLarge)}, [])
  
  const nextInfo = () =>{
    buttonSound.play();
    setProg(prog+9)
    setCounter(counter+1)
    if( counter ===10){
      cumProgy()
      setRating(5,5.0)

      }
  }

  const prevInfo =() =>{
    if(counter !==0){
      setCounter(counter-1)
      setProg(prog-9)
    }
    
  }

  return (
    <div className="lecture-section">
        <div className="lecture-container">
          
          <div className="lecture-prog-cancel">
            <Link to="/" exact><img alt="" id='lecture-cancel' src={cancel} /></Link>
            <Progressbar bgcolor="#ff0099" completed={prog} />
          </div>

          <div className="grammar-content">
            
            {counter ===0?
              <Intro />
            : counter ===1?
              <AdjectiveIntro />
            : counter ===2?
              <AdjectiveColor />
            : counter===3?
              <AdjectiveWeather />
            : counter===4?
              <AdjectiveSize />
            : counter===5?
              <Adverbs />
            : counter ===6?
              <Adverbs2 />
            : counter ===7?
              <Nouns />
            : counter ===8?
              <Pronouns />
            :counter ===9?
              <Verbs />
            :
              <EndLecture />
              }

          </div>
          
          
          <div className="lecture-btn-container">
              <button className="btn2" onClick={prevInfo}>
                <span id="spann">Previous</span>
              </button>
                    
              <Link to={counter===10? "/": null} exact className="btn" onClick={nextInfo}>
                  <span id="spann">{counter!==10? "Next Slide": "Finish"}</span>
              </Link>
          </div>
          
        </div>
  
      </div>
    )
}

export default GrammarLec