import React from "react"
import hair from "./images/body/hair.svg"
import head from "./images/body/head.svg"
import ear from "./images/body/ear.svg"
import eye from "./images/body/eye.svg"
import nose from "./images/body/nose.svg"
import mouth from "./images/body/mouth.svg"
import neck from "./images/body/neck.svg"
import shoulder from "./images/body/shoulder.svg"
import chest from "./images/body/chest.svg"
import arm from "./images/body/arm.svg"
import hand from "./images/body/hand.svg"
import finger from "./images/body/finger.svg"
import belly from "./images/body/belly.svg"
import back from "./images/body/back.svg"
import waist from "./images/body/waist.svg"
import butt from "./images/body/butt.svg"
import leg from "./images/body/leg.svg"
import toes from "./images/body/toes.svg"
import knee from "./images/body/knee.svg"
import tongue from "./images/tongue.svg"
import longhair from "./Sounds/BodyPro/longhair.mp3"
import longhead from "./Sounds/BodyPro/longhead.mp3"
import longear from "./Sounds/BodyPro/longear.mp3"
import longeye from "./Sounds/BodyPro/longeye.mp3"
import longnose from "./Sounds/BodyPro/longnose.mp3"
import longmouth from "./Sounds/BodyPro/longmouth.mp3"
import longtongue from "./Sounds/BodyPro/longtongue.mp3"
import longneck from "./Sounds/BodyPro/longneck.mp3"
import longshoulder from "./Sounds/BodyPro/longshoulder.mp3"
import longchest from "./Sounds/BodyPro/longchest.mp3"
import longarm from "./Sounds/BodyPro/longarm.mp3"
import longhand from "./Sounds/BodyPro/longhand.mp3"
import longfinger from "./Sounds/BodyPro/longfinger.mp3"
import longbelly from "./Sounds/BodyPro/longstomach.mp3"
import longwaist from "./Sounds/BodyPro/longwaist.mp3"
import longback from "./Sounds/BodyPro/longback.mp3"
import longbutt from "./Sounds/BodyPro/longbutt.mp3"
import longleg from "./Sounds/BodyPro/longleg.mp3"
import longknee from "./Sounds/BodyPro/longknee.mp3"
import longtoes from "./Sounds/BodyPro/longtoes.mp3"


const BodyData =[
    [{
        image1: <img className="body-image" src={hair} />,
        yor1: "Irun",
        eng1: "(hair)",
        sound1: new Audio(longhair),

        image2: <img className="body-image" src={head} />,
        yor2: "Orí",
        eng2: "(head)",
        sound2: new Audio(longhead),

    }],
    [{
        image1: <img className="body-image" src={ear} />,
        yor1: "Etí",
        eng1: "(ear)",
        sound1: new Audio(longear),

        image2: <img className="body-image" src={eye} />,
        yor2: "Ojú",
        eng2: "(eye)",
        sound2: new Audio(longeye),

    }],
    [{
        image1: <img className="body-image" src={nose} />,
        yor1: "Imú",
        eng1: "(nose)",
        sound1: new Audio(longnose),


        image2: <img className="body-image" src={mouth} />,
        yor2: "Ẹnu",
        eng2: "(mouth)",
        sound2: new Audio(longmouth),

    }],
    [{
        image1: <img className="body-image" src={tongue} />,
        yor1: "Ahọ́n",
        eng1: "(tongue)",
        sound1: new Audio(longtongue),

        image2: <img className="body-image" src={neck} />,
        yor2: "Ọrùn",
        eng2: "(neck)",
        sound2: new Audio(longneck),

    }],
    [{
        image1: <img className="body-image" src={shoulder} />,
        yor1: "Èjìká",
        eng1: "(shoulder)",
        sound1: new Audio(longshoulder),
        
        image2: <img className="body-image" src={chest} />,
        yor2: "Àyà",
        eng2: "(chest)",
        sound2: new Audio(longchest),

    }],
    [{
        image1: <img className="body-image" src={arm} />,
        yor1: "Apá",
        eng1: "(arm)",
        sound1: new Audio(longarm),


        image2: <img className="body-image" src={hand} />,
        yor2: "Ọwọ́",
        eng2: "(hand)",
        sound2: new Audio(longhand),

    }],
    [{
        image1: <img className="body-image" src={finger} />,
        yor1: "Ìka-ọwọ́",
        eng1: "(finger)",
        sound1: new Audio(longfinger),

        
        image2: <img className="body-image" src={belly} />,
        yor2: "Ikùn",
        eng2: "(stomach)",
        sound2: new Audio(longbelly),

    }],
    [{
        image1: <img className="body-image" src={waist} />,
        yor1: "Ẹgbẹ-ikùn",
        eng1: "(waist)",
        sound1: new Audio(longwaist),


        image2: <img className="body-image" src={back} />,
        yor2: "Ẹ̀yìn",
        eng2: "(back)",
        sound2: new Audio(longback),

    }],
    [{
        image1: <img className="body-image" src={butt} />,
        yor1: "Ìbàdí",
        eng1: "(buttocks)",
        sound1: new Audio(longbutt),

        
        image2: <img className="body-image" src={leg} />,
        yor2: "Ẹsẹ̀",
        eng2: "(leg)",
        sound2: new Audio(longleg),
    }],
    [{
        image1: <img className="body-image" src={knee} />,
        yor1: "Orúnkún",
        eng1: "(knee)",
        sound1: new Audio(longknee),

        image2: <img className="body-image" src={toes} />,
        yor2: "Ìka-ẹsẹ̀",
        eng2: "(toes)",
        sound2: new Audio(longtoes),
    }]
]

export default BodyData
