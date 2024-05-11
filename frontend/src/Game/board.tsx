import Square from "./square";
import Position from "./Position";
import Game from "./game";

export default class Board{
        width: number;
        height: number;
        game: Game;
        constructor(width:number,height:number,context:CanvasRenderingContext2D,game:Game) {
                this.width = width;
                this.height = height;
                this.game = game
                this.Initialize(context);
        }
     private   Initialize(context:CanvasRenderingContext2D) {
                context.clearRect(0, 0, this.width, this.height);
                const squareheight = this.height / 10;
                const squarewidth = this.width / 10;
                let startingHeight = this.height - squareheight;
                let num = 1;
                for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 10; j++) {
                        num = i * 10 + j + 1;
                        if (i % 2) {
                                const position = new Position(
                                        Math.floor((this.width - (j + 1) * squarewidth) / squarewidth),
                                        Math.floor(startingHeight/squareheight), num)
                        const s = new Square(squarewidth, squareheight, context, position)
                        this.game.state[i][j] = s
                        } else {
                        const position = new Position(j,Math.floor(startingHeight/squareheight),num)
                        const s = new Square(squarewidth,squareheight,context,position)
                        this.game.state[i][j] = s                       
                        }
                        }
                        startingHeight -= squareheight;
                }
        }
}