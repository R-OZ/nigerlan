import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import { data } from './Data'

import AlphaDisplay from './Displays/AlphaDisplay'
import VowelDisplay from './Displays/VowelDisplay'
import ConsDisplay from './Displays/ConsDisplay'
import NumBodDisplay from './Displays/NumBodDisplay'
import NumExtra from './Displays/NumExtra'

import Progressbar from '../Progressbar'
import EndLecture from './EndLecture'
import EndTest from './EndTest'

import cancel from "../images/cancel.svg"
import buttonsound from "../Sounds/buttonsound.mp3"
import wrong from "../Sounds/wrong.mp3"
import correct from "../Sounds/correct.mp3"
import BoyWave from '../data/BoyWave'
import info from '../images/info.svg'
import pdf1 from "../images/numbers/pdf1.jpg"
import pdf2 from "../images/numbers/pdf2.jpg"
import pdf3 from "../images/numbers/pdf3.jpg"
import pdf4 from "../images/numbers/pdf4.jpg"
import pdf5 from "../images/numbers/pdf5.jpg"



const Lecture = ({id, medalUpdate, progy, setRating}) => {

  const buttonSound = new Audio(buttonsound)
  const correctSound = new Audio(correct)
  const wrongSound = new Audio(wrong)
  
  const bodyCount = data[id].lecBody.length
    
  const  test1Count = data[id].test1.length
  const  test2Count = data[id].test2.length

  const currProgy = Math.round(90/(bodyCount+test1Count+test2Count));

  
  const[prog, setProg] = useState(10)
  const [TotalCount, setTotalCount] = useState(0)
  const[correctCount, setCorrectCount] = useState(0)
  const[message, setMessage] = useState(null)
  const[answered, setAnswered] = useState(null)
  const[isToggleCorrect, setIsToggleCorrect] = useState(false)
  const[isToggleWrong, setIsToggleWrong] = useState(false)
  const[test1ID, setTest1ID] = useState(0)

  const[isCaptionLarge, setIsCaptionLarge] = useState(false)
  const[isPdf, setIsPdf] =useState(false)
  const showPdf=()=>{
    setIsPdf(!isPdf)
  }

  const rater = ()=>{
    //Algorithm to set a star rating after the user has finished the tests
    let total = test1Count+test2Count
    let userScore = correctCount
    const res = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
    const idx = {"alphabet":0,"vowel":1,"consonant":2,"number":3, "body": 4}
    var starScore = (userScore/total) * 5.0
    starScore = starScore.toFixed(2)

    var userStarRate = 0
    var minDiff = 1

    for (let i=0; i<res.length; i++){
      var curr = Math.abs(starScore-res[i])
      if(minDiff> curr){
        minDiff=curr
        userStarRate = res[i]
      }
    }

    if(data[id].isTest){setRating(idx[id], userStarRate)}
    else{setRating(idx[id], 5.0)}
  }

  useEffect(()=>{
    setIsCaptionLarge(!isCaptionLarge)
    setIsCaptionLarge(!isCaptionLarge)}, [])

  const medalScore=()=>{
    let total = test1Count+test2Count
    let b = Math.round(0.4*total);//40% and above -bronze
    let s = Math.round(0.6*total);//60% and above - silver
    let g = Math.round(0.8*total);//80% and above - gold
    let userScore = correctCount
    if (userScore>=b){
        {
          userScore < s ?
              medalUpdate(0,0,1)
          : userScore < g ?
              medalUpdate(0,1,0)
          :  medalUpdate(1,0,0)
        }
    }
    else{medalUpdate(0,0,0)}
    cumProgy()    
  }
  
  const nextInfo = () =>{
    setTotalCount(TotalCount +1)
    buttonSound.play();
    setProg(prog+currProgy)
    if(!data[id].isTest && TotalCount ==bodyCount){
      cumProgy()
      rater()
    }
    if(data[id].isTest && TotalCount>bodyCount){
      setAnswered(null)
      setTest1ID(test1ID+1)
      if(message==="CORRECT!!!"){
        setIsToggleCorrect(!isToggleCorrect)
      }
      else{
        setIsToggleWrong(!isToggleWrong)
      }
      if(TotalCount - (bodyCount  + test1Count)===0){setTest1ID(0)}

      if(TotalCount===bodyCount+test1Count+test2Count){
        medalScore()
        rater()
      }

    }
  }

  const prevInfo =() =>{
    setTotalCount(TotalCount-1)
    setProg(prog-currProgy)
  }

  const cumProgy=()=>{
    progy(17)
  }



  const TestChecker = (arr, ans, x, sound=null) => {
    let answers = ans
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        if (answers.includes(arr[i])) {
            result = arr[i];
            break;
            }}

    const handleAnswer = (userAns) => {
        setAnswered({userAns});
        if (userAns === result) {
            setMessage("CORRECT!!!")
            correctSound.play();
            setIsToggleCorrect(!isToggleCorrect)
            
            setCorrectCount(correctCount +1);

        }
        else {
            setMessage(`INCORRECT, the correct answer is ${result}`);
            wrongSound.play();
            setIsToggleWrong(!isToggleWrong)
        }
    }
    if(x===1 && (id!=='number' && id!=="body")){
    return (
        <div className="test1-container">
            <div className="test1-obj-container">
                <button className="test-obj" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[0])}>{arr[0]}</button>

                <button className="test-obj" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[1])}>{arr[1]}</button>
            </div>

            <div className="test1-obj-container">
                <button className="test-obj" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[2])}>{arr[2]}</button>

                <button className="test-obj" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[3])}>{arr[3]}</button>
            </div>
        </div>
    )}
    if(x===2){
      return (
        <div className="numtest-container">
            <div className="num-quest-container">
              <div className="test2-image" onClick={() => sound.play()}>
                <BoyWave />
                <div className="test2-text bottom-left">Click me to speak</div>
              </div>
              
            </div>

            {id !=="body"?
              <div className="test2-obj">
                  <button className="test-obj2" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[0])}>{arr[0]}</button>
                  <button className="test-obj2" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[1])}>{arr[1]}</button>
                  <button className="test-obj2" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[2])}>{arr[2]}</button>
                  <button className="test-obj2" disabled={answered !== null ? true : false} onClick={() => handleAnswer(arr[3])}>{arr[3]}</button>
              </div>
            :
              <div className="numobj-container -body-test2">
                <button className="numobj" disabled={answered !== null? true: false} onClick={()=>handleAnswer(arr[0])}>{arr[0]}</button>
                
                <button className="numobj" disabled={answered!== null? true: false} onClick={()=>handleAnswer(arr[1])}>{arr[1]}</button>

                <button className="numobj" disabled={answered!== null? true: false} onClick={()=>handleAnswer(arr[2])}>{arr[2]}</button>
              </div>
            }
        </div>
    )
    }
    if((id==="number" || id==="body") && x===1){
      return(
        <div className="numtest-container">
                <div className="num-quest-container">
                    <button className="num-quest" disabled={answered !== null? true: false}>{id==="number"? sound : <img src={sound} className="bod-img -test-img" />}</button>
                </div>        
                    
                <div className="numobj-container">
                    <button className="numobj" disabled={answered !== null? true: false} onClick={()=>handleAnswer(arr[0])}>{arr[0]}</button>
                    
                    <button className="numobj" disabled={answered!== null? true: false} onClick={()=>handleAnswer(arr[1])}>{arr[1]}</button>
        
                    <button className="numobj" disabled={answered!== null? true: false} onClick={()=>handleAnswer(arr[2])}>{arr[2]}</button>
                </div>
            </div>
      )
    }
}

  return (
    <div className="lecture-section">
        <div className="lecture-container">
          
          <div className="lecture-prog-cancel">
            <Link to="/" exact><img id='lecture-cancel' src={cancel} /></Link>
            <Progressbar bgcolor={data[id].progyColor} completed={prog} />
          </div>

          <div className="lecture-content">
            <p id="lecture-text">
              {(bodyCount-TotalCount===2 || bodyCount-TotalCount===1) && id==="number" ?
                data[id].lecTxt3
              : TotalCount>4 && TotalCount<bodyCount && id==="number"?
                data[id].lecTxt2
              :TotalCount<bodyCount?
                data[id].lecTxt
              : TotalCount===bodyCount?
                  null
              : TotalCount <= bodyCount  + test1Count?
                  data[id].test1Text
              : TotalCount <= bodyCount  + test1Count +test2Count?
                  data[id].test2Text
              :
                null
              }
            </p>
            
            <div className="lecture-body">
                {TotalCount===0 &&id==="alphabet"?
                  <div className={id==="alphabet"? "table-alpha-container" : "table-alpha-container -null"}>
                    {data[id].lecBody[TotalCount].map((obj)=>{
                      return <AlphaDisplay capital={obj.capital} small={obj.small} pronounce={obj.pronounce} sound={obj.sound} />
                      })}
                  </div>
                : TotalCount===1 && id==="alphabet"?
                  <div className={id==="alphabet"? "table-alpha-container" : "table-alpha-container -null"}>
                    {data[id].lecBody[TotalCount].map((obj)=>{
                      return <AlphaDisplay capital={obj.capital} small={obj.small} pronounce={obj.pronounce} sound={obj.sound} />
                      })}
                  </div>
                : null }
              
              {TotalCount ===bodyCount?<EndLecture/>:null}
               
              {TotalCount< bodyCount && id==="vowel"?
                <VowelDisplay 
                  capital={data[id].lecBody[TotalCount].capital} 
                  pronounce={data[id].lecBody[TotalCount].pronounce} 
                  image={data[id].lecBody[TotalCount].image} 
                  example={data[id].lecBody[TotalCount].example} 
                  example2={data[id].lecBody[TotalCount].example2} 
                  sound={data[id].lecBody[TotalCount].sound} 
                />
              :TotalCount === bodyCount && id==="vowel" ? 
                  null
              : TotalCount <=bodyCount +test1Count && id==="vowel"?
                  TestChecker(data[id].test1[test1ID].question, data[id].answers, 1)
              : TotalCount <=bodyCount +test1Count+test2Count && id==="vowel"?
                  TestChecker(data[id].test2[test1ID].question,["Ẹ","O","U"],2, data[id].test2[test1ID].sound )
              : null
              }

              {TotalCount< bodyCount && id==="consonant"?
                <ConsDisplay 
                  capital={data[id].lecBody[TotalCount].capital} 
                  pronounce={data[id].lecBody[TotalCount].pronounce} 
                  image={data[id].lecBody[TotalCount].image}
                  capital2={data[id].lecBody[TotalCount].capital2}
                  pronounce2={data[id].lecBody[TotalCount].pronounce2}
                  image2={data[id].lecBody[TotalCount].image2}
                  example={data[id].lecBody[TotalCount].example} 
                  example2={data[id].lecBody[TotalCount].example2} 
                  examplem={data[id].lecBody[TotalCount].examplem}
                  examplem2={data[id].lecBody[TotalCount].examplem2}
                  sound1={data[id].lecBody[TotalCount].sound1}
                  sound2={data[id].lecBody[TotalCount].sound2} 
                />
              :TotalCount === bodyCount && id==="consonant" ? 
                  null
              : TotalCount <=bodyCount +test1Count && id==="consonant"?
                  TestChecker(data[id].test1[test1ID].question, data[id].answers, 1)
              : TotalCount <=bodyCount +test1Count+test2Count && id==="consonant"?
                  TestChecker(data[id].test2[test1ID].question,["P","W","J","K","R","T"],2, data[id].test2[test1ID].sound )
              : null
              }

              {TotalCount< bodyCount && id==="number"?
                <NumBodDisplay
                  num1 = {data[id].lecBody[TotalCount].num1}
                  num2 = {data[id].lecBody[TotalCount].num2}
                  numname1 = {data[id].lecBody[TotalCount].numname1}
                  numname2 = {data[id].lecBody[TotalCount].numname2}
                  numtext1 = {data[id].lecBody[TotalCount].numtext1 }
                  numtext2 = {data[id].lecBody[TotalCount].numtext2}
                  sound1 = {data[id].lecBody[TotalCount].sound1}
                  sound2 = {data[id].lecBody[TotalCount].sound2}
                />
              :TotalCount === bodyCount && id==="number" ? 
                  null
              : TotalCount <=bodyCount +test1Count && id==="number"?
                  TestChecker(data[id].test1[test1ID].question, data[id].answers, 1, data[id].test1[test1ID].display)
              : TotalCount <=bodyCount +test1Count+test2Count && id==="number"?
                  TestChecker(data[id].test2[test1ID].question, data[id].answers, 2, data[id].test2[test1ID].sound )
              : null
              }

              {bodyCount-TotalCount===2 && id==="number" ? 
                <NumExtra type="addition"/>
              :bodyCount-TotalCount===1 && id==="number" ?
                <NumExtra type="subtraction" />
              :null
              }


              {TotalCount< bodyCount && id==="body"?
                <NumBodDisplay
                  numtext1 = {data[id].lecBody[TotalCount].yor1}
                  num1 = {data[id].lecBody[TotalCount].eng1}
                  numtext2 = {data[id].lecBody[TotalCount].yor2}
                  num2 = {data[id].lecBody[TotalCount].eng2}
                  sound1 = {data[id].lecBody[TotalCount].sound1}
                  sound2 = {data[id].lecBody[TotalCount].sound2}
                  image1 = {data[id].lecBody[TotalCount].image1}
                  image2 = {data[id].lecBody[TotalCount].image2}
                />
              :TotalCount === bodyCount && id==="body" ? 
                  null
              : TotalCount <=bodyCount +test1Count && id==="body"?
                  TestChecker(data[id].test1[test1ID].question, data[id].answers, 1, data[id].test1[test1ID].display)
              : TotalCount <=bodyCount +test1Count+test2Count && id==="body"?
                  TestChecker(data[id].test2[test1ID].question, data[id].answers, 2, data[id].test2[test1ID].sound )
              : null
              }

              {TotalCount> bodyCount+test1Count+test2Count?
                <EndTest count={correctCount} total={test1Count+test2Count} />
              : null}
              

            </div>



            {TotalCount < bodyCount?
              <div className= {!isCaptionLarge? "lecture-caption -scale-caption": "lecture-caption"}>
                {TotalCount < bodyCount && id!=="number"?
                  <span>*Click on the icon or image to hear pronunciation* {id=="alphabet"? <span id="spanner"><br />*Scroll down to see more*</span>: null}</span>
                : bodyCount -TotalCount>2 && id === "number"?
                  <span>*Click on the icon or image to hear pronunciation*</span>
                : bodyCount -TotalCount ===2 || bodyCount-TotalCount===1 && id === "number"?
                  <div className='num-footer'>
                  <img onClick={showPdf} src={info} alt="" id="num-info" />
                  <span id="num-footer-txt">*Click on info icon for further information*</span>
                  </div>
                : null}
              </div>
            :TotalCount === bodyCount && data[id].isTest ?
            <div className= {!isCaptionLarge? "lecture-caption -scale-caption": "lecture-caption"}>
              <span>*Next will be an assessment*</span>
            </div>
            : null }
          
          </div>
          
          <div  className={!isPdf? "new-num":  "new-num display"}>
              <img onClick={showPdf} className="num-cancel" src={cancel} />
              <div className="num-images">
                  <img src={pdf1} className="num-image" />
                  <img src={pdf2} className="num-image" />
                  <img src={pdf3} className="num-image" />
                  <img src={pdf4} className="num-image" />
                  <img src={pdf5} className="num-image" />
              </div>
          </div>




          {!data[id].isTest?
            <div className="lecture-btn-container">
                <button className="btn2" onClick={prevInfo}>
                  <span id="spann">Previous</span>
                </button>
                      
                <Link to={TotalCount=== bodyCount? "/": null} exact className="btn" onClick={nextInfo}>
                    <span id="spann">{TotalCount<bodyCount? "Next Slide": "Finish"}</span>
                </Link>
            </div>
          : TotalCount <= bodyCount?
            <div className="lecture-btn-container">
              <button className="btn2" onClick={prevInfo}>
                <span id="spann">Previous</span>
              </button>
                  
              <button className="btn" onClick={nextInfo}>
                  <span id="spann">{TotalCount<bodyCount? "Next Slide": "Finish"}</span>
              </button>
            </div>
          :
          <Link to={TotalCount> bodyCount+test1Count+test2Count? "/" : null} exact>
          <div className="lecture-btn-container">
              <button className="test-btn" disabled={answered === null ? true : false} onClick={nextInfo} >
                <div className="spannn"><span id="spann">{TotalCount >bodyCount+test1Count+test2Count? "Finish": "Next"}</span></div>
                <div className={!isToggleCorrect? "test-response": "test-response -correct"}><span id="test-ans">{message}</span></div>
                <div className={!isToggleWrong? "test-response": "test-response -wrong"}><span id="test-ans">{message}</span></div>
              </button>
          </div>
          </Link>
          }
          
            
        </div>

    </div>
  )
}

export default Lecture