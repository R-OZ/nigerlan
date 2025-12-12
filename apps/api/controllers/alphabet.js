const { BASE_URL } = require('../config/constants')

const alphabet = async (req, res) =>{
    const AUDIO_PATH = "audio/AlphabetsPro"
    try {
        const data = {
            lecTxt: "There are twenty five (25) alphabets in Yoruba language. These are:",
            lecBody: [
                [
                  {
                      capital: "A",
                      small: "a",
                      pronounce:"ahh",
                      sound: `${BASE_URL}/${AUDIO_PATH}/a.mp3`
                  },
                  {
                      capital:"B",
                      small:"b",
                      pronounce:"bee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/b.mp3`
                  },
                  {
                      capital:"D",
                      small:"d",
                      pronounce:"dee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/d.mp3`
                      
                  },
                  {
                      capital:"E",
                      small:"e",
                      pronounce:"hay",
                      sound: `${BASE_URL}/${AUDIO_PATH}/e.mp3`
                  },  
                  {
                      capital:"Ẹ",
                      small: "ẹ",
                      pronounce:"eh",
                      sound: `${BASE_URL}/${AUDIO_PATH}/e2.mp3`
                  },
                  {
                      id:6,
                      capital:"F",
                      small:"f",
                      pronounce:"fee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/f.mp3`
                  },
                  {
                      capital:"G",
                      small:"g",
                      pronounce:"gee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/g.mp3`
                  },
                  {
                      capital:"Gb",
                      small:"gb",
                      pronounce:"gbh",
                      sound: `${BASE_URL}/${AUDIO_PATH}/gbh.mp3`
                  },
                  {
                      capital: "H",
                      small:"h",
                      pronounce:"hee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/h.mp3`
                  },
                  {
                      capital: "I",
                      small:"i",
                      pronounce:"ee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/i.mp3`
                  },
                  {
                      capital: "J",
                      small:"j",
                      pronounce:"jee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/j.mp3`
                  },
                  {
                      capital:"K",
                      small:"k",
                      pronounce:"key",
                      sound: `${BASE_URL}/${AUDIO_PATH}/k.mp3`
                  },
                  {
                      capital:"L",
                      small:"l",
                      pronounce:"lee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/l.mp3`
                  }
                ],
                [
                  {
                      capital:"M",
                      small:"m",
                      pronounce:"mee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/m.mp3`
                  },
                  {
                      capital:"N",
                      small:"n",
                      pronounce:"nee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/n.mp3`
                  },
                  {
                      capital:"O",
                      small:"o",
                      pronounce:"oh",
                      sound: `${BASE_URL}/${AUDIO_PATH}/o.mp3`
                  },
                  {
                      capital:"Ọ",
                      small:"ọ",
                      pronounce:"or",
                      sound: `${BASE_URL}/${AUDIO_PATH}/o2.mp3`
                  },
                  {
                      capital:"P",
                      small:"p",
                      pronounce:"pee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/p.mp3`
                  },
                  {
                      capital:"R",
                      small:"r",
                      pronounce:"ree",
                      sound: `${BASE_URL}/${AUDIO_PATH}/r.mp3`
                  },
                  {
                      capital:"S",
                      small:"s",
                      pronounce:"see",
                      sound: `${BASE_URL}/${AUDIO_PATH}/s.mp3`
                  },
                  {
                      capital:"Ṣ",
                      small:"ṣ",
                      pronounce:"she",
                      sound: `${BASE_URL}/${AUDIO_PATH}/s2.mp3` 
                  },
                  {
                      capital:"T",
                      small:"t",
                      pronounce:"tea",
                      sound: `${BASE_URL}/${AUDIO_PATH}/t.mp3`
                  },
                  {
                      capital:"U",
                      small:"u",
                      pronounce:"ooh",
                      sound: `${BASE_URL}/${AUDIO_PATH}/u.mp3`
                  },
                  {
                      capital:"W",
                      small:"w",
                      pronounce:"wee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/w.mp3`
                  },
                  {
                      capital:"Y",
                      small:"y",
                      pronounce:"yee",
                      sound: `${BASE_URL}/${AUDIO_PATH}/y.mp3`
                  }
                ]
            ],
            isTest: false,
            progyColor: "#EE2929",
            test1:[],
            test2:[]
        }
        console.log('SUCCESS!! => Alphabets Lecture')
        res.json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
        
    }
}

module.exports = alphabet