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
import DancingAnimal from './data/DancingAnimal'
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



const Endlecture =() =>{
    return(
        <div className="endlec-container">
            <div className="animation-end">
                <div className="fireworks"><Fireworks /></div>
                <div className="congrats-container">
                    <div className="congrats">CONGRATULATIONS</div>
                    <div className="congrats-text">You've come to the end of this lecture!!!</div>
                </div>
            </div>
            <div className="dancing-anim"><DancingAnimal /></div>
        </div>
    )
}


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


class Numberslec extends Component {
    constructor(props){
        super(props);
        this.messageRef = React.createRef();
        // this.numRef= React.createRef();
    }
    

    showSettings=()=>{
        const nummer = this.messageRef.current;
        nummer.classList.toggle('display')
    }

    state={
        i:0,
        info: NumData,
        newarray: question1,
        questbig: question,
        newerarray: question6,
        quester: question6,
        progy: 12,
        text: "Next Slide",
        audio: new Audio(buttonsound),
        k: 0,
        q: 0,
        qn: 0,
        fav:0,
        wrongCount:0,
        correctCount: 0,
        correctSound: new Audio(correct),
        wrongSound: new Audio(wrong),
        audio: new Audio(buttonsound),
        text: "Next slide",
        message: null,
        answered: null
    }
    
    EndTest =()=>{
        if(this.state.correctCount>3){
            return(
                <div className="endlec-container2">
                    <div className="animation-end">
                        <div className="fireworks2"><Fireworks /></div>
                        <div className="congrats-container2">
                            <div className="congrats2">CONGRATULATIONS</div>
                            <div className="congrats-text2">You've earned a {this.state.correctCount<6? "Bronze":this.state.correctCount<8? "Silver": "Gold"} Medal</div>
                        </div>
                    </div>
                    <img className="medal-score" src={this.state.correctCount<6? bronze :this.state.correctCount<8? silver: gold} />
                    <div className="score-text">You scored: {this.state.correctCount} out of 10</div>
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
                    <div className="score-text-sad">You scored: {this.state.correctCount} out of 10</div>
                </div>)
        }
    }
    medalScore=()=>{
        if (this.state.correctCount>3){
            {
                    this.state.correctCount < 6 ?
                        this.props.calcGold(0,0,1)
                    :this.state.correctCount < 8 ?
                        this.props.calcGold(0,1,0)
                    :  this.props.calcGold(1,0,0)

            }
        }
        else{
            this.props.calcGold(0,0,0)
        }
        this.props.progy(17)

    }

    NumberDisplay2 =()=>{
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
            <div ref={this.numRef} className="settings-container">
                <img alt="" id="cancel-settings" onClick={()=>this.showSettings()} src={cancel} />
                <embed scr="./data/numbers.pdf" type="application/pdf" width="60%" height="1600px" scrollbar= "1" />
            </div>
            </div>
        )
    }

    NumberDisplay3 =()=>{
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

    testcheck = (a,b,c,d,) =>{
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
            this.setState({answered: ans});
            const message = this.messageRef.current;
            if(ans === "mẹ́ta"| ans ==="méje"| ans ==="méjì"| ans ==="ọ̀kanleogójì"| ans ==="màrúndinàádọ́rin"){
                this.setState({message:'CORRECT!!!'});
                this.state.correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                this.setState({correctCount: this.state.correctCount +1});
               
            }
            else{
                this.setState({message:'INCORRECT, the correct answer is' + " " + result});
                this.state.wrongSound.play();
                message.classList.toggle('move');
                this.setState({wrongCount: this.state.wrongCount +1});
            }
            
            

        }
        return(
            <div className="numtest-container">
                <div className="num-quest-container">
                    <button className="num-quest" disabled={this.state.answered != null? true: false}>{a}</button>
                </div>        
                    
                <div className="numobj-container">
                    <button className="numobj" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(b)}>{b}</button>
                    
                    <button className="numobj" disabled={this.state.answered!= null? true: false} onClick={()=>handleAnswer(c)}>{c}</button>
        
                    <button className="numobj" disabled={this.state.answered!= null? true: false} onClick={()=>handleAnswer(d)}>{d}</button>
                </div>
            </div>
            )
    }

    test2check =(e,f,g,h, sounder)=>{
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
            this.setState({answered: ans});
            const message = this.messageRef.current;
            if(ans === "8"| ans ==="1"| ans ==="50"| ans ==="90"| ans ==="10"){
                this.setState({message:'CORRECT!!!'});
                this.state.correctSound.play();
                message.classList.toggle('move')
                message.classList.toggle('move')
                this.setState({correctCount: this.state.correctCount +1});
               
            }
            else{
                this.setState({message:'INCORRECT, the correct answer is' + " " + result});
                this.state.wrongSound.play();
                message.classList.toggle('move');
                this.setState({wrongCount: this.state.wrongCount +1});
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
                        <button className="vobj2" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(e)}>{e}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false}  onClick={()=>handleAnswer(f)}>{f}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false}  onClick={()=>handleAnswer(g)}>{g}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false}  onClick={()=>handleAnswer(h)}>{h}</button>
                    </div>
                </div>
            </div>
        )
    }

    newNum = () =>{
        this.state.audio.play();
        this.setState({k: this.state.k +1});
        this.setState({i: this.state.i +1});
        this.setState({progy: this.state.progy +4});
        
        if(this.state.k>13){
            this.setState({text: "Finish"});
        }
    }
    previnfo=()=>{
        this.setState({k: this.state.k -1});
        this.setState({i: this.state.i -1});
        this.setState({progy: this.state.progy -4});

    }
    newtestinfo = ()=>{
        this.setState({answered: null});
        this.state.audio.play();
        this.setState({progy: this.state.progy +4});

        this.setState({fav: this.state.fav +1})
        this.setState({k: this.state.k +1});
        this.setState({qn: this.state.qn +1});


        if(this.state.fav>4){
            this.setState({q: this.state.q +1});
        }

        if(this.state.fav===0){this.setState({newarray: question2.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===1){this.setState({newarray: question3.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===2){this.setState({newarray: question4.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===3){this.setState({newarray: question5.sort(() => Math.random() - 0.5)});}

        if(this.state.fav===4){this.setState({newerarray: question6.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===5){this.setState({newerarray: question7.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===6){this.setState({newerarray: question8.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===7){this.setState({newerarray: question9.sort(() => Math.random() - 0.5)});}
        if(this.state.fav===8){this.setState({newerarray: question10.sort(() => Math.random() - 0.5)});}




        this.setState({message: null});
        const message = this.messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + this.state.correctCount);
        console.log("Wrong count is : "+ this.state.wrongCount);
    }

    sounds = [new Audio(short8), new Audio(short1),new Audio(short50),new Audio(short90), new Audio(short10)]

    render(){
    return (
        <div>
        <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#1d0df9" completed={this.state.progy} />
                </div> 
                <div className="lecture-content">
                    <div className="lecture-header">
                    {this.state.k <5 ?
                            <div className="lecture-title">Lets start with the basic number set 1 to 10.</div>
                        : this.state.k<9?
                            <div className="lecture-title">Now lets learn our tens in Yoruba.</div>
                        : this.state.k <12?
                            null
                        : this.state.k <17?
                            <div className="lecture-title">What is the number in Yoruba?</div>
                        : this.state.k<22?
                            <div className="lecture-title">What number do you hear ?</div>
                        : null} 
                    </div>

                    <div className="lecture-stuff">
                        {this.state.k<9?
                            this.state.info[this.state.i].map((obj) => {
                                return <NumberDisplay num1={obj.num1} num2={obj.num2} numname1={obj.numname1} numname2={obj.numname2} numtext1={obj.numtext1} numtext2={obj.numtext2} sound1={obj.sound1} sound2={obj.sound2}/>})
                        :this.state.k<10? 
                            this.NumberDisplay2()
                        :this.state.k<11?
                            this.NumberDisplay3()
                        :this.state.k<12?
                            <Endlecture />
                        :this.state.k<17?
                            this.testcheck(this.state.questbig[this.state.qn], this.state.newarray[0],this.state.newarray[1],this.state.newarray[2])
                        : this.state.k<22?
                            this.test2check(this.state.newerarray[0],this.state.newerarray[1],this.state.newerarray[2],this.state.newerarray[3], this.sounds[this.state.q])
                        : this.EndTest()
                        }
                        
                        {console.log("this is k: " + this.state.k)}
                        {console.log("this is i: " + this.state.i)}

                        {this.state.k>11?
                            <div ref={this.messageRef} className={this.state.message !="CORRECT!!!"? "messagewrongCons":"messagecorrectCons"}>{this.state.message}</div>
                        : null}
                    </div>
                    
                    <div className="lecture-footer">
                        {this.state.k<9?
                            <h4 className="pronounce">*Click on Number to hear pronunciation*</h4>
                        :this.state.k <12?
                               <div className="footer-num"><img onClick={()=>this.showSettings()} className="info-icon" src={infoIcon} /><h4 className="pronounce">*click on info icon for further information*</h4></div>
                            : null}
                    </div>
                </div>
                {this.state.k <12?   
                    <div className="btn-container">
                    <button className="btn2" disabled={this.state.k<1? true: false} onClick={() => this.previnfo()}>
                        <span id="spann">Previous</span>
                    </button>
                    
                    <button className="btn" onClick={()=>this.newNum()} >
                        <span id="spann">{this.state.text}</span>
                    </button>
                    </div>
                : this.state.k<22?  
                <button className="test-btn" disabled={this.state.answered===null? true : false} onClick={() => this.newtestinfo()}>
                    <span id="spann">Next</span>
                </button>
                : <NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=>this.medalScore()} >
                <span id="spann">Finish</span>
            </NavLink>}
            </div>

            <div ref={this.messageRef} className="new-num">
                <img onClick={()=>this.showSettings()} className="num-cancel" src={cancel} />
                <div className="num-images">
                    <img src={pdf1} className="num-image" />
                    <img src={pdf2} className="num-image" />
                    <img src={pdf3} className="num-image" />
                    <img src={pdf4} className="num-image" />
                    <img src={pdf5} className="num-image" />
                </div>
            </div>


        </div>
    )}
}

export default Numberslec
