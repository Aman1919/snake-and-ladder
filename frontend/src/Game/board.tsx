import Canvas_Module from "./canvas_module";
import Position from "./position";
import Square from "./square";
import { squareColor } from "./utils";
import {Snake,Ladder} from './snakeandladder';

const snake2  = require("../imgs/snake2.png")
const snake3 = require("../imgs/snake3.png");
const snake23  = require("../imgs/snake23.png")
const snake32 = require("../imgs/snake32.png");
const LadderImg = require("../imgs/ladder1.png")

export default class Board {
        canvas_module: Canvas_Module;
        canvas: HTMLCanvasElement;
        Squares: Square[] = new Array(100);
        SnakeAndLadders: Snake[]|Ladder[] = [];
        constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
                this.canvas_module = new Canvas_Module(context, canvas);       
                this.canvas = canvas;
                this.Init();
                this.SnakeAndLadderFactory();
               
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
        
        SnakeAndLadderFactory() {

                this.SnakeAndLadders = [
                new Snake(69, 25, snake32, this, 1),
                new Snake(41, 17, snake2, this),
                new Snake(86,64, snake23,this,1),
                new Snake(98,66, snake3,this),
                new Snake(29, 7, snake23, this, 1),
                new Ladder(17, 37, LadderImg, this),
                new Ladder(42, 79, LadderImg, this),
                new Ladder(7, 14, LadderImg, this),
                new Ladder(68, 93, LadderImg, this)
                ]
        }
        
        
        
        resetBoard(color:string) {
                this.Squares.forEach(square => {
                       if (square.players.every(pl => pl.color === color)) { square.drawSquare() }
                       else square.draw();
                })
                this.resetSnakeAndLadders();
        }
        resetSnakeAndLadders() {
        this.SnakeAndLadders.forEach((sl) => {
                        sl.draw(this.canvas_module);
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

