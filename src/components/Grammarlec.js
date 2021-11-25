import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import cancel from "./images/cancel.svg"
import Progressbar from "./Progressbar"
import buttonsound from "./Sounds/buttonsound.mp3"
import SchoolBus from "./data/SchoolBus"
import cap from "./images/cap.svg"
import hot from "./images/hot.svg"
import cold from "./images/cold.svg"
import rainy from "./images/rainy.svg"
import cloudy from "./images/cloudy.svg"
import windy from "./images/windy.svg"
import sunny from "./images/sunny.svg"
import Fireworks from "./data/Fireworks"
import DancingAnimal from "./data/DancingAnimal"


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


class Grammarlec extends React.Component{
    state={
        i: 0,
        k: 0,
        q: 0,
        audio: new Audio(buttonsound),
        progy: 0,
        text: "Next slide"
    }
    newInfo=()=>{
        // this.setState({i: this.state.i +1});
        this.setState({k: this.state.k +1});
        this.state.audio.play();
        this.setState({progy: this.state.progy +10});
        if(this.state.k>8){this.setState({text: "Finish"})}
    }
    prevInfo=()=>{
        this.setState({k: this.state.k -1});
        this.setState({progy: this.state.progy -10});
        this.setState({text: "Next slide"})
    }

    Intro =()=>{
        return(
            <div className="gintro-container">
                <div className="gintro-head">This lecture trip you are on will cover:</div> 
                
                <div className="gintro-container2">
                    <div className="gintro-stuff">
                        - Adjectives (Ajẹtífù)<br/>- Adverbs (Èpón)<br/>- Nouns (Orúkọ)<br/>
                        - Pronouns (Àrọpò Orúkọ)<br/> - Verbs (Òrò ìse) in Yoruba. 
                    </div>
                    <div className="school"><SchoolBus /></div>
                </div>
            </div>
        )
    }
    Adjective=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">What is an Adjective (Ajẹtífù)?</div>
                
                <div className="gadject-stuff">
                    <div className="gadject-body">
                        An Adjective simply is a word that gives an attribute to a noun.
                        Adjectives are words that tell us the qualities or details about a noun. <br/>
                        For example;
                    </div>
                    <div className="gadject-example1">
                        <div className="gadject-textex">
                            <div className="gadject-eng">a BLACK cap</div>
                            <div className="gadject-yor">fìlà DÚDÚ</div>
                        </div>
                        <img className="cap" src={cap} />
                    </div>
                    <div className="gadject-footer">
                        The Adjective is BLACK (DÚDÚ), it gives the noun cap (fìlà) a quality of color
                    </div>
                    <div className="gadject-footer">
                        On our trip we will be learning Adjective of color, weather, shape and sizes.
                    </div>
                </div>
                
            </div>
        )
    }

    AdjectiveColor=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">Adjectives of color:</div>
                
                <div className="gadject-stuff2">
                    <div className="colors">
                        <div className="color-contain">
                            <div className="color1"></div>
                            <div className="color-text">dúdú (black)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color2"></div>
                            <div className="color-text">funfun (white)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color3"></div>
                            <div className="color-text">àwọ̀ ojú ọ̀run (blue)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color4"></div>
                            <div className="color-text">pupa (red)</div>
                        </div>
                    </div>

                    <div className="colors">
                        <div className="color-contain">
                            <div className="color5"></div>
                            <div className="color-text">awọ pupa fẹẹrẹ (pink)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color6"></div>
                            <div className="color-text">àwọ̀ ewé (green)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color7"></div>
                            <div className="color-text">pupa rusurusu (yellow)</div>
                        </div>
                        <div className="color-contain">
                            <div className="color8"></div>
                            <div className="color-text">àwọ̀ igi (brown)</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    AdjectiveWeather=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">Adjectives of weather:</div>
                
                <div className="gadject-stuff2">
                    <div className="colors">
                        <div className="image-weather">
                            <img className="weather" src={hot} />
                            <div className="weather-text">gbóná (hot)</div>
                        </div>
                        <div className="image-weather">
                            <img className="weather" src={cold} />
                            <div className="weather-text">tutù (cold)</div>
                        </div>
                        <div className="image-weather">
                            <img className="weather" src={rainy} />
                            <div className="weather-text">igba òjo (rainy)</div>
                        </div>
                    </div>

                    <div className="colors">
                        <div className="image-weather">
                            <img className="weather" src={cloudy} />
                            <div className="weather-text">ṣù (cloudy)</div>
                        </div>
                        <div className="image-weather">
                            <img className="weather" src={sunny} />
                            <div className="weather-text">oòrùn mú (sunny)</div>
                        </div>
                        <div className="image-weather">
                            <img className="weather" src={windy} />
                            <div className="weather-text">afẹfẹ (windy)</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    AdjectiveSize=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">Adjectives of shape and size:</div>

                <table className="shape">
                    <tr>
                        <td>big</td>
                        <td>small</td>
                        <td>long</td>
                        <td>short</td>
                        <td>narrow</td>
                        <td>wide</td>
                        <td>thick</td>
                        <td>thin</td>
                    </tr>

                    <tr>
                        <td>ńlá</td>
                        <td>kékeré</td>
                        <td>gùn</td>
                        <td>kúkúrú</td>
                        <td>híhá</td>
                        <td>gbòòrò</td>
                        <td>nípọn</td>
                        <td>títírín</td>
                    </tr>
                </table>

                <table className="shape">
                    <tr>
                        <td>heavy</td>
                        <td>light</td>
                        <td>old</td>
                        <td>young</td>
                        <td>tall</td>
                        <td>round</td>
                        <td>fat</td>
                        <td>smooth</td>
                    </tr>

                    <tr>
                        <td>wúwo</td>
                        <td>fẹlẹfẹlẹ</td>
                        <td>arúgbó</td>
                        <td>ọ̀dọ́</td>
                        <td>ga</td>
                        <td>róbótó</td>
                        <td>sanra</td>
                        <td>dídán</td>
                    </tr>
                </table>
        
            
            </div>

        )
    }
    Adverbs=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">What is an Adverb? (Èpón)</div>
                
                <div className="gadject-stuff">
                    <div className="gadject-body">
                        An Adverb simply is a word that modifies an adjective, verb, or other adverb or a word group <br/>
                        For example;
                    </div>
                    <div className="gadject-example">
                        <div className="gadject-textex">
                            <div className="gadject-eng">YESTERDAY was my birthday</div>
                            <div className="gadject-yor">ÀNÁ ní ọjó-ìbí mí</div>
                        </div>
                        <div className="gadject-textex">
                            <div className="gadject-eng">Bolu is VERY tall</div>
                            <div className="gadject-yor">Bolu ga PUPỌ</div>
                        </div>
                    </div>
                    <div className="gadject-footer">
                        The adverbs are ÀNÁ and PUPỌ, it modifies the preposition was (ní) and adjective tall (ga)
                    </div>
                    <div className="gadject-footer">
                        On our trip we will be learning Adverb of time, manner and place
                    </div>
                </div>
                
            </div>
        )  
    }
    Adverbs2=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">Adverbs examples:</div>
                <div className="table-adverb">
                Adverb of time
                <table className="adverb">
                    <tr>
                        <td>today</td>
                        <td>yesterday</td>
                        <td>tonight</td>
                        <td>tomorrow</td>
                        <td>now</td>
                        <td>then</td>
                        <td>later</td>
                        <td>soon</td>
                    </tr>
                    <tr>
                        <td>èní</td>
                        <td>àná </td>
                        <td>alẹ́ òní</td>
                        <td>ọla</td>
                        <td>nisin</td>
                        <td>nígbà náà</td>
                        <td>lẹ́yìn náà</td>
                        <td>náà</td>
                    </tr>
                </table>
               
                Adverb of manner
                <table className="adverb">
                    <tr>
                        <td>very</td>
                        <td>pretty</td>
                        <td>fast</td>
                        <td>hardly</td>
                        <td>carefully</td>
                        <td>slowly</td>
                        <td>mostly</td>
                        <td>quickly</td>
                    </tr>

                    <tr>
                        <td>pupọ</td>
                        <td>rẹwà</td>
                        <td>yára</td>
                        <td>bẹ́ẹ̀ kò</td>
                        <td>fara balẹ̀</td>
                        <td>díẹ̀díẹ̀</td>
                        <td>ọ̀pọ̀ jù lọ</td>
                        <td>kíákíá</td>                   
                    </tr>
                </table>
            
                Adverb of place
                <table className="adverb">
                    <tr>
                        <td>here</td>
                        <td>there</td>
                        <td>nowhere</td>
                        <td>home</td>
                        <td>everywhere</td>
                        <td>out</td>
                        <td>anywhere</td>
                        <td>behind</td>
                    </tr>

                    <tr>
                        <td>ibí</td>
                        <td>ibẹ̀</td>
                        <td>kòsíbì</td>
                        <td>ilé </td>
                        <td>nibi gbogbo</td>
                        <td>jáde</td>
                        <td>nibi gbogbo</td>
                        <td>sẹhin </td>
                    </tr>
                </table>
                </div>
            
            </div>

        )
    }
    Nouns=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">What is a Noun (Orúkọ)?</div>
                
                <div className="gadject-stuff">
                    <div className="gadject-body">
                        A noun simply is a word that is the name of a person, animal, place, or thing <br/>
                        For example;
                    </div>

                    <table className="adverb">
                    <tr>
                        <td>Bolu</td>
                        <td>car</td>
                        <td>cow</td>
                        <td>dog</td>
                        <td>school</td>
                        <td>church</td>
                        <td>mosque</td>
                        <td>hospital</td>
                    </tr>
                    <tr>
                        <td>Bolu</td>
                        <td>ọkọ̀</td>
                        <td>màlúù</td>
                        <td>ajá</td>
                        <td>ilé ìwé</td>
                        <td>ṣọọṣi</td>
                        <td>mọ́ṣálásí</td>
                        <td>ilé ìwòsàn</td>
                    </tr>
                </table>

                <table className="noun">
                    <tr>
                        <td>january</td>
                        <td>bed</td>
                        <td>father</td>
                        <td>mother</td>
                        <td>shoe</td>
                        <td>hand</td>
                        <td>yoruba</td>
                        <td>gbenga</td>
                    </tr>
                    <tr>
                        <td>oṣù kínní</td>
                        <td>ibùsùn</td>
                        <td>bàbá</td>
                        <td>iye</td>
                        <td>bàtà</td>
                        <td>ọwọ́</td>
                        <td>yorùbá </td>
                        <td>gbenga</td>
                    </tr>
                </table>

                
                        
                    
                </div>
                
            </div>
        ) 
    }
    Pronouns=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">What is a Pronoun (Àrọpò Orúkọ)?</div>
                
                <div className="gadject-stuff">
                    <div className="gadject-body">
                        A pronoun simply is a word that can be used to replace a noun or noun phrase in a sentence  <br/>
                        For example;
                    </div>

                    <table className="adverb">
                    <tr>
                        <td>I</td>
                        <td>me</td>
                        <td>you</td>
                        <td>she</td>
                        <td>he</td>
                        <td>them</td>
                        <td>we</td>
                        <td>they</td>
                    </tr>
                    <tr>
                        <td>emi</td>
                        <td>mi</td>
                        <td>ìwọ</td>
                        <td>òun</td>
                        <td>òun</td>
                        <td>àwọn</td>
                        <td>àwa</td>
                        <td>àwọn</td>
                    </tr>
                </table>

                <table className="noun">
                    <tr>
                        <td>us</td>
                        <td>my</td>
                        <td>his</td>
                        <td>hers</td>
                        <td>their</td>
                        <td>our</td>
                        <td>yours</td>
                        <td>theirs</td>
                    </tr>
                    <tr>
                        <td>àwa</td>
                        <td>mi</td>
                        <td>tòun</td>
                        <td>tòun</td>
                        <td>tàwọn</td>
                        <td>tàwa</td>
                        <td>irẹ</td>
                        <td>tàwọn</td>
                    </tr>
                </table>         
                    
                </div>
                
            </div>
        ) 
    }
    cumProgy=()=>{
        this.props.progy(17)
    }

    Verbs=()=>{
        return(
            <div className="gadject-container">
                <div className="gadject-head">What is a Verb (Òrò ìse)?</div>
                
                <div className="gadject-stuff">
                    <div className="gadject-body">
                        A verb simply is a word that is used to describe an action <br/>
                        For example;
                    </div>

                    <table className="adverb">
                    <tr>
                        <td>shout</td>
                        <td>sleep</td>
                        <td>run</td>
                        <td>jump</td>
                        <td>dance</td>
                        <td>read</td>
                        <td>fight</td>
                        <td>walk</td>
                    </tr>
                    <tr>
                        <td>pariwo</td>
                        <td>orun</td>
                        <td>sá</td>
                        <td>ìkánjú</td>
                        <td>ijó</td>
                        <td>nka</td>
                        <td>jagun</td>
                        <td>ìrìn</td>
                    </tr>
                </table>

                <table className="noun">
                    <tr>
                        <td>smile</td>
                        <td>drive</td>
                        <td>write</td>
                        <td>give</td>
                        <td>take</td>
                        <td>cry</td>
                        <td>laugh</td>
                        <td>sing</td>
                    </tr>
                    <tr>
                        <td>rẹ́rìn-ín</td>
                        <td>wakọ̀</td>
                        <td>kọ</td>
                        <td>fún</td>
                        <td>gbà</td>
                        <td>sunkún</td>
                        <td>ẹ̀rín</td>
                        <td>kọrin</td>
                    </tr>
                </table>         
                    
                </div>
                
            </div>
        ) 
    }
   

    render(){
    return (
        <div className="lecture" >
                <div className="prog">
                    <NavLink to="/" exact><img id='cancel' src={cancel} /></NavLink>
                    <Progressbar bgcolor="#ff0099" completed={this.state.progy} />
                </div> 
                <div className="lecture-content">
                   
                    <div className="lecture-stuff">
                        {this.state.k<1?
                            this.Intro()
                        : this.state.k<2?
                            this.Adjective()
                        :this.state.k<3?
                            this.AdjectiveColor()
                        :this.state.k<4?
                            this.AdjectiveWeather()
                        :this.state.k<5?
                            this.AdjectiveSize()
                        :this.state.k<6?
                            this.Adverbs()
                        :this.state.k<7?
                            this.Adverbs2()
                        :this.state.k<8?
                            this.Nouns()
                        :this.state.k<9?
                            this.Pronouns()
                        :this.state.k<10?
                            this.Verbs()
                        : <Endlecture />
                        }
                    </div>
                    
               
                </div>
                {this.state.k<10? <div className="btn-container">
        <button className="btn2" disabled={this.state.k<1? true: false} onClick={()=>this.prevInfo()}>
            <span id="spann"  >Previous</span>
        </button>
        
        <button className="btn" disabled={this.state.k>9? true: false} onClick={()=>this.newInfo()}>
            <span id="spann"  >{this.state.text}</span>
        </button>
        </div>
        : <NavLink className="test-btn" to="/" className="test-btn" activeclassName="test-btn" exact="/" onClick={()=>this.cumProgy()}>
        <span id="spann">Finish</span>
    </NavLink>}
            </div>
    )
    }
}

export default Grammarlec
