import React , {useState} from 'react'


const Box = ({text,setText, audio}) => {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const audioref = React.createRef();

   const playSound = () => {
        console.log(audioref);
        audioref.current.play();
        setIsPlaying(true);
        setText(text);
        
    }
    // window.document.getElementById(text).addEventListener('ended', () => {
    //     setIsPlaying(false);
    // })
    
    window.document.addEventListener('keydown', (e) =>{
        const id = e.key.toUpperCase();
        console.log(id);
        const audio = document.getElementById(id);

        if(audio){
            
            audio.play();
            if(id===text){
           setIsPlaying(true);
           setText(id);
            }
           

        }
        
    });
   


    return(
        <>
<div onClick={playSound}  className="drum-pad" id={text+'A'}>
    {text}
    <audio  ref={audioref}  src={audio}  className="clip" id={text}/>
    
</div>
    
    {isPlaying ? <span>{text}</span> : null } 
</>
    )}

    



export default Box;