import { NavLink } from "react-router-dom"
import Progressbar from "./Progressbar"
import cancel from "./images/cancel.svg"
import Data from "./data/alpha.json"
import React, {Component} from "react"
import buttonsound from "./Sounds/buttonsound.mp3"
import DancingAnimal from './data/DancingAnimal'
import Fireworks from "./data/Fireworks.js"
import DataAlpha from "./data/AlphaData"
import AlphaData from "./data/AlphaData"
import { useState } from "react"

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


const Tablealpha = ({ capital, small, pronounce, sound}) => {
        return (
            <table className="table1" onClick={()=> sound.play()}>
                <tbody>
                    <tr className="rowtable">
                        <td>
                            <h3>{capital}</h3>
                        </td>
                    </tr>
                    <tr className="rowtable">
                        <td>
                            <h3>{small}</h3>
                        </td>
                    </tr>
                    <tr className="rowtable">
                        <td>
                            <h3 className="pronounce">{pronounce}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

// class Alphabetslec extends Component{
//     state = {
//         info : AlphaData,
//         progy: 20,
//         k:0,
//         text: "Next Slide",
//         audio: new Audio(buttonsound)

//     }
//     newinfo=()=>{
//         if(this.state.k>0){this.setState({text: "Finish"});}
//         this.setState({k: this.state.k +1});
//         this.state.audio.play();
//         this.setState({current_info: AlphaData[1]});
//         this.setState({progy: this.state.progy +40});
   
//     }
//     previnfo=()=>{
//         this.setState({text: "Next slide"});
//         this.setState({k: this.state.k -1});
//         this.setState({progy: this.state.progy -45})

//     }
    // const cumProgy=()=>{
    //     this.props.progy(15)
    // }
const Alphabetslec = (props) =>{
    const info = AlphaData;
    const [progy, setProgy] = useState(20);
    const [k, setK] = useState(0)
    const [text, setText] = useState("Next Slide");
    const audio = new Audio(buttonsound);

    const newinfo = ()=>{
        if(k>0){setText("Finish");}
        setK(k+1);
        audio.play();
        setProgy(progy+40);
    }

    const previnfo=()=>{
        setText("Next Slide");
        setK(k-1);
        setProgy(progy-45);
    }
    const cumProgy=()=>{
            props.progy(15)
        }
    
    
    
    // render(){
    return (
        <div className="lecture" >
            <div className="prog">
                <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                <Progressbar bgcolor="rgb(238, 41, 41)" completed= {progy}/*{this.state.progy}*/ />
            </div>
            <div className="lecture-content">
                <div className="lecture-header">
                    {k<2?
                        <div className="lecture-title">There are twenty five (25) alphabets in Yoruba language. These are: </div>
                    : null}
                </div>
                <div className="lecture-stuff">
                    {k<2?  
                        info[k].map((obj) => {
                            return <Tablealpha capital={obj.capital} small={obj.small} pronounce={obj.pronounce} sound={obj.sound} />})
                    : <Endlecture />
                }              
            </div>
                <div className="lecture-footer">
                    {k>2?
                        <div>Letters like, c, q, v, x and z are not among Yoruba alphabets.
                        <br /><h4 className="pronounce">*Click on Letter to hear pronunciation*</h4></div>
                    : null}
                </div>
            </div>
            
            {k<2?
                <div className="btn-container">
                    <button className="btn2" disabled={k<1? true: false} onClick={() => previnfo()}>
                        <span id="spann">Previous</span>
                    </button>
                    
                    <button className="btn" disabled={text == "Finish" ? true: false} onClick={() => newinfo()}>
                        <span id="spann">{text}</span>
                    </button>
                </div>
            : <div className="btn-container">
                <button className="btn2" disabled={k<1? true: false} onClick={() => previnfo()}>
                    <span id="spann">Previous</span>
                </button>
                
                <NavLink className="btn" to="/" exact="/" onClick={()=> cumProgy()}>
                    <span id="spann">Finish</span>
                </NavLink>
            </div>
            }
        </div>
    )

}

export default Alphabetslec;