import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import React, {Component} from "react"
import ConsData from "./ConsData"
import buttonsound from "./Sounds/buttonsound.mp3"
import wrong from "./Sounds/wrong.mp3"
import correct from "./Sounds/correct.mp3"
import Fireworks from "./data/Fireworks.js"
import BoyWave from './data/BoyWave'
import DancingAnimal from './data/DancingAnimal'
import "../index.css";
import p from "./Sounds/AlphabetsPro/p.mp3"
import w from "./Sounds/AlphabetsPro/w.mp3"
import j from "./Sounds/AlphabetsPro/j.mp3"
import ks from "./Sounds/AlphabetsPro/k.mp3"
import r from "./Sounds/AlphabetsPro/r.mp3"
import t from "./Sounds/AlphabetsPro/t.mp3"
import gold from "./images/gold-medal.svg"
import silver from "./images/silver-medal.svg"
import bronze from "./images/bronze-medal.svg"
import SadAnim from './data/SadAnim'


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

class Consonantslec extends Component{
    constructor(props){
        super(props);
        this.messageRef = React.createRef();
    }
    state={
        info: ConsData,
        progy: 18,
        quest: question1,
        newarray: question1,
        i: 0,
        fav:0,
        k: 0,
        q: 0,
        wrongCount:0,
        correctCount: 0,
        correctSound: new Audio(correct),
        wrongSound: new Audio(wrong),
        audio: new Audio(buttonsound),
        text: "Next slide",
        message: null,
        answered: null
    }

    medalScore=()=>{
        if (this.state.correctCount>4){
            {
                    this.state.correctCount < 7 ?
                        this.props.calcGold(0,0,1)
                    :this.state.correctCount < 11 ?
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
        if(this.state.correctCount>4){
            return(
                <div className="endlec-container2">
                    <div className="animation-end">
                        <div className="fireworks2"><Fireworks /></div>
                        <div className="congrats-container2">
                            <div className="congrats2">CONGRATULATIONS</div>
                            <div className="congrats-text2">You've earned a {this.state.correctCount<7? "Bronze":this.state.correctCount<11? "Silver": "Gold"} Medal</div>
                        </div>
                    </div>
                    <img className="medal-score" src={this.state.correctCount<7? bronze :this.state.correctCount<11? silver: gold} />
                    <div className="score-text">You scored: {this.state.correctCount} out of 14</div>
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
                    <div className="score-text-sad">You scored: {this.state.correctCount} out of 14</div>
                </div>)
        }
    }

    testcheck = (a,b,c,d,) =>{
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
            this.setState({answered: ans});
            const message = this.messageRef.current;
            if(ans === "Y"| ans ==="Gb"| ans =="D"| ans ==="F"| ans ==="S"| ans ==="L"| ans ==="H" | ans ==="M"){
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
            <div className="vtest-container">
                <div className="vobj-container">
                    <button className="vobj"  disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(a)}>{a}</button>

                    <button className="vobj" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(b)}>{b}</button>
                </div>

                <div className="vobj-container">
                    <button className="vobj" disabled={this.state.answered!= null? true: false} onClick={()=>handleAnswer(c)}>{c}</button>

                    <button className="vobj" disabled={this.state.answered!= null? true: false} onClick={()=>handleAnswer(d)}>{d}</button>
                </div>
            </div>
            )
    }

    test2check =(e,f,g,h, sounder)=>{
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
            this.setState({answered: ans});
            const message = this.messageRef.current;
            if(ans =="P"| ans ==="W"| ans ==="J"|ans =="K"| ans ==="R"| ans ==="T"){
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
                    <div className="vtest2-image" onClick={()=>sounder.play()}><BoyWave /></div>
                    <div className="vtest2-text bottom-left"> click me to speak</div>
                </div>
                </div>

                <div className="vtest2-obj-container">
                    <div className="vtest2-obj">
                        <button className="vobj2" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(e)}>{e}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(f)}>{f}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(g)}>{g}</button>
                        <button className="vobj2" disabled={this.state.answered != null? true: false} onClick={()=>handleAnswer(h)}>{h}</button>
                    </div>
                </div>
            </div>
        )
    }

    newdata = () =>{
        this.setState({k: this.state.k +1});
        this.state.audio.play();
        this.setState({newarray: this.state.quest.sort(() => Math.random() - 0.5)});
        this.setState({i: this.state.i +1});
        this.setState({progy: this.state.progy +4});
        if(this.state.k>7){
            this.setState({text: "Finish"});
        }
    }
    newtestinfo = ()=>{
        this.setState({answered: null});
        this.state.audio.play();
        this.setState({progy: this.state.progy +3});
        
        this.setState({fav: this.state.fav +1});
        this.setState({k: this.state.k +1});
        // this.setState({newarray: this.state.quest.sort(() => Math.random() - 0.5)});
        
        if(this.state.fav>7){
            this.setState({q: this.state.q +1})

        }

        if(this.state.fav==0){this.setState({newarray: question2.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==1){this.setState({newarray: question3.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==2){this.setState({newarray: question4.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==3){this.setState({newarray: question5.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==4){this.setState({newarray: question6.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==5){this.setState({newarray: question7.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==6){this.setState({newarray: question8.sort(() => Math.random() - 0.5)})};

        if(this.state.fav==7){this.setState({newerarray: question9.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==8){this.setState({newerarray: question10.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==9){this.setState({newerarray: question11.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==10){this.setState({newerarray: question12.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==11){this.setState({newerarray: question13.sort(() => Math.random() - 0.5)})};
        if(this.state.fav==12){this.setState({newerarray: question14.sort(() => Math.random() - 0.5)})};

        // if(this.state.k>9){
        //     this.setState({q: this.state.q +1});
        // }


        this.setState({message: null});
        const message = this.messageRef.current;
        message.classList.toggle('move')

        console.log("correct count is : " + this.state.correctCount);
        console.log("Wrong count is : "+ this.state.wrongCount);
    }
    previnfo=()=>{
        this.setState({k: this.state.k -1});
        this.setState({i: this.state.i -1});
        this.setState({progy: this.state.progy -3});
        if(this.state.k !=8){
            this.setState({text: "Next slide"});
        }
    }
    correct_array = ["Y", "Gb", "D", "F", "S", "L", "H", "M"]
    sounds = [new Audio(p),new Audio(w),new Audio(j),new Audio(ks),new Audio(r),new Audio(t)]
    render(){
        return (
            <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#40c600" completed={this.state.progy} />
                </div>
                <div className="lecture-content">
                    <div className="lecture-header">
                        {this.state.k <9 ?
                            <div className="lecture-title">Yoruba alphabets contains eighteen (18) consonants which are:</div>
                        : this.state.k<10?
                            null
                        : this.state.k <18?
                            <div className="lecture-title">Which of the following is a consonant?</div>
                        : this.state.k<24?
                         <div className="lecture-title">What consonant sound do you hear ?</div>
                        : null}
                    </div>

                    <div className="lecture-stuff">
                        {this.state.k <9?
                            this.state.info[this.state.i].map((obj) => {
                                return <ConsonantDisplay capital={obj.capital} pronounce={obj.pronounce} image={obj.image} example={obj.example} capital2={obj.capital2} pronounce2={obj.pronounce2} examplem={obj.examplem} examplem2={obj.examplem2} image2={obj.image2}example2={obj.example2} sound1={obj.sound1} sound2={obj.sound2}/>})
                        : this.state.k<10?
                            <Endlecture />
                        : this.state.k<18 ?
                            this.testcheck(this.state.newarray[0],this.state.newarray[1],this.state.newarray[2],this.state.newarray[3],this.correct_array)
                        : this.state.k<24?  
                            this.test2check(this.state.newerarray[0],this.state.newerarray[1],this.state.newerarray[2],this.state.newerarray[3], this.sounds[this.state.q])
                        :this.EndTest()
                            }
                        
                        {console.log(this.state.i)}
                        {console.log("this is K:"+ this.state.k)}
                        {console.log("this is q:"+ this.state.q)}

                        {console.log("this is fav:"+ this.state.fav)}

                        {this.state.k>9?
                            <div ref={this.messageRef} className={this.state.message !="CORRECT!!!"? "messagewrongCons":"messagecorrectCons"}>{this.state.message}</div>
                        : null}
                    </div>

                    <div className="lecture-footer">
                        {this.state.k<9?
                           <div><div className="pre-text">Letters like, c, q, v, x and z are not among Yoruba consonants.</div><h4 className="pronounce">*Click on Letter to hear pronunciation*</h4></div>
                        :  this.state.k <10?
                            <h4 className="pronounce">*Next will be an assessment.*</h4>
                        : null}
                    </div>

                </div>

                {this.state.k <10?
                    <div className="btn-container">
                    <button className="btn2" disabled={this.state.k<1? true: false} onClick={() => this.previnfo()}>
                        <span id="spann">Previous</span>
                    </button>

                    <button className="btn" onClick={() => this.newdata()}>
                        <span id="spann">{this.state.text}</span>
                    </button>
                    </div>
                :this.state.k<24?
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
export default Consonantslec;