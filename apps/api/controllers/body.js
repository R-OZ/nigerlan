const { BASE_URL } = require('../config/constants')

const body = async (req, res) =>{
    const AUDIO_PATH = "audio/BodyPro"
    const IMAGE_PATH = "images/body"
    try {
        const data = {
            lecTxt: "This lecture will cover the parts of the body in Yoruba. Lets get started!",
            progyColor: "#524b7a",
            lecBody:[{
                image1: `${BASE_URL}/${IMAGE_PATH}/hair.svg`,
                yor1: "Irun",
                eng1: "(hair)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longhair.mp3`,
        
                image2: `${BASE_URL}/${IMAGE_PATH}/head.svg`,
                yor2: "Orí",
                eng2: "(head)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longhead.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/ear.svg`,
                yor1: "Etí",
                eng1: "(ear)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longear.mp3`,
        
                image2: `${BASE_URL}/${IMAGE_PATH}/eye.svg`,
                yor2: "Ojú",
                eng2: "(eye)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longeye.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/nose.svg`,
                yor1: "Imú",
                eng1: "(nose)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longnose.mp3`,
        
        
                image2: `${BASE_URL}/${IMAGE_PATH}/mouth.svg`,
                yor2: "Ẹnu",
                eng2: "(mouth)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longmouth.mp3`,
        
            },
            {
                image1: `${BASE_URL}/images/tongue.svg`,
                yor1: "Ahọ́n",
                eng1: "(tongue)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longlongtongue.mp3`,
        
                image2: `${BASE_URL}/${IMAGE_PATH}/neck.svg`,
                yor2: "Ọrùn",
                eng2: "(neck)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longlongneck.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/shoulder.svg`,
                yor1: "Èjìká",
                eng1: "(shoulder)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longlongshoulder.mp3`,
                
                image2: `${BASE_URL}/${IMAGE_PATH}/chest.svg`,
                yor2: "Àyà",
                eng2: "(chest)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longchest.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/arm.svg`,
                yor1: "Apá",
                eng1: "(arm)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longarm.mp3`,
        
        
                image2: `${BASE_URL}/${IMAGE_PATH}/hand.svg`,
                yor2: "Ọwọ́",
                eng2: "(hand)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longhand.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/finger.svg`,
                yor1: "Ìka-ọwọ́",
                eng1: "(finger)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longfinger.mp3`,
        
                
                image2: `${BASE_URL}/${IMAGE_PATH}/belly.svg`,
                yor2: "Ikùn",
                eng2: "(stomach)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longstomach.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/waist.svg`,
                yor1: "Ẹgbẹ-ikùn",
                eng1: "(waist)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longwaist.mp3`,
        
        
                image2: `${BASE_URL}/${IMAGE_PATH}/back.svg`,
                yor2: "Ẹ̀yìn",
                eng2: "(back)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longback.mp3`,
        
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/butt.svg`,
                yor1: "Ìbàdí",
                eng1: "(buttocks)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longbutt.mp3`,
        
                
                image2: `${BASE_URL}/${IMAGE_PATH}/leg.svg`,
                yor2: "Ẹsẹ̀",
                eng2: "(leg)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longleg.mp3`,
            },
            {
                image1: `${BASE_URL}/${IMAGE_PATH}/knee.svg`,
                yor1: "Orúnkún",
                eng1: "(knee)",
                sound1: `${BASE_URL}/${AUDIO_PATH}/longknee.mp3`,
        
                image2: `${BASE_URL}/${IMAGE_PATH}/toes.svg`,
                yor2: "Ìka-ẹsẹ̀",
                eng2: "(toes)",
                sound2: `${BASE_URL}/${AUDIO_PATH}/longtoes.mp3`,
            }],
            isTest: true,
            test1Text: "What body part is this?",
            test2Text: "What body part do you hear?",
            test1: [
                { question:["ọwọ́", "ikùn", "àyà"].sort(() => Math.random() - 0.5),
                    display: `${BASE_URL}/${IMAGE_PATH}/hand.svg`},
                { question:["ẹsẹ̀", "èjìká", "apá"].sort(() => Math.random() - 0.5),
                    display: `${BASE_URL}/${IMAGE_PATH}/leg.svg`},
                { question:["etí", "orúnkún", "ọrùn"].sort(() => Math.random() - 0.5),
                    display: `${BASE_URL}/${IMAGE_PATH}/ear.svg`},
                { question:["imú", "irun", "ojú"].sort(() => Math.random() - 0.5),
                    display: `${BASE_URL}/${IMAGE_PATH}/nose.svg`},
                { question:["ìka-ẹsẹ̀", "ahọ́n", "ìbàdí"].sort(() => Math.random() - 0.5),
                    display: `${BASE_URL}/${IMAGE_PATH}/toes.svg`}
            ],
            test2: [
            { question: ["head", "ear","hair"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/head.mp3`},
            { question: ["mouth","neck","nose"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/mouth.mp3`},
            { question: ["back","waist","butt"].sort(() => Math.random() - 0.5),
                sound: `${BASE_URL}/${AUDIO_PATH}/butt.mp3`},
            ],
            answers: ["ọwọ́", "ẹsẹ̀", "etí", "imú", "ìka-ẹsẹ̀", "head", "mouth", "back"],
        }
        console.log('SUCCESS!! => Body Lecture')
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
        
    }
}

module.exports = body