import React, { Component } from 'react'
import { useState } from 'react'
import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import yam from "./images/yam.svg"
import crown from "./images/crown.svg"
import egg from "./images/eggs.svg"
import king from "./images/king.svg"
import mouse from "./images/mouse.svg"
import tree from "./images/tree.svg"
import water from "./images/water.svg"
import buttonsound from "./Sounds/buttonsound.mp3"
import wrong from "./Sounds/wrong.mp3"
import correct from "./Sounds/correct.mp3"
import BoyWave from './data/BoyWave'
import EndLecture from './EndLecture'
import "../index.css";
import longa from "./Sounds/VowelPro/longa.mp3"
import longe from "./Sounds/VowelPro/longe.mp3"
import longe2 from "./Sounds/VowelPro/longe2.mp3"
import longi from "./Sounds/VowelPro/longi.mp3"
import longo from "./Sounds/VowelPro/longo.mp3"
import longo2 from "./Sounds/VowelPro/longo2.mp3"
import longu from "./Sounds/VowelPro/longu.mp3"
import u from "./Sounds/AlphabetsPro/u.mp3"
import o from "./Sounds/AlphabetsPro/o.mp3"
import e2 from "./Sounds/AlphabetsPro/e2.mp3"
import { EndTest } from './EndTest'


const vowelData = [
    [{
        capital: "A",
        small: "a",
        pronounce: "ahh",
        image: <img className="vowel-image" src={crown} />,
        example: "dé (Crown)",
        sound: new Audio(longa)
    }],

    [{
        capital: "E",
        small: "e",
        pronounce: "hay",
        image: <img className="vowel-image" src={mouse} />,
        example: "kúté (Mouse)",
        sound: new Audio(longe)
    }],

    [{
        capital: "Ẹ",
        small: "ẹ",
        pronounce: "eh",
        image: <img className="vowel-image" src={egg} />,
        example: "yin (Egg)",
        sound: new Audio(longe2)
    }],

    [{
        capital: "I",
        small: "i",
        pronounce: "ee",
        image: <img className="vowel-image" src={tree} />,
        example: "gi (Tree)",
        sound: new Audio(longi)
    }],

    [{
        capital: "O",
        small: "o",
        pronounce: "oh",
        image: <img className="vowel-image" src={water} />,
        example: "mi (Water)",
        sound: new Audio(longo)
    }],

    [{
        capital: "Ọ",
        small: "ọ",
        pronounce: "or",
        image: <img className="vowel-image" src={king} />,
        example: "ba (King)",
        sound: new Audio(longo2)
    }],
    [{
        capital: "U",
        small: "u",
        pronounce: "ooh",
        image: <img className="vowel-image" src={yam} />,
        example: "iṣ",
        example2: "(Yam)",
        sound: new Audio(longu)
    }]

]



const VowelDisplay = ({ capital, pronounce, image, example, example2, sound }) => {
    if (pronounce != "ooh") {
        return (
            <div className="vowel-content">
                {() => sound.play()}
                <div className="vowel-text" onClick={() => sound.play()}>
                    {capital}
                    <div className="pronounce-stuff">{pronounce}</div>
                </div>
                <div className="vimage-content" onClick={() => sound.play()}>
                    <div className="vowel-image">{image}</div>
                    <div className="vexample"><h2 id="ex">{capital}</h2>{example}</div>
                </div>

            </div>
        )
    }
    if (pronounce == "ooh") {
        return (
            <div className="vowel-content">

                <div className="vowel-text" onClick={() => sound.play()}>
                    {capital}
                    <div className="pronounce-stuff">{pronounce}</div>
                </div>
                <div className="vimage-content" onClick={() => sound.play()}>
                    <div className="vowel-image">{image}</div>
                    <div className="vexample">{example}<h2 id="ex">{capital}</h2>&nbsp;{example2}</div>
                </div>

            </div>
        )
    }

}

// const Vowetest = [{

const wrong_ans = ["B", "D", "F", "G", "Gb", "H", "J", "K", "L", "M", "N", "P", "R", "S", "Ṣ", "T", "W", "Y"];
const correct_ans = ["A", "E", "Ẹ", "I", "O", "Ọ", "U"];

const question1 = ["K", "I", "P", "D"];
const question2 = ["A", "W", "T", "Gb"];
const question3 = ["K", "S", "Ọ", "R"];
const question4 = ["E", "J", "Ṣ", "H"];

const question5 = ["U", "B", "A", "E"];
const question6 = ["O", "Y", "I", "Ọ"];
const question7 = ["Ẹ", "E", "F", "I"];



    const Vowelslec = (props) =>{
        const messageRef = React.createRef();

        const info = vowelData;
        const [quest, setQuest] = useState(question1);
        const [progy, setProgy] = useState(10);
        const [newarray, setNewarray] = useState(question1);
        const [newerArray, setNewerArray] = useState(question5);
        const [quester, setQuester] = useState(question5);
        const [i, setI] = useState(0);
        const [k, setK] = useState(0);
        const [q, setQ] = useState(0);
        const [fav, setFav] = useState(0);
        const [goldCount, setGoldCount] = useState(0);
        const [silverCount, setSilverCount] = useState(0);
        const [bronzeCount, setBronzeCount] = useState(0);
        const [wrongCount, setWrongCount] = useState(0);
        const [correctCount, setCorrectCount] = useState(0);
        const correctSound = new Audio(correct);
        const wrongSound = new Audio(wrong);
        const audio =  new Audio(buttonsound);
        const [text, setText]= useState( "Next slide");
        const [message, setMessage]= useState (null);
        const [answered, setAnswered] = useState(null);
    
     const medalScore=()=>{
        if (correctCount>2){
            {
                   correctCount < 3 ?
                        props.calcGold(0,0,1)
                    : correctCount < 5 ?
                        props.calcGold(0,1,0)
                    :  props.calcGold(1,0,0)

            }
        }
        else{
            props.calcGold(0,0,0)
        }
            props.progy(17)
    }

   const testcheck = (a, b, c, d,) => {
        let correct_ans = ["A", "E", "Ẹ", "I", "O", "Ọ", "U"];
        let result = null;
        for (let i = 0; i < 7; i++) {
            if (a == correct_ans[i]) {
                result = a;
            }
            if (b == correct_ans[i]) {
                result = b;
            }
            if (c == correct_ans[i]) {
                result = c;
            }
            if (d == correct_ans[i]) {
                result = d;
            }
        }
        const handleAnswer = (ans) => {
            setAnswered({ans});
            const message = messageRef.current;
            if (ans === "A" | ans === "E" | ans == "Ẹ" | ans === "I" | ans === "O" | ans === "Ọ" | ans === "U") {
                // this.setState({ message: 'CORRECT!!!' });
                setMessage("CORRECT!!!")
                correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                // this.setState({ correctCount: this.state.correctCount + 1 });
                setCorrectCount(correctCount +1);

            }
            else {
                // this.setState({ message: 'INCORRECT, the correct answer is' + " " + result });
                setMessage(`INCORRECT, the correct answer is ${result}`);
                wrongSound.play();
                message.classList.toggle('move');
                // this.setState({ wrongCount: this.state.wrongCount + 1 });
                setWrongCount(wrongCount +1);
            }



        }
        return (
            <div className="vtest-container">
                <div className="vobj-container">
                    <button className="vobj" disabled={answered != null ? true : false} onClick={() => handleAnswer(a)}>{a}</button>

                    <button className="vobj" disabled={answered != null ? true : false} onClick={() => handleAnswer(b)}>{b}</button>
                </div>

                <div className="vobj-container">
                    <button className="vobj" disabled={answered != null ? true : false} onClick={() => handleAnswer(c)}>{c}</button>

                    <button className="vobj" disabled={answered != null ? true : false} onClick={() => handleAnswer(d)}>{d}</button>
                </div>
            </div>
        )
    }

    const test2check = (e, f, g, h, sounder) => {
        let correct_ans = ["Ẹ", "O", "U"];
        let result = null;
        for (let i = 0; i < 3; i++) {
            if (e == correct_ans[i]) {
                result = e;
            }
            if (f == correct_ans[i]) {
                result = f;
            }
            if (g == correct_ans[i]) {
                result = g;
            }
            if (h == correct_ans[i]) {
                result = h;
            }
        }

        const handleAnswer = (ans) => {
            setAnswered({ans});
            const message = messageRef.current;
            if (ans == "Ẹ" | ans === "O" | ans === "U") {
                setMessage("CORRECT!!!");                
                correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                setCorrectCount(correctCount +1);
            }
            else {
                setMessage(`INCORRECT, the correct answer is ${result}`);
                wrongSound.play();
                message.classList.toggle('move');
                setWrongCount(wrongCount+1);            }
        }

        return (
            <div className="vtest2-container">
                <div className="vtest2-image-stuff">
                    <div className="vtest2-image-container">
                        <div className="vtest2-image" onClick={() => sounder.play()}><BoyWave /></div>
                        <div className="vtest2-text bottom-left">Click me to speak</div>
                    </div>
                </div>

                <div className="vtest2-obj-container">
                    <div className="vtest2-obj">
                        <button className="vobj2" disabled={answered != null ? true : false} onClick={() => handleAnswer(e)}>{e}</button>
                        <button className="vobj2" disabled={answered != null ? true : false} onClick={() => handleAnswer(f)}>{f}</button>
                        <button className="vobj2" disabled={answered != null ? true : false} onClick={() => handleAnswer(g)}>{g}</button>
                        <button className="vobj2" disabled={answered != null ? true : false} onClick={() => handleAnswer(h)}>{h}</button>
                    </div>
                </div>
            </div>
        )
    }

    const newinfo = () => {
        setK(k+1);
        audio.play();
        // this.setState({ newarray: this.state.quest.sort(() => Math.random() - 0.5) });
        setNewarray(quest.sort(() => Math.random() - 0.5));
        setI(i+1);
        setProgy(progy+6);
        if (k > 5) {
            setText("Finish");
        }
    }
    const newtestinfo = () => {
        setAnswered(null)
        audio.play();
        setProgy(progy+6);

        setFav(fav+1);
        setK(k+1);

        if (fav > 3) {
            setQ(q+1);
        }

        // if (fav == 0) { this.setState({ newarray: question2.sort(() => Math.random() - 0.5) }) }
        if (fav == 0 ) {setNewarray(question2.sort(() => Math.random() - 0.5))};
        
        // if (fav == 1) { this.setState({ newarray: question3.sort(() => Math.random() - 0.5) }) }
        if (fav == 1 ) {setNewarray(question3.sort(() => Math.random() - 0.5))};

        // if (fav == 2) { this.setState({ newarray: question4.sort(() => Math.random() - 0.5) }) }
        if (fav == 2 ) {setNewerArray(question4.sort(() => Math.random() - 0.5))};

        // if (fav == 3) { this.setState({ newerArray: question5.sort(() => Math.random() - 0.5) }) }
        if (fav == 3 ) {setNewerArray(question5.sort(() => Math.random() - 0.5))};

        // if (fav == 4) { this.setState({ newerArray: question6.sort(() => Math.random() - 0.5) }) }
        if (fav == 4 ) {setNewerArray(question6.sort(() => Math.random() - 0.5))};

        // if (fav == 5) { this.setState({ newerArray: question7.sort(() => Math.random() - 0.5) }) }
        if (fav == 5 ) {setNewerArray(question7.sort(() => Math.random() - 0.5))};




        setMessage(null)
        const message = messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + correctCount);
        console.log("Wrong count is : " + wrongCount);
        console.log("q count is : " + q);
        console.log("your gold is:"+ Number(window.localStorage.getItem("Gold")))
    }


   const previnfo = () => {
        setK(k-1);
        setI(i-1);
        // if(this.state.k<10){
        //     this.setState({q: this.state.q -1});
        // }
        setProgy(progy-6);
        if (k != 6) {
            setText("Next Slide")
        }

    }
    const correct_array = ["A", "E", "Ẹ", "I", "O", "Ọ", "U"];
    const sounds = [new Audio(u), new Audio(o), new Audio(e2)];

   


        return (
            <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#53a3ec" completed={progy} />
                </div>
                <div className="lecture-content">
                    <div className="lecture-header">
                        {k < 7 ?
                            <div className="lecture-title">Yoruba alphabets contains only seven (7) vowels which are:</div>
                            : k < 8 ?
                                null
                                : k < 12 ?
                                    <div className="lecture-title">Which of the following is a vowel?</div>
                                    : k < 15 ?
                                        <div className="lecture-title">What vowel sound do you hear ?</div>
                                        : null}
                    </div>
                    <div className="lecture-stuff">
                        <div className="lecture-stuff2">
                            {k < 7 ?
                                vowelData[i].map((obj) => {
                                    return <VowelDisplay capital={obj.capital} pronounce={obj.pronounce} image={obj.image} example={obj.example} example2={obj.example2} sound={obj.sound} />
                                })
                                : k < 8 ?
                                   <EndLecture />
                                    : k < 12 ?
                                       testcheck(newarray[0], newarray[1], newarray[2], newarray[3], correct_array)
                                        : k < 15 ?
                                            test2check(newerArray[0], newerArray[1],newerArray[2], newerArray[3],sounds[q])
                                            : EndTest(correctCount, 2,3,5, 7)
                            }



                            {console.log(i)}
                            {console.log("this is K:" + k)}
                            {console.log("this is your q:" + q)}
                            {console.log("this is your fav:" + fav)}

                            {k < 8 ?
                                null
                                : k < 15 ?
                                    <div ref={messageRef} className={message != "CORRECT!!!" ? "messagewrong" : "messagecorrect"}>{message}</div>
                                    : null}


                        </div>
                    </div>
                    <div className="lecture-footer">
                        <br />{k < 7 ?
                            <h4 className="pronounce">*Click on letter or icon to hear pronunciation*</h4>
                            :k < 8 ?
                                <h4 className="pronounce">*Next will be an assessment.*</h4>
                                : null}

                    </div>
                </div>

                {k < 8 ?
                    <div className="btn-container">
                        <button className="btn2" disabled={k < 1 ? true : false} onClick={() => previnfo()}>
                            <span id="spann">Previous</span>
                        </button>

                        <button className="btn" onClick={() => newinfo()}>
                            <span id="spann">{text}</span>
                        </button>
                    </div>
                    : k < 15 ?
                        <button className="test-btn" disabled={answered === null ? true : false} onClick={() => newtestinfo()}>
                            <span id="spann">Next</span>
                        </button>
                        : <NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=> medalScore()} >
                            <span id="spann">Finish</span>
                        </NavLink>
                }
            </div>
        )
}

export default Vowelslec
