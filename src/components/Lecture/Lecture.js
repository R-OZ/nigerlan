import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Button from './Button/Button'
import Loading from '../Loading/Loading'

import numbersFullList from '../data/numbers.pdf'

import Progressbar from '../Progressbar'

import cancel from "../images/cancel.svg"
import buttonsound from "../Sounds/buttonsound.mp3"
import wrong from "../Sounds/wrong.mp3"
import correct from "../Sounds/correct.mp3"
import BoyWave from '../data/BoyWave'
import Body from './Body'
import Footer from './Footer'

import { useGlobalState, ACTIONS } from '../../Context'



const Lecture = ({id}) => {

  const {dispatch} = useGlobalState();

  const buttonSound = new Audio(buttonsound)
  const correctSound = new Audio(correct)
  const wrongSound = new Audio(wrong)

  const [base, setBase] = useState({})

  const [bodyCount, setBodyCount] = useState()
  const [test1Count, setTest1Count] = useState()
  const [test2Count, setTest2Count] = useState()
  
  const [prog, setProg] = useState(10)
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [TotalCount, setTotalCount] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [message, setMessage] = useState(null)
  const [answered, setAnswered] = useState(null)
  const [isToggleCorrect, setIsToggleCorrect] = useState(false)
  const [isToggleWrong, setIsToggleWrong] = useState(false)
  const [test1ID, setTest1ID] = useState(0)
  const [isCaptionLarge, setIsCaptionLarge] = useState(false)
  const [isPdf, setIsPdf] =useState(false)
  

  useEffect(()=>{
    setIsLoading(true);
    fetch(`https://nigerlan-backend.onrender.com/lecture/${id}`)
    .then((res)=> res.json())
    .then((resData)=>{
      console.log(resData);
      setBase(resData);
      setBodyCount(resData.lecBody.length);
      setTest1Count(resData.test1.length);
      setTest2Count(resData.test2.length)
    })
    .catch((err)=>{
      setErrorMessage(err.message)
      console.error(err.message)
    })
    .finally(()=> setIsLoading(false))
  },[])


  const currProgy = Math.round(90/(bodyCount+test1Count+test2Count));


  const togglePDF=()=>{
    setIsPdf(!isPdf)
  }

  const PdfNumbers = ()=>{
    return (
      <div  className={!isPdf? "new-num":  "new-num display"}>
          <img onClick={togglePDF} alt='cancel' className="num-cancel" src={cancel} />
          <div className="num-images">
              <iframe
                src={numbersFullList}
                width="100%"
                title="PDF Viewer"
                className='myIframe'
              ></iframe>
          </div>
      </div>
    )
  }

  const starRating =()=>{
    let starScore = ( (correctCount/(test1Count+test2Count) ) * 5.0).toFixed(1)
    const roundedStarScore = Math.round(starScore * 2) / 2;
    dispatch({
      type: ACTIONS.STAR_RATING, 
      payload: {
        starRating: isNaN(roundedStarScore)? 5.0:roundedStarScore, 
        id: id
      }
    })
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
      userScore < s ?
          dispatch({type: ACTIONS.UPDATE_BRONZE})
      : userScore < g ?
          dispatch({type: ACTIONS.UPDATE_SILVER})
      :  dispatch({type: ACTIONS.UPDATE_GOLD})
    }
    dispatch({type: ACTIONS.SET_PROGRESS, payload:{id: id}})    
  }
  
  const nextInfo = () =>{
    setTotalCount(TotalCount +1)
    buttonSound.play();
    setProg(prog+currProgy)
    if(!base.isTest && TotalCount ===bodyCount){
      dispatch({type: ACTIONS.SET_PROGRESS, payload:{id: id}})    
      starRating()
    }
    if(base.isTest && TotalCount>bodyCount){
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
        starRating()
      }

    }
  }

  const prevInfo =() =>{
    setTotalCount(TotalCount-1)
    setProg(prog-currProgy)
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
              <button className="num-quest" disabled={answered !== null? true: false}>{id==="number"? sound : <img src={sound} alt='' className="bod-img -test-img" />}</button>
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
      {
        isLoading ?
          <Loading />
        :
          errorMessage ?
            <h1 style={{color: 'red', margin:'auto'}}>{errorMessage}</h1>
          :
            <div className="lecture-container">
              
              <div className="lecture-prog-cancel">
                <Link to="/" exact><img id='lecture-cancel' alt='' src={cancel} /></Link>
                <Progressbar bgcolor={base.progyColor} completed={prog} />
              </div>

              <div className="lecture-content">
                <Header
                  bodyCount={bodyCount}
                  totalCount={TotalCount}
                  lectureID={id}
                  data={base}
                  test1Count={test1Count}
                  test2Count={test2Count}
                />

                <Body
                  data={base}
                  lectureID={id}
                  totalCount={TotalCount}
                  bodyCount={bodyCount}
                  test1Count={test1Count}
                  test2Count={test2Count}
                  test1ID={test1ID} 
                  correctCount={correctCount}
                  TestChecker={TestChecker}
                />

                <Footer 
                  totalCount={TotalCount}
                  bodyCount={bodyCount}
                  isCaptionLarge={isCaptionLarge}
                  lectureID={id}
                  isTest={base.isTest}
                  togglePDF={togglePDF}
                />
              </div>
              
              <PdfNumbers />
              
              <Button 
                next = {nextInfo}
                previous = {prevInfo}
                isTest = {base.isTest}
                message = {message}
                totalCount = {TotalCount}
                bodyCount = {bodyCount}
                test1Count = {test1Count}
                test2Count = {test2Count}
                answered = {answered}
                isToggleCorrect = {isToggleCorrect}
                isToggleWrong = {isToggleWrong}
              />
                
            </div>
        }

    </div>
  )
}

export default Lecture