import { useEffect, useRef, useState } from "react"
import Game from "./game";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DiceAtom, isAnimateAtom, playersAtom, turnAtom } from "../store";

export default function Canvas() {
       const canvasRef = useRef<HTMLCanvasElement>(null)
        const DiceNumber = useRecoilValue(DiceAtom)
        const [game, setGame] = useState<null | Game>(null)
        const setAnimate = useSetRecoilState(isAnimateAtom);
        const setPlayers = useSetRecoilState(playersAtom);
        const setTurn = useSetRecoilState(turnAtom)
        useEffect(() => {
               if(!canvasRef.current) return
                const canvas = canvasRef.current;
                canvas.width = Math.min(window.innerWidth*0.9,670)
                canvas.height = Math.min(window.innerWidth*0.9,670)
                const ctx = canvas.getContext('2d');
                if (!ctx) return
                
                const g = new Game(ctx, canvas);
                setPlayers(g.getPlayers())
                setTurn(g.getTurnPlayer());
                setGame(g);
        }, [canvasRef])
        
        useEffect(() => {
                if (!game||DiceNumber===0) return;
                game.DiceRolled(DiceNumber);
                setAnimate(game.isAnimating());
                setPlayers(game.getPlayers())
                setTurn(game.getTurnPlayer());
        },[DiceNumber, game, setAnimate, setPlayers, setTurn])
        
        
        return <canvas ref={canvasRef}></canvas>
}