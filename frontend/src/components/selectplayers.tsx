import { useState,useEffect } from "react";
import red from "../assests/red.png";
import blue from "../assests/blue.png";
import green from "../assests/green.png";
import yellow from "../assests/yellow.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { playersAtom } from "../store";

interface SelectPlayerBoxProps {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const SelectPlayerBox: React.FC<SelectPlayerBoxProps> = ({ setStart }) => {
  const [selectPlayers,setSelectPlayers] = useRecoilState(playersAtom);
  
  function HandleSelectPlayers(color: string) {
    if (selectPlayers.some(pl => pl === color)) {
   setSelectPlayers(prevPlayers => prevPlayers.filter(player => player !== color));
    } else {
     setSelectPlayers(prevPlayers => [...prevPlayers, color]);
    }
    console.log(selectPlayers);
    
  }
  
  return (
    <div>
      <div className='w-100 flex justify-center py-5 gap-3'>
          <SvgPlayer color='red'    handleSelectPlayer={HandleSelectPlayers} />
          <SvgPlayer color='blue'   handleSelectPlayer={HandleSelectPlayers} />
          <SvgPlayer color='green'  handleSelectPlayer={HandleSelectPlayers}/>
          <SvgPlayer color='yellow' handleSelectPlayer={HandleSelectPlayers}/>
      </div>
            <button type="button" onClick={()=>setStart(true)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Start Game</button>
    </div>
  );
}
interface SvgPlayerProps {
  color: string;
  handleSelectPlayer:(color:string)=>void;
}

const SvgPlayer: React.FC<SvgPlayerProps> = ({ color,handleSelectPlayer }) => {
  const [flag, setFlag] = useState(false);
  const selectPlayers = useRecoilValue(playersAtom);
  
  useEffect(() => {
    if (selectPlayers.some(sp => sp === color)) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [selectPlayers, color])
        
function src():string{
        if (color === "red") return red;
        else if (color === 'blue') return blue;
        else if (color === 'green') return green;
        else return yellow;       
}
        

return (
<img src={src()} alt={color} className={(flag?'svg-player':"")+ " player"} onClick={()=>{handleSelectPlayer(color)}}/>
)
}

export {SelectPlayerBox}