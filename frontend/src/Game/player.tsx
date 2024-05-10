import Square from "./square";
import red from "../assests/red.png";
import blue from "../assests/blue.png";
import green from "../assests/green.png";
import yellow from "../assests/yellow.png";


export default class Player{
        username?: string;
        color: string;
        square: Square;
        
constructor(color:string,square:Square,context:CanvasRenderingContext2D,username?:string,){
        this.username = username?username: '';
        this.color = color ? color : 'black';
        this.square = square;
        this.drawPlayers(context)
        }
        
        drawPlayers(context: CanvasRenderingContext2D) {
                const img = new Image();
                img.src = this.src(this.color);
                const p = this.square.position;
                const i = this.square.players.length;
                img.onload = () => { context.drawImage(img, p.x+5 +10*i, p.y+10, 40, 50); }
                this.square.addPlayer(this)
        }
        
        src(color:string):string{
        if (color === "red") return red;
        else if (color === 'blue') return blue;
        else if (color === 'green') return green;
        else return yellow;       
        }
        
        move(square: Square) {
                this.square = square;
                
        }
        
}