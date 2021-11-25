import React from 'react'
import shoe from "./images/shoe.svg"
import mirror from "./images/mirror.svg"
import flute from "./images/flute.svg"
import pen from "./images/pen.svg"
import corn from "./images/corn.svg"
import tongue from "./images/tongue.svg"
import sunglasses from "./images/sunglasses.svg"
import lion from "./images/lion.svg"
import butterfly from "./images/butterfly.svg"
import cow from "./images/cow.svg"
import nurse from "./images/nurse.svg"
import shout from "./images/shout.svg"
import camel from "./images/camel.svg"
import orange from "./images/orange.svg"
import trousers from "./images/trousers.svg"
import table from "./images/table.svg"
import milk from "./images/milk.svg"
import feather from "./images/feather.svg"
import longb from "./Sounds/ConsonantPro/Long/longb.mp3"
import longd from "./Sounds/ConsonantPro/Long/longd.mp3"
import longf from "./Sounds/ConsonantPro/Long/longf.mp3"
import longg from "./Sounds/ConsonantPro/Long/longg.mp3"
import longgb from "./Sounds/ConsonantPro/Long/longgb.mp3"
import longh from "./Sounds/ConsonantPro/Long/longh.mp3"
import longj from "./Sounds/ConsonantPro/Long/longj.mp3"
import longk from "./Sounds/ConsonantPro/Long/longk.mp3"
import longl from "./Sounds/ConsonantPro/Long/longl.mp3"
import longm from "./Sounds/ConsonantPro/Long/longm.mp3"
import longn from "./Sounds/ConsonantPro/Long/longn.mp3"
import longp from "./Sounds/ConsonantPro/Long/longp.mp3"
import longr from "./Sounds/ConsonantPro/Long/longr.mp3"
import longs from "./Sounds/ConsonantPro/Long/longs.mp3"
import longs2 from "./Sounds/ConsonantPro/Long/longs2.mp3"
import longt from "./Sounds/ConsonantPro/Long/longt.mp3"
import longw from "./Sounds/ConsonantPro/Long/longw.mp3"
import longy from "./Sounds/ConsonantPro/Long/longy.mp3"



const ConsData = [
    [{
        capital: "B",
        small: "b",
        pronounce: "bee",
        image: <img className="cons-image" src={shoe} />,
        example: "àtà (Shoe)",
        sound1: new Audio(longb),
        
        capital2: "D",
        small2: "d",
        pronounce2: "dee",
        image2: <img className="cons-image" src={mirror} />,
        example2: "ígí (Mirror)",
        sound2: new Audio(longd),
    }],
    [{
        capital: "F",
        small: "f",
        pronounce: "fee",
        image: <img className="cons-image" src={flute} />,
        example: "èrè (Flute)",
        sound1: new Audio(longf),

        
        capital2: "G",
        small2: "g",
        pronounce2: "gee",
        image2: <img className="cons-image" src={pen} />,
        example2: "ègé (Pen)",
        sound2: new Audio(longg)
    
    }],
    [{
        capital: "Gb",
        small: "gb",
        pronounce: "gbh",
        image: <img className="cons-image" src={corn} />,
        example: "À",
        examplem: "ado (Corn)",
        sound1: new Audio(longgb),
        
        capital2: "H",
        small2: "h",
        pronounce2: "hee",
        image2: <img className="cons-image" src={tongue} />,
        example2: "A",
        examplem2: "ọ́n (Tongue)",
        sound2: new Audio(longh),
    
    }],
    [{
        capital: "J",
        small: "j",
        pronounce: "jee",
        image: <img className="cons-image" src={sunglasses} />,
        example: "igi (Sunglasses)",
        sound1: new Audio(longj),
        
        capital2: "K",
        small2: "k",
        pronounce2: "key",
        image2: <img className="cons-image" src={lion} />,
        example2: "ìnìún (Lion)",
        sound2: new Audio(longk),
    
    }],
    [{
        capital: "L",
        small: "l",
        pronounce: "lee",
        image: <img className="cons-image" src={butterfly} />,
        example: "abalábá (Butterfly)",
        sound1: new Audio(longl),
        
        capital2: "M",
        small2: "m",
        pronounce2: "mee",
        image2: <img className="cons-image" src={cow} />,
        example2: "àlúù (Cow)",
        sound2: new Audio(longm),
    
    }],
    [{
        capital: "N",
        small: "n",
        pronounce: "nee",
        image: <img className="cons-image" src={nurse} />,
        example: "ọọsi (Nurse)",
        sound1: new Audio(longn),


        capital2: "P",
        small2: "p",
        pronounce2: "pee",
        image2: <img className="cons-image" src={shout} />,
        example2: "ariwo  (Shout)",
        sound2: new Audio(longp),
    
    }],
    [{
        capital: "R",
        small: "r",
        pronounce: "ree",
        image: <img className="cons-image" src={camel} />,
        example: "àkúnmí (Camel)",
        sound1: new Audio(longr),
        
        capital2: "S",
        small2: "s",
        pronounce2: "see",
        image2: <img className="cons-image" src={orange} />,
        example2: "ọ",
        examplem2: "àn (Orange)",
        sound2: new Audio(longs),

    
    }],
    [{
        capital: "Ṣ",
        small: "ṣ",
        pronounce: "she",
        image: <img className="cons-image" src={trousers} />,
        example: "òkóto (Trousers)",
        sound1: new Audio(longs2),
        
        capital2: "T",
        small2: "t",
        pronounce2: "tea",
        image2: <img className="cons-image" src={table} />,
        example2: "ábìlì (Table)",
        sound2: new Audio(longt),
    
    }],
    [{
        capital: "W",
        small: "w",
        pronounce: "wee",
        image: <img className="cons-image" src={milk} />,
        example: "àrà (Milk)",
        sound1: new Audio(longw),
        
        capital2: "Y",
        small2: "y",
        pronounce2: "yee",
        image2: <img className="cons-image" src={feather} />,
        example2: "i",
        examplem2: "é (Feather)",
        sound2: new Audio(longy),
    
    }],
]

export default ConsData
