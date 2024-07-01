import Board from './board';
import Move from './move';
import Player from './player';
import { playersColor } from './utils';

export default class Game{
        Board: Board;
        turn: number = 0;
        move: Move;
        players: Player[] = [];
        constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement,playernumber:number=2) {
                this.Board = new Board(context, canvas);
                this.move = new Move(this.Board);
                this.createPlayer(playernumber);     
        }
        
        createPlayer(pl:number) {
                
                for (let i = 0;i<pl;i++){
                  this.players.push(new Player(playersColor[i],this.Board.Squares[0].position,this.Board.canvas_module))
                }
                this.players.forEach(pl => {
                this.Board.Squares[0].addPlayer(pl)
                })
        }
        
        DiceRolled(DiceNumber: number) {
                const player = this.players[this.turn]
                const pos = player.position.num + DiceNumber;
                if (pos > 100) {
                        return; 
                }
                if (pos === 100) {
                alert(player.color + " : won")
                }
                this.move.move(player,DiceNumber);
                this.ChangeTurn();
        }
        
        ChangeTurn() {
                this.turn = this.turn + 1;
                if (this.turn === this.players.length) this.turn = 0;
        }

        getPlayers() {
                const players: { username: string; color: string; }[] = [];
                
                this.players.forEach(p => {
                        players.push({ username: p.username, color: p.color });
                })
                return players;
        }        
        
        getTurnPlayer() {
                return this.players[this.turn].color;
        }
        
        
        isAnimating() {
                return (this.move.forAnimate === null);
        }
}