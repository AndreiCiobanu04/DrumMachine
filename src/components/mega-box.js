import React, {useState} from 'react'
import Box from './box'

const initialState = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const sounds = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'

]

const soundsAndKeys = initialState.map((key,idx)=>({key , mp3:sounds[idx]}));

const Megabox = () =>{
    const [text, setText] = useState('Play a song')
    return (
        
        <div id="drum-machine" className="container" className="centered">
            <div id="display" className="display">
                <div > 
               {text}
                </div>
                <div className="header">

               
                {soundsAndKeys.map((value, idx)=>(

                    <>
                    <Box setText={setText} text={value.key} key={idx} audio={value.mp3} />
                    
                    </>
                ))}
                </div>
            </div>
        </div>
    )





}

export default Megabox