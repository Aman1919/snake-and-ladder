import Board from "./board";
import Canvas_Module from "./canvas_module";
import Square from "./square";

class SnakeLadderEntity{
        startSquare: Square;
        endSquare: Square
        img: any;
        constructor(startSquare:number,endSquare:number,src:string,board:Board) {
                this.startSquare = board.Squares[startSquare-1];
                this.endSquare = board.Squares[endSquare-1];
                this.img = new Image();
                this.img.src = src;
        }
        
        draw(canvas_module: Canvas_Module) { };
        
        move() {}
}

class Snake extends SnakeLadderEntity{
        flip: number;
        speed = { x: 2, y: 2 };
        constructor(start: number, End: number, img: string,board:Board,flip:number = 0) {
                super(start, End, img, board)
                this.flip = flip;
                this.speed = (flip)?{x:-2,y:2}:{x:2,y:2}
                this.startSquare.snakeorladder = this;
                this.draw(board.canvas_module);
        }
        
        draw(canvas_module:Canvas_Module) {
        const w = Math.abs(this.startSquare.position.x - this.endSquare.position.x) + canvas_module.squareWidth  
                const h = Math.abs(this.startSquare.position.y - this.endSquare.position.y) + canvas_module.squareHeight;
                let  x = this.startSquare.position.x;
                const y = this.startSquare.position.y;     
                if(this.flip)x= x - w + canvas_module.squareWidth
                canvas_module.draw_image(this.img,x,y,w,h)
           
                this.img.onload = () => {
                canvas_module.draw_image(this.img, x, y, w, h);        
                }
        
        }
        
        move() {}
}


class Ladder extends SnakeLadderEntity{
        speed = { x: 0, y: -2 };
        constructor(start:number, End:number, img: string,board:Board) {
                super(start, End, img, board);
                this.startSquare.snakeorladder = this;
                
                this.draw(board.canvas_module);
        }
        
        draw(canvas_module:Canvas_Module) {
          const h = Math.abs(this.startSquare.position.y - this.endSquare.position.y)
                const x = this.endSquare.position.x;
                const y = this.endSquare.position.y;     
                
                canvas_module.draw_image(this.img, x + 10, y + 10, 50, h + canvas_module.squareHeight - 20)
                
                this.img.onload = () => {
                canvas_module.draw_image(this.img,x + 10,y+10,50,h+canvas_module.squareHeight - 20)
                }
                
        }
        move(){}
}

export { Snake,Ladder};

