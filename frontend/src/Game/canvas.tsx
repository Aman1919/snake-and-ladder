import { useEffect, useRef, useState } from "react"
import Game from "./game";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DiceAtom, isAnimateAtom } from "../store";

export default function Canvas() {
       const canvasRef = useRef<HTMLCanvasElement>(null)
        const DiceNumber = useRecoilValue(DiceAtom)
        const [game, setGame] = useState<null | Game>(null)
        const setAnimate = useSetRecoilState(isAnimateAtom);
        useEffect(() => {
               if(!canvasRef.current) return
                const canvas = canvasRef.current;
                canvas.width = Math.min(window.innerWidth*0.9,700)
                canvas.height = Math.min(window.innerWidth*0.9,700)
                const ctx = canvas.getContext('2d');
                if (!ctx) return
                const g = new Game(ctx, canvas);
                setGame(g);
        }, [canvasRef])
        
        useEffect(() => {
                if (!game||DiceNumber===0) return;
                game.DiceRolled(DiceNumber);
                setAnimate(game.isAnimating());
        },[DiceNumber, game, setAnimate])
        
        
        return <canvas ref={canvasRef}></canvas>
}