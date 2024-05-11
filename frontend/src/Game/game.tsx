import Board from "./board";
import Player from "./player";
import Square from "./square";
 
export default class Game{
        canvas: HTMLCanvasElement
        context: CanvasRenderingContext2D
        board: Board;
        players: Player[];
        turn: number;
        state:Square[][]= [[],[],[],[],[],[],[],[],[],[]]
        constructor(canvas:HTMLCanvasElement,context:CanvasRenderingContext2D,players:string[]) {
                this.canvas = canvas;
                this.context = context;
                this.board = new Board(canvas.width, canvas.height, context, this);
                this.players = this.CreatePlayers(players);
                this.turn = 0;
                console.log(this.state);
        }
        
        CreatePlayers(players: string[]) {
                const res = [];
                for (let i = 0; i < players.length; i++){
                res.push(new Player(players[i],this.state[0][0],this.context))
                }
                
                return res
        }
        
        move(diceNumber: number) {
                const player =  this.players[this.turn]
                // if (!player.isPlaying) {
                //      if(diceNumber===1)player.isPlaying = true;
                //         this.changeTurn();                
                //         return
                // }
                
                
                
                const pos = player.getPos();
                const num = pos.num;
                let i = Math.floor(num/10);
                let j = num % 10;
                if (j + diceNumber > 10) {
                        i++;
                        const a = j + diceNumber;
                        j =a%10;
                } else {
                        j += diceNumber-1;
                }                       
                const nextSquare = this.state[i][j];                
                player.takeStep(nextSquare)
                this.changeTurn();
                console.log(i, j, diceNumber);
        
        }
        
        
        changeTurn() {
                const i = this.turn+1;
                if (i > this.players.length - 1) {
                this.turn = 0
                } else {
                this.turn = i
                }
        }
}


/**
For now we have board for snake and ladder 
Create a dice which genrates a random number and show the rotation of the dice 
show the player
move the player when dice is clicked
 */