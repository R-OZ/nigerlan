import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import buttonsound from "./Sounds/buttonsound.mp3"
import BodyData from './BodyData'
import wrong from "./Sounds/wrong.mp3"
import correct from "./Sounds/correct.mp3"
import Fireworks from "./data/Fireworks.js"
import BoyWave from './data/BoyWave'
import DancingAnimal from './data/DancingAnimal'
import "../index.css";
import hand from "./images/body/hand.svg"
import leg from "./images/body/leg.svg"
import ear from "./images/body/ear.svg"
import nose from "./images/body/nose.svg"
import toes from "./images/body/toes.svg"
import headsound from "./Sounds/BodyPro/head.mp3"
import mouthsound from "./Sounds/BodyPro/mouth.mp3"
import backsound from "./Sounds/BodyPro/back.mp3"
import gold from "./images/gold-medal.svg"
import silver from "./images/silver-medal.svg"
import bronze from "./images/bronze-medal.svg"
import SadAnim from './data/SadAnim'



const question=[<img className="body-quest-image" src={hand}/>,<img className="body-quest-image" src={leg}/>,<img className="body-quest-image" src={ear}/>,<img className="body-quest-image" src={nose}/>,<img className="body-quest-image" src={toes}/>];
const question1=["ọwọ́", "ikùn", "àyà"];
const question2=["ẹsẹ̀", "èjìká", "apá"];
const question3=["etí", "orúnkún", "ọrùn"];
const question4=["imú", "irun", "ojú"];
const question5=["ìka-ẹsẹ̀", "ahọ́n", "ìbàdí"];

const question6=["head", "ear","hair"]
const question7=["mouth","neck","nose"]
const question8=["back","waist","butt",]

// const okayy=[<img className="body-image-q" src={head}  />,<img className="body-image-q" src={mouth}  />,<img className="body-image-q" src={back}  />]
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

const BodyDisplay = ({image1,image2,yor1,yor2,eng1,eng2,sound1, sound2}) =>{
    return(
        <div className="body-container">
            <div className="bcontainer1">
                <div className="bimage-container" onClick={()=> sound1.play()}>
                    <div className="bimage">{image1}</div>
                    <div className="btext">{yor1}&nbsp;{eng1}</div>
                </div>
                <div className="bvertical"></div>
                <div className="bimage-container"onClick={()=> sound2.play()}>
                    <div className="bimage">{image2}</div>
                    <div className="btext">{yor2}&nbsp;{eng2}</div>
                </div>
            </div>
        </div>
    )
}

class Bodylec extends Component{
    constructor(props){
        super(props);
        this.messageRef = React.createRef();
    }
    state={
        info: BodyData,
        i: 0,
        k: 0,
        q: 0,
        qn: 0,
        fav:0,
        questbig: question,
        quest: question1,
        newarray: question1,
        newerarray: question6,
        quester: question6,
        wrongCount:0,
        correctCount: 0,
        progy: 5,
        correctSound: new Audio(correct),
        wrongSound: new Audio(wrong),
        audio: new Audio(buttonsound),
        text: "Next slide",
        message: null,
        answered: null
    }

    medalScore=()=>{
        if (this.state.correctCount>2){
            {
                    this.state.correctCount < 5 ?
                        this.props.calcGold(0,0,1)
                    :this.state.correctCount < 7 ?
                        this.props.calcGold(0,1,0)
                    :  this.props.calcGold(1,0,0)

            }
        }
        else{
            this.props.calcGold(0,0,0)
        }
        this.props.progy(17)

    }

    EndTest =()=>{
        if(this.state.correctCount>2){
            return(
                <div className="endlec-container2">
                    <div className="animation-end">
                        <div className="fireworks2"><Fireworks /></div>
                        <div className="congrats-container2">
                            <div className="congrats2">CONGRATULATIONS</div>
                            <div className="congrats-text2">You've earned a {this.state.correctCount<5? "Bronze":this.state.correctCount<7? "Silver": "Gold"} Medal</div>
                        </div>
                    </div>
                    <img className="medal-score" src={this.state.correctCount<5? bronze :this.state.correctCount<7? silver: gold} />
                    <div className="score-text">You scored: {this.state.correctCount} out of 8</div>
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
                    <div className="score-text-sad">You scored: {this.state.correctCount} out of 8</div>
                </div>)
        }
    }

    test2check =(e,f,g,sounder)=>{
        let correct_ans = ["head", "mouth", "back"];
        let result = null;
        for (let i=0; i<3; i++){
            if(e === correct_ans[i]){
                result = e;
            }
            if(f === correct_ans[i]){
                result = f;
            }
            if(g === correct_ans[i]){
                result = g;
            }
        }
        const handleAnswer = (ans) =>{
            this.setState({answered: ans});
            const message = this.messageRef.current;
            if(ans === "head"| ans ==="mouth"| ans ==="back"){
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
                        <button className="numobj" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(e)}>{e}</button>
                        <button className="numobj" disabled={this.state.answered != null? true: false}  onClick={()=>handleAnswer(f)}>{f}</button>
                        <button className="numobj" disabled={this.state.answered != null? true: false}  onClick={()=>handleAnswer(g)}>{g}</button>
                    </div>
                </div>
            </div>
        )
    }

    testcheck = (a,b,c,d,) =>{
        let correct_ans = ["ọwọ́", "ẹsẹ̀", "etí", "imú", "ìka-ẹsẹ̀"];
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
            if(ans === "ọwọ́"| ans ==="ẹsẹ̀"| ans ==="etí"| ans ==="imú"| ans ==="ìka-ẹsẹ̀"){
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

    newtestinfo = ()=>{
        this.setState({answered: null});
        this.state.audio.play();
        this.setState({progy: this.state.progy +5});

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


        this.setState({message: null});
        const message = this.messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + this.state.correctCount);
        console.log("Wrong count is : "+ this.state.wrongCount);
    }
    newinfo=()=>{
        this.setState({i: this.state.i +1});
        this.setState({k: this.state.k +1});
        // this.setState({newarray: this.state.quest.sort(() => Math.random() - 0.5)});
        this.state.audio.play();
        this.setState({progy: this.state.progy +5});
        if(this.state.k>7){
            this.setState({text: "Finish"});
        }
      
        
    }

    previnfo=()=>{
        this.setState({i: this.state.i -1});
        this.setState({k: this.state.k -1});
        this.setState({progy: this.state.progy -5});
    }

    sounds=[new Audio(headsound), new Audio(mouthsound), new Audio(backsound)]

    render(){
    return (
        <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#524b7a" completed={this.state.progy} />
                </div> 
                <div className="lecture-content">
                    <div className="lecture-header">
                        {this.state.k<10?
                            <div className="lecture-title">This lecture will cover the parts of the body in Yoruba. Lets get started!</div>
                        : this.state.k<11?
                            null
                        : this.state.k<16?
                            <div className="lecture-title">What body part is this?</div> 
                        : this.state.k<19?
                            <div className="lecture-title">What body part do you hear ?</div>
                        : null}
                    </div>
                    <div className="lecture-stuff">
                    {this.state.k <10?
                        this.state.info[this.state.i].map((obj)=>{
                            return <BodyDisplay image1={obj.image1} image2={obj.image2} yor1={obj.yor1} yor2={obj.yor2} eng1={obj.eng1} eng2={obj.eng2} sound1={obj.sound1} sound2={obj.sound2} />})
                    :this.state.k<11?
                        <Endlecture />
                    :this.state.k<16?
                         this.testcheck(this.state.questbig[this.state.qn], this.state.newarray[0],this.state.newarray[1],this.state.newarray[2])
                    : this.state.k<19?
                        this.test2check(this.state.newerarray[0],this.state.newerarray[1],this.state.newerarray[2],this.sounds[this.state.q])
                    : this.EndTest() 
                    }
                    
                    {console.log(this.state.i)}
                    {console.log("this is K:"+ this.state.k)}

                    {this.state.k>10?
                            <div ref={this.messageRef} className={this.state.message !="CORRECT!!!"? "messagewrongCons":"messagecorrectCons"}>{this.state.message}</div>
                        : null}
                    
                    </div>
                 
                    <div className="lecture-footer">
                        {this.state.k<10?
                            <h4 className="pronounce">*Click on body part to hear pronunciation*</h4>
                        :this.state.k<11?
                            <h4 className="pronounce">*Next will be assessment*</h4> 
                        : null    }
                    </div>
                </div>
                
                {this.state.k <11?   
                    <div className="btn-container">
                    <button className="btn2" disabled={this.state.k<1? true: false} onClick={() => this.previnfo()}>
                        <span id="spann">Previous</span>
                    </button>
                    
                    <button className="btn" onClick={() => this.newinfo()}>
                        <span id="spann">{this.state.text}</span>
                    </button>
                    </div>
                :this.state.k<19?   
                <button className="test-btn" disabled={this.state.answered===null? true : false} onClick={() => this.newtestinfo()}>
                    <span id="spann">Next</span>
                </button>
                :<NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=>this.medalScore()}>
                <span id="spann">Finish</span>
            </NavLink>}
            </div>
    )
    }
}

export default Bodylec
