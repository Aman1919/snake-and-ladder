import { DiceAtom, isAnimateAtom, playersAtom, turnAtom } from "./store";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Canvas from "./Game/canvas";

type offlinetype = {noOfPlayers: number}

export default function OfflineGame({ noOfPlayers }:offlinetype) {
        
        return (
<div className="con">
        <RecoilRoot>
          <PlayerTurn/>
          <Canvas noOfPlayers={noOfPlayers}></Canvas>
          <Dice />
        </RecoilRoot>
      </div>
)
}



const Dice = () => {
  const [num, setNum] = useRecoilState(DiceAtom);
  const isAnimate = useRecoilValue(isAnimateAtom)
   function Roll() {
     if (isAnimate) return;
     const a = Math.floor(Math.random() * 6) + 1;
     setNum(a);
        }
  return (
    <div>
      <p>Roll Number: { num}</p> 
    <button onClick={Roll}>Roll</button>
    </div>
)
}

const PlayerTurn = () => {
  const turn = useRecoilValue(turnAtom);
  const players = useRecoilValue(playersAtom);
  return (
    <div className="players-turn">
    Players & Turn:
      <div>
        {players.map((p,i) => {
          return <h2 style={{ color: (p.color===turn)?turn:"white" }}>{ p.username + " " + (i+1)}</h2>
        })}
      </div>
    </div>
)
}
