import Position from "./position";
import Player from "./player"; 
import Canvas_Module from "./canvas_module";
import {Snake,Ladder} from "./snakeandladder";

export default class Square{
        color: string;
        players:Player[] = [];
        position: Position;
        canvas_module: Canvas_Module;
        snakeorladder:Snake|Ladder | null = null;
        
        constructor(color: string, position: Position,canvas_module:Canvas_Module) {
                this.color = color;
                this.position = position;
                this.snakeorladder = null;
                this.canvas_module = canvas_module;       
                this.draw();                
        }
        
        draw() {
                this.drawSquare();
                this.drawPlayers();
        }
        
        drawPlayers() {
                this.players.forEach((player, i) => {player.draw(i)})
        }
        
        drawSquare() {
                this.canvas_module.draw_board_square(this.position, this.color);
        }
        
        setPosition(pos: Position) {
                this.position = pos;
        }
        
        getPosition() {
                return this.position;                
        }
        
        addPlayer(player: Player) {
                this.players.push(player);
                player.setPosition(this.position);
                this.draw();
        }
        
        removePlayer(player: Player) {
                this.players = this.players.filter(p => p.color !== player.color);
                this.draw()
        }
}