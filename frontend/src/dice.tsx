import { useRecoilState } from "recoil";
import { diceNumberAtom } from "./store";


export default function Dice() {
        const [num,setNum] = useRecoilState(diceNumberAtom) 
        const dotPositionMatrix: { number: number[][] } = {
                0:  [
			[20, 20],
			[80, 80]
		],
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};
        
        function GetRandomNum() {
                return Math.floor(Math.random() * 6) + 1;
        }
        
        function addDots() {
                const dice = document.querySelector('.dice');
if(!dice)return             
                dice.innerHTML = ''; 
                for (const dots  of dotPositionMatrix[num]) {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        dot.style.setProperty('--top',dots[0]+'%')
                        dot.style.setProperty('--left',dots[1]+'%')
                dice.appendChild(dot)
                }
        }
        
        function OnClick() {
           setNum(GetRandomNum())
                addDots()
        }
        
        return (
                <button className="dice my-4" onClick={OnClick} ref={addDots}></button>
        )
}