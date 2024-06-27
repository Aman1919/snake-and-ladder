import Position from "./position";

export default class Canvas_Module{
        context: CanvasRenderingContext2D;
        boardWidth: number;
        boardHeight: number;
        squareWidth: number;
        squareHeight: number;
        
        constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
                this.context = context;
                this.boardWidth = canvas.width;
                this.boardHeight = canvas.height;
                this.squareWidth = canvas.width / 10;
                this.squareHeight = canvas.height / 10;
        }
        
        draw_board_square(position: Position, color: string) {
                const {x,y,num}= position
                this.draw_square(position, color);
                this.draw_square_stroke(x, y);
                this.draw_text(x, y, num);
        }
        
        clear_board() {
                this.context.clearRect(0, 0, this.boardWidth, this.boardHeight);
        }
        
        draw_square(position: Position, color: string) {
                const {x,y}= position
                this.context.clearRect(x, y, this.squareWidth, this.squareHeight)
                this.context.beginPath()
                this.context.fillStyle = color;
                this.context.fillRect(x, y, this.squareWidth, this.squareHeight)
                this.context.closePath();
        }
        
        draw_circle(position:Position,color:string,i:number=0) {
                const { x, y } = position;
                this.context.beginPath()
                this.context.fillStyle = color;
                this.context.arc(x +this.squareWidth/2 + 10 *i  - 7 ,y + this.squareHeight/2,25, 0, 2 * Math.PI);
                this.context.fill();
        }
        
        draw_text(x:number,y:number,num:number) {
                this.context.beginPath()
                this.context.fillStyle = 'black'
                this.context.font = '20px sans-serif'
                this.context.textAlign = 'left'
                this.context.textBaseline = 'top'
                this.context.fillText(num.toString(), x+10, y+10)
                this.context.closePath();
        }
        
        draw_square_stroke(x:number,y:number) {
                this.context.beginPath()
                this.context.strokeStyle = "2px black";
                this.context.strokeRect(x, y, this.squareWidth, this.squareHeight)
                this.context.closePath()
        }
}