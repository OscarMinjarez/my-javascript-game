import InputHandler from "../handlers/InputHandler";

export default class PlayerController {
    constructor(player) {
        this.player = player;
    }

    update = () => {
        this.move();
    }

    move = () => {
        const positionComponent = this.player.getComponent("PositionComponent");
        if (InputHandler.isKeyDown("KeyW")) {
            positionComponent.y -= 5;
        }
        if (InputHandler.isKeyDown("KeyD")) {
            positionComponent.x += 5;
        }
        if (InputHandler.isKeyDown("KeyS")) {
            positionComponent.y += 5;
        }
        if (InputHandler.isKeyDown("KeyA")) {
            positionComponent.x -= 5;
        }
    }
}