import { useCallback, useEffect, useRef, useState } from "react"
import Game from "./Game/game";
import { useRecoilValue } from "recoil";
import { diceNumberAtom, playersAtom } from "./store";

// #E4C59E



export default function Canvas() {
        const canvasRef = useRef<null | HTMLCanvasElement>(null);
        const selectedPlayers = useRecoilValue(playersAtom);
        const diceNumber = useRecoilValue(diceNumberAtom);
        const [game, setGame] = useState<Game | null>(null);
        
        useEffect(() => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const context = canvas.getContext('2d');
                canvas.width = Math.min(window.innerWidth * 0.9, 800);
                canvas.height = Math.min(window.innerHeight * 0.9, 800);
                if (!context) return;
                const g = new Game(canvas, context,selectedPlayers);
                setGame(g);
        }, [canvasRef, selectedPlayers])
        
        useEffect(() => {
                
                if (game&& diceNumber!==0) {
                        game.move(diceNumber);
                        
                }
        },[diceNumber,game])
        
return <canvas ref={canvasRef} ></canvas>

}