import { DiceAtom, isAnimateAtom } from "./store";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Canvas from "./Game/canvas";

function App() {
  return (
    <div className="App">
      <h1>Snake and ladder Game</h1>
      <div className="con">
        <RecoilRoot>
        <Canvas></Canvas>
          <Dice />
          </RecoilRoot>
      </div>
    </div>
  );
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

export default App;
