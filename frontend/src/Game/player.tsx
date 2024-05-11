import Square from "./square";
import red from "../assests/red.png";
import blue from "../assests/blue.png";
import green from "../assests/green.png";
import yellow from "../assests/yellow.png";


export default class Player{
        username?: string;
        color: string;
        square: Square;
        isPlaying: boolean;
constructor(color:string,square:Square,context:CanvasRenderingContext2D,username?:string,){
        this.username = username?username: '';
        this.color = color ? color : 'black';
        this.square = square;
        this.isPlaying = false;
        this.init(context)
        }
         
        init(context: CanvasRenderingContext2D) {
                this.square.addPlayer(this)        
        this.drawPlayers(context)
        }
        
        
        
        drawPlayers(context: CanvasRenderingContext2D) {
                const img = new Image();
                img.src = this.src(this.color);
                const p = this.square.position;
                let i=0;
                this.square.players.forEach((pl, k) => {
                        if (pl.color === this.color) i = k;
                })
                img.onload = () => { context.drawImage(img, p.x * this.square.width + 5 + 10 * i, p.y * this.square.height + 10, 40, 50); }
                img.onerror = (e)=> {console.log("error",e);
                }
        }
        
        src(color:string):string{
        if (color === "red") return red;
        else if (color === 'blue') return blue;
        else if (color === 'green') return green;
        else return yellow;       
        }
        
        takeStep(nextSquare:Square) {
                this.square.removePlayer(this.color);
                this.square = nextSquare;
                this.square.addPlayer(this);
                this.square.Draw();
        }
        
        getPos() {
                return this.square.position;
        }
        
}