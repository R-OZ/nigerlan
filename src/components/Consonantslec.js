import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import React, {Component} from "react"
import { useState } from "react"
import ConsData from "./ConsData"
import buttonsound from "./Sounds/buttonsound.mp3"
import wrong from "./Sounds/wrong.mp3"
import correct from "./Sounds/correct.mp3"
import BoyWave from './data/BoyWave'
import "../index.css";
import p from "./Sounds/AlphabetsPro/p.mp3"
import w from "./Sounds/AlphabetsPro/w.mp3"
import j from "./Sounds/AlphabetsPro/j.mp3"
import ks from "./Sounds/AlphabetsPro/k.mp3"
import r from "./Sounds/AlphabetsPro/r.mp3"
import t from "./Sounds/AlphabetsPro/t.mp3"

import EndLecture from "./EndLecture"
import { EndTest } from "./EndTest"


const question1=["Y", "A", "U", "O"];
const question2=["I", "Gb", "E", "O"];
const question3=["E", "A", "Ẹ", "D"];
const question4=["U", "7", "F", "O"];
const question5=["5", "Ẹ", "S", "3"];
const question6=["Ọ", "I", "L", "O"];
const question7=["8", "H", "3", "5"];
const question8=["E", "U", "M", "O"];

const question9=["P", "N", "A", "U"];
const question10=["W", "Y", "Ọ", "M"];
const question11=["J", "F", "H", "Ṣ"];
const question12=["K", "B", "D", "I"];
const question13=["R", "O", "A", "U"];
const question14=["T", "Ẹ", "S", "Gb"];



const ConsonantDisplay = ({ capital, pronounce, image, example, capital2, pronounce2, image2, example2, examplem, examplem2, sound1, sound2 }) => {
    if(pronounce =="gbh"){
        return(
            <div className="cons-main">

           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                   <div className="cons-image">{image}</div>
                   <div className="cexample">{example}<h2 id ="cons-ex">{capital}</h2>{examplem}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                   <div className="cons-image">{image2}</div>
                   <div className="cexample">{example2}<h2 id ="cons-ex">{capital2}</h2>{examplem2}</div>
               </div>
           </div>

        </div>
        )
    }

    else if(pronounce2 =="see" | pronounce2 == "yee"){
        return(
            <div className="cons-main">

           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                   <div className="cons-image">{image}</div>
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                   <div className="cons-image">{image2}</div>
                   <div className="cexample">{example2}<h2 id ="cons-ex">{capital2}</h2>{examplem2}</div>
               </div>
           </div>

        </div>
        )
    }

    else {
    return(
        <div className="cons-main">

           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound1.play()}>
                       {capital}
                   <div className="conspronounce-stuff">{pronounce}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound1.play()}>
                   <div className="cons-image">{image}</div>
                   <div className="cexample"><h2 id ="cons-ex">{capital}</h2>{example}</div>
               </div>
           </div>
            <div className="cons-vertical"></div>
           <div className="cons-content">
               <div className="cons-text" onClick={()=> sound2.play()}>
                       {capital2}
                   <div className="conspronounce-stuff">{pronounce2}</div>
               </div>
               <div className="cimage-content" onClick={()=> sound2.play()}>
                   <div className="cons-image">{image2}</div>
                   <div className="cexample"><h2 id ="cons-ex">{capital2}</h2>{example2}</div>
               </div>
           </div>

        </div>
       )}
    }

// class Consonantslec extends Component{
//     constructor(props){
//         super(props);
//         this.messageRef = React.createRef();

const Consonantslec = (props) =>{
    // state={
    //     info: ConsData,
    //     progy: 18,
    //     quest: question1,
    //     newarray: question1,
    //     i: 0,
    //     fav:0,
    //     k: 0,
    //     q: 0,
    //     wrongCount:0,
    //     correctCount: 0,
    //     correctSound: new Audio(correct),
    //     wrongSound: new Audio(wrong),
    //     audio: new Audio(buttonsound),
    //     text: "Next slide",
    //     message: null,
    //     answered: null
    // }
    const [info, setInfo] = useState(ConsData);
    const [progy, setProgy] = useState(18);
    const [quest, setQuest] = useState(question1);
    const [newarray, setNewarray] = useState(question1);
    const [newerarray, setNewerarray] = useState(question9);
    const [i, setI] = useState(0);
    const [fav, setFav] = useState(0);
    const [k, setK] = useState(0);
    const [q, setQ] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const correctSound = new Audio(correct)
    const wrongSound = new Audio(wrong)
    const audio = new Audio(buttonsound);
    const [text, setText] = useState("Next slide");
    const [message, setMessage] = useState(null);
    const [answered, setAnswered] = useState(null);
    
    const messageRef = React.createRef()


    
    const medalScore=()=>{
        if (correctCount>4){
            {
                    correctCount < 7 ?
                        props.calcGold(0,0,1)
                    :correctCount < 11 ?
                        props.calcGold(0,1,0)
                    :  props.calcGold(1,0,0)

            }
        }
        else{
            props.calcGold(0,0,0)
        }
        props.progy(17)

    }

    // const EndTest =()=>{
    //     if(tcorrectCount>4){
    //         return(
    //             <div className="endlec-container2">
    //                 <div className="animation-end">
    //                     <div className="fireworks2"><Fireworks /></div>
    //                     <div className="congrats-container2">
    //                         <div className="congrats2">CONGRATULATIONS</div>
    //                         <div className="congrats-text2">You've earned a {this.state.correctCount<7? "Bronze":this.state.correctCount<11? "Silver": "Gold"} Medal</div>
    //                     </div>
    //                 </div>
    //                 <img className="medal-score" src={.correctCount<7? bronze :this.state.correctCount<11? silver: gold} />
    //                 <div className="score-text">You scored: {this.state.correctCount} out of 14</div>
    //             </div>
        
    //         )
    //     }
    //     else{
    //         return(
    //             <div className="endlec-container2">
    //                 <div className="animation-end">
    //                     {/* <div className="fireworks2"><Fireworks /></div> */}
    //                     <div className="congrats-container2-sad">
    //                         <div className="congrats2">NEVER GIVE UP!</div>
    //                         <div className="congrats-text2">You've earned no Medal</div>
    //                     </div>
    //                 </div>
    //                 <SadAnim />
    //                 <div className="score-text-sad">You scored: {correctCount} out of 14</div>
    //             </div>)
    //     }
    // }

    const testcheck = (a,b,c,d,) =>{
        let correct_ans = ["Y", "Gb", "D", "F", "S", "L", "H", "M"];
        let result = null;
        for (let i=0; i<9; i++){
            if(a == correct_ans[i]){
                result = a;
            }
            if(b == correct_ans[i]){
                result = b;
            }
            if(c == correct_ans[i]){
                result = c;
            }
            if(d == correct_ans[i]){
                result = d;
            }
        }
        const handleAnswer = (ans) =>{
            setAnswered(ans);
            const message = messageRef.current;
            if(ans === "Y"| ans ==="Gb"| ans =="D"| ans ==="F"| ans ==="S"| ans ==="L"| ans ==="H" | ans ==="M"){
                setMessage("CORRECT!!!");
                correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
               setCorrectCount(correctCount+1);

            }
            else{
                setMessage('INCORRECT, the correct answer is' + " " + result);
                wrongSound.play();
                message.classList.toggle('move');
                setWrongCount(wrongCount+1);
            }



        }
        return(
            <div className="vtest-container">
                <div className="vobj-container">
                    <button className="vobj"  disabled={answered != null? true: false} onClick={()=>handleAnswer(a)}>{a}</button>

                    <button className="vobj" disabled={answered != null? true: false} onClick={()=>handleAnswer(b)}>{b}</button>
                </div>

                <div className="vobj-container">
                    <button className="vobj" disabled={answered!= null? true: false} onClick={()=>handleAnswer(c)}>{c}</button>

                    <button className="vobj" disabled={answered!= null? true: false} onClick={()=>handleAnswer(d)}>{d}</button>
                </div>
            </div>
            )
    }

    const test2check =(e,f,g,h, sounder)=>{
        let correct_ans = ["P","W","J","K","R","T"];
        let result = null;
        for (let i=0; i<6; i++){
            if(e == correct_ans[i]){
                result = e;
            }
            if(f == correct_ans[i]){
                result = f;
            }
            if(g == correct_ans[i]){
                result = g;
            }
            if(h == correct_ans[i]){
                result = h;
            }
        }

        const handleAnswer = (ans) =>{
            setAnswered(ans);
            const message = messageRef.current;
            if(ans =="P"| ans ==="W"| ans ==="J"|ans =="K"| ans ==="R"| ans ==="T"){
               setMessage('CORRECT!!!');
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
                    <div className="vtest2-image" onClick={()=>sounder.play()}><BoyWave /></div>
                    <div className="vtest2-text bottom-left"> click me to speak</div>
                </div>
                </div>

                <div className="vtest2-obj-container">
                    <div className="vtest2-obj">
                        <button className="vobj2" disabled={answered != null? true: false} onClick={()=>handleAnswer(e)}>{e}</button>
                        <button className="vobj2" disabled={answered != null? true: false} onClick={()=>handleAnswer(f)}>{f}</button>
                        <button className="vobj2" disabled={answered != null? true: false} onClick={()=>handleAnswer(g)}>{g}</button>
                        <button className="vobj2" disabled={answered != null? true: false} onClick={()=>handleAnswer(h)}>{h}</button>
                    </div>
                </div>
            </div>
        )
    }

    const newdata = () =>{
        setK(k+1);        
        audio.play();
        setNewarray(quest.sort(() => Math.random() - 0.5));
        setI (i +1);
        setProgy(progy +4);
        if(k>7){setText("Finish");}
    }
    const newtestinfo = ()=>{
        setAnswered(null);
        audio.play();
        setProgy(progy +3);
        
        setFav(fav +1);
        setK(k+1);
        // this.setState({newarray: quest.sort(() => Math.random() - 0.5)});
        
        if(fav>7){
           setQ(q +1);

        }

        if(fav==0){setNewarray(question2.sort(() => Math.random() - 0.5))};
        if(fav==1){setNewarray(question3.sort(() => Math.random() - 0.5))};
        if(fav==2){setNewarray(question4.sort(() => Math.random() - 0.5))};
        if(fav==3){setNewarray(question5.sort(() => Math.random() - 0.5))};
        if(fav==4){setNewarray(question6.sort(() => Math.random() - 0.5))};
        if(fav==5){setNewarray(question7.sort(() => Math.random() - 0.5))};
        if(fav==6){setNewarray(question8.sort(() => Math.random() - 0.5))};

        if(fav==7){setNewerarray(question9.sort(() => Math.random() - 0.5))};
        if(fav==8){setNewerarray(question10.sort(() => Math.random() - 0.5))};
        if(fav==9){setNewerarray(question11.sort(() => Math.random() - 0.5))};
        if(fav==10){setNewerarray(question12.sort(() => Math.random() - 0.5))};
        if(fav==11){setNewerarray(question13.sort(() => Math.random() - 0.5))};
        if(fav==12){setNewerarray(question14.sort(() => Math.random() - 0.5))};

        // if(k>9){
        //     this.setState({q: q +1});
        // }


        setMessage(null);
        const message = messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + correctCount);
        console.log("Wrong count is : "+ wrongCount);
    }
    const previnfo=()=>{
        setK(k -1);
       setI(i -1);
        setProgy(progy -3);
        if(k !=8){
            setText("Next slide");
        }
    }
    const correct_array = ["Y", "Gb", "D", "F", "S", "L", "H", "M"]
    const sounds = [new Audio(p),new Audio(w),new Audio(j),new Audio(ks),new Audio(r),new Audio(t)]
        return (
            <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#40c600" completed={progy} />
                </div>
                <div className="lecture-content">
                    <div className="lecture-header">
                        {k <9 ?
                            <div className="lecture-title">Yoruba alphabets contains eighteen (18) consonants which are:</div>
                        : k<10?
                            null
                        : k <18?
                            <div className="lecture-title">Which of the following is a consonant?</div>
                        : k<24?
                         <div className="lecture-title">What consonant sound do you hear ?</div>
                        : null}
                    </div>

                    <div className="lecture-stuff">
                        {k <9?
                            info[i].map((obj) => {
                                return <ConsonantDisplay capital={obj.capital} pronounce={obj.pronounce} image={obj.image} example={obj.example} capital2={obj.capital2} pronounce2={obj.pronounce2} examplem={obj.examplem} examplem2={obj.examplem2} image2={obj.image2}example2={obj.example2} sound1={obj.sound1} sound2={obj.sound2}/>})
                        : k<10?
                            <EndLecture />
                        : k<17 ?
                            testcheck(newarray[0],newarray[1],newarray[2],newarray[3],correct_array)
                        : k<24?  
                            test2check(newerarray[0],newerarray[1],newerarray[2],newerarray[3], sounds[q])
                        : EndTest(correctCount, 4,7,11, 14)
                            }
                        
                        {console.log(i)}
                        {console.log("this is K:"+ k)}
                        {console.log("this is q:"+ q)}

                        {console.log("this is fav:"+ fav)}

                        {k>9?
                            <div ref={messageRef} className={message !="CORRECT!!!"? "messagewrongCons":"messagecorrectCons"}>{message}</div>
                        : null}
                    </div>

                    <div className="lecture-footer">
                        {k<9?
                           <div><div className="pre-text">Letters like, c, q, v, x and z are not among Yoruba consonants.</div><h4 className="pronounce">*Click on Letter to hear pronunciation*</h4></div>
                        :  k <10?
                            <h4 className="pronounce">*Next will be an assessment.*</h4>
                        : null}
                    </div>

                </div>

                {k <10?
                    <div className="btn-container">
                    <button className="btn2" disabled={k<1? true: false} onClick={() => previnfo()}>
                        <span id="spann">Previous</span>
                    </button>

                    <button className="btn" onClick={() => newdata()}>
                        <span id="spann">{text}</span>
                    </button>
                    </div>
                :k<24?
                <button className="test-btn" disabled={answered===null? true : false} onClick={() => newtestinfo()}>
                    <span id="spann">Next</span>
                </button>
                :<NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=>medalScore()}>
                <span id="spann">Finish</span>
            </NavLink>}
            </div>
        )
}
export default Consonantslec;