import Board from "./board";
import Player from "./player";
import Position from "./position";
import Square from "./square";

export default class Move{
        board: Board;
        speed:{x:number,y:number} = {x:0,y:0};
        player: Player | null = null;
        forAnimate:{position:Position,InitialSquare:Square,FinalSquare:Square,upward:number,nextSquare:null|Square}| null = null
        constructor(board: Board) {
                this.board = board;
        }
        
    move(player: Player, DiceNumber: number) {
            if (this.forAnimate) return;
                this.setAnimate(player,DiceNumber);
              this.takeStep();
          console.log(this.player, this.forAnimate);      
          
        }
        
        setAnimate(player:Player,DiceNumber:number) {
                this.player = player
                const pos = this.player.position.num - 1
                const InitialSquare = this.board.Squares[pos];
                const FinalSquare = this.board.Squares[pos + DiceNumber];
                this.forAnimate = { InitialSquare, FinalSquare, upward: 0,position: { ...this.player.position },nextSquare:null }
                this.controlSpeed(this.player.position)
        }
        
        
        controlSpeed(position: Position) {
                if (!this.forAnimate) return;
                const height = this.board.canvas_module.squareHeight;
                
                const num = position.num;
                
                const d = Math.floor(num / 10);
                
                if (d % 2 === 0) {
                        this.speed.x = 2
                        this.speed.y = 0
                        this.forAnimate.upward = 0;
                } else {
                        this.speed.x = -2
                        this.speed.y  = 0
                        this.forAnimate.upward = 0;
                }
                
                if (num % 10 === 0 && num !== 0) {
                        this.speed.y = 2;
                        this.forAnimate.upward = height;
                        this.speed.x = 0;
                
                }
        }
        
       animate() {
               if (!this.player || !this.forAnimate) return;
               if (this.CheckCollison()) {
                       this.forAnimate.FinalSquare.addPlayer(this.player); 
                       this.forAnimate = null;
                       this.speed = {x:0,y:0};
                       return;
               }
               
               if (this.forAnimate.upward > 0&&this.speed.y) {
                       this.forAnimate.position.y -= this.speed.y;
                       this.forAnimate.upward -= this.speed.y;
               } else {
                       this.forAnimate.position.x += this.speed.x
                
               }
               this.controlSpeed(this.forAnimate.position);
                        
                this.board.canvas_module.clear_board();
               this.board.resetBoard(this.player.color);
                this.board.canvas_module.draw_circle(this.forAnimate.position, this.player.color);
              requestAnimationFrame(this.animate.bind(this));
        }
        
 takeStep(){
                if (!this.forAnimate || !this.player) return;
                const { InitialSquare } = this.forAnimate;
                InitialSquare.removePlayer(this.player)
         requestAnimationFrame(this.animate.bind(this));
      
        }        
        
        
        
        CheckCollison() {
                if (!this.forAnimate) return false;
                let NextSquare = this.forAnimate.nextSquare;
                if (!NextSquare) {
                        NextSquare= this.getNextSquares();
                        this.forAnimate.nextSquare = NextSquare;
                if (!NextSquare) return;
                }
                const width = this.board.canvas_module.squareWidth;
                const height = this.board.canvas_module.squareHeight;
                const { position, FinalSquare } = this.forAnimate;
                if (this.CheckCoor(position, NextSquare.position, width, height)) {
                        if (NextSquare.position.num === FinalSquare.position.num) return true;
                        this.forAnimate.position.num =  NextSquare.position.num;
                        this.forAnimate.nextSquare = this.getNextSquares();
                }
                
                return  false;
        }
        
        CheckCoor(InitPos: Position, FinalPos: Position,width:number,height:number) {
                return (InitPos.x >= FinalPos.x && InitPos.x < FinalPos.x + 7
                        && InitPos.y >= FinalPos.y && InitPos.y < FinalPos.y + 7)        
        }
        
        getNextSquares() {
        if (!this.forAnimate) return null;
                const position = this.forAnimate.position.num - 1;
                const FinalPosition = position + 1;
                let NextSquare = this.board.Squares[FinalPosition];
                return NextSquare;
        }
        
}