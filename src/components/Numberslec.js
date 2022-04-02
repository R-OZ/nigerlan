import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import infoIcon from "./images/info.svg"
import React, {Component} from "react"
import NumData from "./NumData"
import buttonsound from "./Sounds/buttonsound.mp3"
import wrong from "./Sounds/wrong.mp3"
import correct from "./Sounds/correct.mp3"
import Fireworks from "./data/Fireworks.js"
import BoyWave from './data/BoyWave'
import EndLecture from "./EndLecture"
import BrainAnim from "./data/BrainAnim"
import "../index.css";
import short8 from "./Sounds/NumberPro/8.mp3"
import short1 from "./Sounds/NumberPro/1.mp3"
import short50 from "./Sounds/NumberPro/50.mp3"
import short90 from "./Sounds/NumberPro/90.mp3"
import short10 from "./Sounds/NumberPro/10.mp3"
import gold from "./images/gold-medal.svg"
import silver from "./images/silver-medal.svg"
import bronze from "./images/bronze-medal.svg"
import SadAnim from './data/SadAnim'
import { useState } from "react"
import pdf1 from "./images/numbers/pdf1.jpg"
import pdf2 from "./images/numbers/pdf2.jpg"
import pdf3 from "./images/numbers/pdf3.jpg"
import pdf4 from "./images/numbers/pdf4.jpg"
import pdf5 from "./images/numbers/pdf5.jpg"




const question=["3","7","2","41","65",];
const question1=["mẹ́ta", "mẹ́fà", "mẹ́wàá"];
const question2=["mẹ́jọ", "méje", "Ogún"];
const question3=["méjì", "ọ̀kan", "mẹ́rin"];
const question4=["ọ̀kanleogójì", "mẹ́fà", "mẹ́wàá"];
const question5=["màrúndinàádọ́rin", "mẹ̀tadinàádọ́rin", "mèjìdinọgọ́rin"];

const question6=["8", "20", "7", "3"];
const question7=["1", "2", "5", "6"];
const question8=["50", "40", "30", "80"];
const question9=["90", "9", "19", "4"];
const question10=["10", "20", "60", "30"];




const NumberDisplay = ({num1, num2, numtext1, numtext2, numname1, numname2, sound1, sound2}) => {
    return(
        <div className="cons-main">
            <div className="num-content">
                <div className="num-text"onClick={()=>sound1.play()}>
                        {num1}
                    <div className="conspronounce-stuff">{numname1}</div>
                </div>
                <div className="cimage-content" onClick={()=>sound1.play()}>
                    <div className="num-yor">{numtext1}</div>
                </div>
            </div>
                <div className="cons-vertical"></div>
            <div className="num-content">
                <div className="num-text" onClick={()=>sound2.play()}>
                        {num2}
                    <div className="conspronounce-stuff">{numname2}</div>
                </div>
                <div className="cimage-content" onClick={()=>sound2.play()}>
                    <div className="num-yor">{numtext2}</div>
                </div>
            </div>
        </div>
    )
}


// class Numberslec extends Component {
//     constructor(props){
//         super(props);
//         this.messageRef = React.createRef();
//         // this.numRef= React.createRef();
//     }

const Numberslec =(props)=>{

    const [i, setI] = useState(0);
    const [k, setK] = useState(0);
    const [q, setQ] = useState(0);
    const [qn, setQn] = useState(0);
    const [fav, setFav] = useState(0);
    const [info, setInfo] = useState(NumData);
    const [newarray, setNewarray] = useState(question1);
    const [questbig, setQuestbig] = useState(question);
    const [newerarray, setNewerarray] = useState(question6);
    const [quester, setQuester] = useState(question6);
    const [progy, setProgy] = useState(12);
    const [text, setText] = useState("Next slide");
    const [wrongCount, setWrongCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const correctSound = new Audio(correct);
    const wrongSound = new Audio(wrong);
    const audio =  new Audio(buttonsound);
    const [message, setMessage]= useState (null);
    const [answered, setAnswered] = useState(null);


    const numRef= React.createRef();
    const messageRef = React.createRef()

    const showSettings=()=>{
        const nummer = numRef.current;
        nummer.classList.toggle('display')
    }

    // state={
    //     i:0,
    //     info: NumData,
    //     newarray: question1,
    //     questbig: question,
    //     newerarray: question6,
    //     quester: question6,
    //     progy: 12,
    //     text: "Next Slide",
    //     audio: new Audio(buttonsound),
    //     k: 0,
    //     q: 0,
    //     qn: 0,
    //     fav:0,
    //     wrongCount:0,
    //     correctCount: 0,
    //     correctSound: new Audio(correct),
    //     wrongSound: new Audio(wrong),
    //     message: null,
    //     answered: null
    // }


    
    const EndTest =()=>{
        if(correctCount>3){
            return(
                <div className="endlec-container2">
                    <div className="animation-end">
                        <div className="fireworks2"><Fireworks /></div>
                        <div className="congrats-container2">
                            <div className="congrats2">CONGRATULATIONS</div>
                            <div className="congrats-text2">You've earned a {correctCount<6? "Bronze":correctCount<8? "Silver": "Gold"} Medal</div>
                        </div>
                    </div>
                    <img className="medal-score" src={correctCount<6? bronze :correctCount<8? silver: gold} />
                    <div className="score-text">You scored: {correctCount} out of 10</div>
                </div>
        
            )
        }
        else{
            return(
                <div className="endlec-container2">
                    <div className="animation-end">
                        {/* <div className="fireworks2"><Fireworks /></div> */}
                        <div className="congrats-container2-sad">
                            <div className="congrats2">NEVER GIVE UP!</div>
                            <div className="congrats-text2">You've earned no Medal</div>
                        </div>
                    </div>
                    <SadAnim />
                    <div className="score-text-sad">You scored: {correctCount} out of 10</div>
                </div>)
        }
    }
    const medalScore=()=>{
        if (correctCount>3){
            {
                    correctCount < 6 ?
                        props.calcGold(0,0,1)
                    :correctCount < 8 ?
                        props.calcGold(0,1,0)
                    :  props.calcGold(1,0,0)

            }
        }
        else{
            props.calcGold(0,0,0)
        }
        props.progy(17)

    }

    const NumberDisplay2 =()=>{
        return(
            <div>
            <div className="mini-container">
                <div className="mini-title-num">
                    <div className="mini-title1">
                        In Yoruba, numbers between tens that are less than the fifth number in that range, e.g [(11 to 14), (61 to 64), (91 to 94)], are named using this rule:
                    </div>
                    <div className="mini-title2">
                        The intial Tens plus (+) the number to be added <br/> 
                        e.g  42 is 2 + 40, &nbsp; &nbsp; 74 is 4 + 70 <br/> 
                        In yoruba this is:
                        <div className="mini-examples-contain">
                            <div className="mini-examples">
                                    <div className="mini-example">
                                        <div className="mini-example1">
                                            42 is &nbsp;<div className="num1">méjì</div>le<div className="num2">ogójì</div>
                                        </div>
                                        <div className="mini-example2">
                                            <div className="mini-example-type"><div className="num1">méjì</div>&nbsp;is 2 in Yoruba<br/></div>
                                            <div className="mini-example-type"><div className="num2">ogójì</div>&nbsp;is 40 in Yoruba</div>
                                        </div>
                                    </div>
                                
                                    <div className="mini-examplee">
                                        <div className="mini-example1">
                                            74 is &nbsp;<div className="num1">ẹ̀rin</div>le<div className="num2">àádọ́rin</div>
                                        </div>
                                        <div className="mini-example2">
                                            <div className="mini-example-type"><div className="num1">ẹ̀rin</div>&nbsp;is 4 in Yoruba<br/></div>
                                            <div className="mini-example-type"><div className="num2">àádọ́rin</div>&nbsp;is 70 in Yoruba</div>
                                        </div>
                                    </div>
                            </div>
    
                            <div className="brain-anim"><BrainAnim /></div>    
                        </div> 
                    </div> 
                </div>
            </div>
            <div ref={numRef} className="settings-container">
                <img alt="" id="cancel-settings" onClick={()=>showSettings()} src={cancel} />
                <embed scr="./data/numbers.pdf" type="application/pdf" width="60%" height="1600px" scrollbar= "1" />
            </div>
            </div>
        )
    }

    const NumberDisplay3 =()=>{
        return(
            <div className="mini-container">
                <div className="mini-title-num">
                    <div className="mini-title1">
                        Numbers between tens that are in the range of the fifth to the ninth number, e.g [(25 to 29), (15 to 19), (65 to 69)], are named using this rule:
                    </div>
                    <div className="mini-title2">
                        The next Tens minus (-) the number to be subtracted to give the number to be named <br/> 
                        e.g:  37 is 40 - 3, &nbsp; &nbsp; 85 is 90 - 5 <br/> 
                        In yoruba this is:
                        <div className="mini-examples-contain">
                            <div className="mini-examples">
                                    <div className="mini-example">
                                        <div className="mini-example1">
                                            37 is &nbsp;<div className="num1">mẹ̀ta</div>dil<div className="num2">ogójì</div>
                                        </div>
                                        <div className="mini-example2">
                                            <div className="mini-example-type"><div className="num1">mẹ̀ta</div>&nbsp;is 3 in Yoruba<br/></div>
                                            <div className="mini-example-type"><div className="num2">ogójì</div>&nbsp;is 40 in Yoruba</div>
                                        </div>
                                    </div>
                                
                                    <div className="mini-examplee">
                                        <div className="mini-example1">
                                            85 is &nbsp;<div className="num1">màrún</div>dil<div className="num2">àádọ́rùn</div>
                                        </div>
                                        <div className="mini-example2">
                                            <div className="mini-example-type"><div className="num1">màrún</div>&nbsp;is 5 in Yoruba<br/></div>
                                            <div className="mini-example-type"><div className="num2">àádọ́rùn</div>&nbsp;is 90 in Yoruba</div>
                                        </div>
                                    </div>
                            </div>
    
                            <div className="brain-anim"><BrainAnim /></div>    
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }

    const testcheck = (a,b,c,d,) =>{
        let correct_ans = ["mẹ́ta", "méje", "méjì", "ọ̀kanleogójì", "màrúndinàádọ́rin"];
        let result = null;
        for (let i=0; i<5; i++){
            if(b === correct_ans[i]){
                result = b;
            }
            if(c === correct_ans[i]){
                result = c;
            }
            if(d === correct_ans[i]){
                result = d;
            }
        }
        const handleAnswer = (ans) =>{
            setAnswered({ans});
            const message = messageRef.current;
            if(ans === "mẹ́ta"| ans ==="méje"| ans ==="méjì"| ans ==="ọ̀kanleogójì"| ans ==="màrúndinàádọ́rin"){
                setMessage('CORRECT!!!');
                correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                setCorrectCount(correctCount +1);
               
            }
            else{
                setMessage(`INCORRECT, the correct answer is ${result}`);
                wrongSound.play();
                message.classList.toggle('move');
                setWrongCount(wrongCount +1);
            }
            
            

        }
        return(
            <div className="numtest-container">
                <div className="num-quest-container">
                    <button className="num-quest" disabled={answered != null? true: false}>{a}</button>
                </div>        
                    
                <div className="numobj-container">
                    <button className="numobj" disabled={answered != null? true: false} onClick={()=>handleAnswer(b)}>{b}</button>
                    
                    <button className="numobj" disabled={answered!= null? true: false} onClick={()=>handleAnswer(c)}>{c}</button>
        
                    <button className="numobj" disabled={answered!= null? true: false} onClick={()=>handleAnswer(d)}>{d}</button>
                </div>
            </div>
            )
    }

    const test2check =(e,f,g,h, sounder)=>{
        let correct_ans = ["8", "1", "50", "90", "10"];
        let result = null;
        for (let i=0; i<5; i++){
            if(e === correct_ans[i]){
                result = e;
            }
            if(f === correct_ans[i]){
                result = f;
            }
            if(g === correct_ans[i]){
                result = g;
            }
            if(h === correct_ans[i]){
                result = h;
            }
        }
        const handleAnswer = (ans) =>{
            setAnswered({ans});
            const message = messageRef.current;
            if(ans === "8"| ans ==="1"| ans ==="50"| ans ==="90"| ans ==="10"){
                setMessage("CORRECT!!!");
                correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                setCorrectCount(correctCount +1);
               
            }
            else{
                setMessage('INCORRECT, the correct answer is' + " " + result);
                wrongSound.play();
                message.classList.toggle('move');
                setWrongCount(wrongCount +1);
            }

        }

        return(
            <div className="vtest2-container">
                <div className="vtest2-image-stuff">
                <div className="vtest2-image-container">
                    <div className="vtest2-image" onClick={()=> sounder.play()}><BoyWave /></div>
                    <div className="vtest2-text bottom-left">Click me to speak</div>
                </div>
                </div>
                
                <div className="vtest2-obj-container">
                    <div className="vtest2-obj">
                        <button className="vobj2" disabled={answered != null? true: false} onClick={()=>handleAnswer(e)}>{e}</button>
                        <button className="vobj2" disabled={answered != null? true: false}  onClick={()=>handleAnswer(f)}>{f}</button>
                        <button className="vobj2" disabled={answered != null? true: false}  onClick={()=>handleAnswer(g)}>{g}</button>
                        <button className="vobj2" disabled={answered != null? true: false}  onClick={()=>handleAnswer(h)}>{h}</button>
                    </div>
                </div>
            </div>
        )
    }

    const newNum = () =>{
        audio.play();
        setK(k +1);
        setI(i +1);
        setProgy(progy +4);
        
        if(k>13){
        setText("Finish");
        }
    }
    const previnfo=()=>{
        setK( k -1);
        setI( i -1);
        setProgy(progy -4);

    }
    const newtestinfo = ()=>{
        setAnswered(null);
        audio.play();
        setProgy(progy +4);

        setFav(fav +1);
        setK( k +1);
        setQn(qn +1);


        if(fav>4){
            setQ(q +1);
        }

        if(fav===0){setNewarray( question2.sort(() => Math.random() - 0.5));}
        if(fav===1){setNewarray( question3.sort(() => Math.random() - 0.5));}
        if(fav===2){setNewarray( question4.sort(() => Math.random() - 0.5));}
        if(fav===3){setNewarray( question5.sort(() => Math.random() - 0.5));}

        if(fav===4){setNewerarray( question6.sort(() => Math.random() - 0.5));}
        if(fav===5){setNewerarray( question7.sort(() => Math.random() - 0.5));}
        if(fav===6){setNewerarray( question8.sort(() => Math.random() - 0.5));}
        if(fav===7){setNewerarray( question9.sort(() => Math.random() - 0.5));}
        if(fav===8){setNewerarray( question10.sort(() => Math.random() - 0.5));}




        setMessage(null);
        const message = messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + correctCount);
        console.log("Wrong count is : "+ wrongCount);
    }

    const sounds = [new Audio(short8), new Audio(short1),new Audio(short50),new Audio(short90), new Audio(short10)]


    return (
        <div>
        <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#1d0df9" completed={progy} />
                </div> 
                <div className="lecture-content">
                    <div className="lecture-header">
                    {k <5 ?
                            <div className="lecture-title">Lets start with the basic number set 1 to 10.</div>
                        : k<9?
                            <div className="lecture-title">Now lets learn our tens in Yoruba.</div>
                        : k <12?
                            null
                        : k <17?
                            <div className="lecture-title">What is the number in Yoruba?</div>
                        : k<22?
                            <div className="lecture-title">What number do you hear ?</div>
                        : null} 
                    </div>

                    <div className="lecture-stuff">
                        {k<9?
                            info[i].map((obj) => {
                                return <NumberDisplay num1={obj.num1} num2={obj.num2} numname1={obj.numname1} numname2={obj.numname2} numtext1={obj.numtext1} numtext2={obj.numtext2} sound1={obj.sound1} sound2={obj.sound2}/>})
                        :k<10? 
                            NumberDisplay2()
                        :k<11?
                            NumberDisplay3()
                        :k<12?
                            <EndLecture />
                        :k<17?
                            testcheck(questbig[qn], newarray[0],newarray[1],newarray[2])
                        : k<22?
                            test2check(newerarray[0],newerarray[1],newerarray[2],newerarray[3], sounds[q])
                        : EndTest()
                        }
                        
                        {console.log("this is k: " + k)}
                        {console.log("this is i: " + i)}

                        {k>11?
                            <div ref={messageRef} className={message !="CORRECT!!!"? "messagewrongCons":"messagecorrectCons"}>{message}</div>
                            : null}
                    </div>
                    
                    <div className="lecture-footer">
                        {k<9?
                            <h4 className="pronounce">*Click on Number to hear pronunciation*</h4>
                        :k <12?
                               <div className="footer-num"><img onClick={()=>showSettings()} className="info-icon" src={infoIcon} /><h4 className="pronounce">*click on info icon for further information*</h4></div>
                            : null}
                    </div>
                </div>
                {k <12?   
                    <div className="btn-container">
                    <button className="btn2" disabled={k<1? true: false} onClick={() => previnfo()}>
                        <span id="spann">Previous</span>
                    </button>
                    
                    <button className="btn" onClick={()=>newNum()} >
                        <span id="spann">{text}</span>
                    </button>
                    </div>
                : k<22?  
                <button className="test-btn" disabled={answered===null? true : false} onClick={() => newtestinfo()}>
                    <span id="spann">Next</span>
                </button>
                : <NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=>medalScore()} >
                <span id="spann">Finish</span>
            </NavLink>}
            </div>

            <div ref={numRef} className="new-num">
                <img onClick={()=>showSettings()} className="num-cancel" src={cancel} />
                <div className="num-images">
                    <img src={pdf1} className="num-image" />
                    <img src={pdf2} className="num-image" />
                    <img src={pdf3} className="num-image" />
                    <img src={pdf4} className="num-image" />
                    <img src={pdf5} className="num-image" />
                </div>
            </div>


        </div>
    )
}

export default Numberslec
