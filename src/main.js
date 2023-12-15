import SceneHandler from "./handlers/SceneHandler";
import InputHandler from "./handlers/InputHandler";
import PlayerController from "./systems/PlayerController";
import PlayerHandler from "./handlers/PlayerHandler";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("keydown", (e) => {
    InputHandler.keyDown(e);
});

window.addEventListener("keyup", (e) => {
    InputHandler.keyUp(e);
});

const scene = SceneHandler.createScene("scene-1", "test");
const player = PlayerHandler.createPlayer("player-1", "Oscar", 50, 50, "black");
const playerController = new PlayerController(player);
scene.addEntity(player);
SceneHandler.setCurrentScene(0);

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    SceneHandler.draw(ctx);
    playerController.update();
    requestAnimationFrame(animate);
}

animate();