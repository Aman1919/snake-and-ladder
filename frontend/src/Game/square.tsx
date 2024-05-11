import SnakeOrLadder from "./Snake";
import Position from "./Position";
import Player from "./player";
export default class Square{
        width: number;
        height: number;
        position:Position;
        color: string;
        snakeorladder: null  | SnakeOrLadder;
        players: Player[]  
        context:CanvasRenderingContext2D
constructor(width:number,height:number,context:CanvasRenderingContext2D,position:Position){
        this.width = width;
        this.height = height;
        this.color = '#E4C59E';
        this.snakeorladder = null;
        this.position = position
        this.players = []
        this.context = context;
        this.Draw();
        }
        
        Draw() {
                this.drawSquare();
                this.players.forEach((player) => {
                        player.drawPlayers(this.context);
                })
        }
        
        drawSquare() {
                
                const p = this.position;
                this.context.clearRect(p.x*this.width, p.y*this.height, this.width, this.height)
                this.context.fillStyle = this.color;
                this.context.fillRect(p.x*this.width, p.y*this.height, this.width, this.height)
                this.context.strokeStyle = "2px black";
                this.context.strokeRect(p.x*this.width, p.y*this.height, this.width, this.height)
                this.context.fillStyle = 'black'
                this.context.font = '20px sans-serif'
                this.context.textAlign = 'left'
                this.context.textBaseline = 'top'
                this.context.fillText(p.num.toString(), p.x*this.width+10, p.y*this.height+10)
        }
        
        addPlayer(player: Player) {
                this.players.push(player);
        }
        
        removePlayer(playerColor:string) {
                const players = this.players.filter(pl => {
              return  pl.color !==playerColor
                })
                this.players = players;
                this.Draw();
        }
        
        getPositionNum() {
                return this.position.num;
        }
}