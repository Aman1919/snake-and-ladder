import Position from "./Position";

export default class SnakeOrLadder{
        type: string;
        startPosition: Position;
        endPosition: Position;
        constructor(startPosition: Position, endPosition: Position, type:string) {
                this.startPosition = startPosition;
                this.endPosition = endPosition;
                this.type = type;
        }
        
        Draw() {
        
        }
}