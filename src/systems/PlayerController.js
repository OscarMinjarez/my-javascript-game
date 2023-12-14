import InputHandler from "../handlers/InputHandler";
import Vector2Utils from "../utils/Vector2Utils";

export default class PlayerController {
    constructor(player) {
        this.player = player;
        this.speed = 5;
    }

    update = () => {
        this.move();
    }

    move = () => {
        const positionComponent = this.player.getComponent("PositionComponent");
        let dx = 0;
        let dy = 0;
        if (InputHandler.isKeyDown("KeyW")) {
            dy -= 1;
        }
        if (InputHandler.isKeyDown("KeyD")) {
            dx += 1;
        }
        if (InputHandler.isKeyDown("KeyS")) {
            dy += 1;
        }
        if (InputHandler.isKeyDown("KeyA")) {
            dx -= 1;
        }
        let direction = Vector2Utils.normalize(dx, dy);
        positionComponent.x += direction.dx * this.speed;
        positionComponent.y += direction.dy * this.speed;
    }
}