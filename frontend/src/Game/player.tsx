import Canvas_Module from "./canvas_module";
import Position from "./position";

export default class Player {
        username: string;
        color: string
        isPlaying: boolean = true;
        position: Position;
        canvas_module: Canvas_Module;
        constructor(color: string, position: Position, canvas_module: Canvas_Module) {
                this.username = "Player";
                this.color = color;
                this.position = { ...position };
                this.canvas_module = canvas_module;
        }
        
        setPosition(position: Position) {
                this.position = position;
        }
        
        draw(i:number = 0) {
                this.canvas_module.draw_circle(this.position, this.color, i);
        }
}