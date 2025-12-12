import React from 'react'
import BrainAnim from '../../data/BrainAnim'

const NumExtra = ({type}) => {

  if(type === "addition"){
    return (
    <div className="num-extra-container">
        <p id="num-extra-title">
            Numbers between tens that are in the range of the fifth to the ninth number, e.g [(25 to 29), (15 to 19), (65 to 69)], are named using this rule:
        </p>
        <div className="num-extra-body">
            <div className="num-extra-txt-contain">
                <p id="num-txt">
                    The intial Tens plus (+) the number to be added <br/> e.g &nbsp;&nbsp;42 is 2 + 40  ;&nbsp;  74 is 4 + 70<br/>
                    In yoruba this is:
                </p>
                <div className="numtxt-contain">
                    <div className="numtxt1">
                        42 is &nbsp;<span className="num1">méjì</span>le<span className="num2">ogójì</span>
                        <p className="mini-example-type"><span className="num1">méjì</span>&nbsp;is 2 in Yoruba<br/></p>
                        <p className="mini-example-type"><span className="num2">ogójì</span>&nbsp;is 40 in Yoruba</p>
                    </div>
                    <div className="numtxt1">
                        74 is &nbsp;<span className="num1">ẹ̀rin</span>le<span className="num2">àádọ́rin</span>
                        <p className="mini-example-type"><span className="num1">ẹ̀rin</span>&nbsp;is 4 in Yoruba<br/></p>
                        <p className="mini-example-type"><span className="num2">àádọ́rin</span>&nbsp;is 70 in Yoruba</p>                
                    </div>
                </div>
    
            </div>

            <div className="num-brain"><BrainAnim/></div>
        </div>
        
    </div>
  )}
  else{
    return (
        <div className="num-extra-container">
            <p id="num-extra-title">
                Numbers between tens that are in the range of the fifth to the ninth number, e.g [(25 to 29), (15 to 19), (65 to 69)], are named using this rule:
            </p>
            <div className="num-extra-body">
                <div className="num-extra-txt-contain">
                    <p id="num-txt">
                        The next Tens minus (-) the number to give the desired number to be named <br/> e.g &nbsp;&nbsp;37 is 40 - 3  ;&nbsp;  85 is 90 - 5<br/>
                        In yoruba this is:
                    </p>
                    <div className="numtxt-contain">
                        <div className="numtxt1">
                            37 is &nbsp;<span className="num1">mẹ̀ta</span>dil<span className="num2">ogójì</span>
                            <p className="mini-example-type"><span className="num1">mẹ̀ta</span>&nbsp;is 3 in Yoruba<br/></p>
                            <p className="mini-example-type"><span className="num2">ogójì</span>&nbsp;is 40 in Yoruba</p>
                        </div>
                        <div className="numtxt1">
                            85 is &nbsp;<span className="num1">màrún</span>dil<span className="num2">àádọ́rin</span>
                            <p className="mini-example-type"><span className="num1">ẹ̀rin</span>&nbsp;is 4 in Yoruba<br/></p>
                            <p className="mini-example-type"><span className="num2">àádọ́run</span>&nbsp;is 70 in Yoruba</p>                
                        </div>
                    </div>
                    
                </div>
    
                <div className="num-brain"><BrainAnim/></div>
            </div>
        </div>
      )
  }
}

export default NumExtra