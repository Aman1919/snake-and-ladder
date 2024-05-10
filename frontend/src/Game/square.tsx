import SnakeOrLadder from "./Snake";
import Position from "./Position";
import Player from "./player";
export default class Square{
        width: number;
        height: number;
        position:Position;
        color: string;
        snakeorladder: null  | SnakeOrLadder;
        players:Player[]  
constructor(width:number,height:number,context:CanvasRenderingContext2D,position:Position){
        this.width = width;
        this.height = height;
        this.color = '#E4C59E';
        this.snakeorladder = null;
        this.position = position
        this.players = []
        this.draw(context);
        }
        
        draw(context:CanvasRenderingContext2D) {
                context.fillStyle = this.color;
                const p = this.position;
                context.fillRect(p.x, p.y, this.width, this.height)
                context.strokeStyle = "2px black";
                context.strokeRect(p.x, p.y, this.width, this.height)
                context.fillStyle = 'black'
                context.font = '20px sans-serif'
                context.textAlign = 'left'
                context.textBaseline = 'top'
                context.fillText(p.num.toString(), p.x+10, p.y+10)
        }
        
        addPlayer(player: Player) {
                this.players.push(player);
        }
        
        getPositionNum() {
                return this.position.num;
        }
}