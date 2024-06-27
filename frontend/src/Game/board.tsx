import Canvas_Module from "./canvas_module";
import Player from "./player";
import Position from "./position";
import Square from "./square";
import { squareColor } from "./utils";

export default class Board {
        canvas_module: Canvas_Module;
        canvas: HTMLCanvasElement;
        Squares: Square[] = new Array(100);
        
        constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
                this.canvas_module = new Canvas_Module(context, canvas);       
                this.canvas = canvas;
                this.Init();
               
        }
        
        Init() {
                const width = this.canvas.width;;
                const height = this.canvas.height;
                const squareWidth = width / 10;
                const squareHeight = height / 10;
                let startingHeight = height - squareHeight;
                let num = 1;               
                for (let row = 0; row < 10; row++){
                        let position;
                        for (let col = 0; col < 10; col++){
                            num = row * 10 + col + 1;
                           if (row % 2) position = new Position(width - squareWidth*(col+1),startingHeight,num);
                           else position = new Position(col*squareWidth,startingHeight,num)
                                const color = this.selectSquareColor(row, col);
                                const square = new Square(color, position,this.canvas_module);
                                this.Squares[num - 1] = square;
                        }
                     startingHeight -= squareHeight; 
                }
                console.log(this.Squares);
                
        }
        
        resetBoard(color:string) {
                this.Squares.forEach(square => {
                       if (square.players.every(pl => pl.color !== color)) { square.draw() }
                       else square.drawSquare();
                })
        }
        
        selectSquareColor(i: number, j: number) {
                let ans = ((i % 2!==0 && j % 2!==0) || (i % 2 === 0 && j % 2 === 0)) ? squareColor.blue : squareColor.orange;
                if (i % 2) {
                        ans = (ans === squareColor.blue) ? squareColor.orange : squareColor.blue;
                }
                return ans;
        }
}

