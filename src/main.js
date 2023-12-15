import SceneHandler from "./handlers/SceneHandler";
import Scene from "./entities/Scene";
import Player from "./entities/Player";
import PositionComponent from "./components/PositionComponent";
import TextureComponent from "./components/TextureComponent";
import InputHandler from "./handlers/InputHandler";
import PlayerController from "./systems/PlayerController";
import Entities from "./utils/EntitiesConstants";
import Components from "./utils/ComponentsConstants";

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

const sceneHandler = new SceneHandler();
const scene = new Scene("scene-1", Entities.SCENE, "test");
const player = new Player("player-1", Entities.PLAYER, "Oscar");
const playerController = new PlayerController(player);
player.addComponent(new PositionComponent(Components.POSITION, 50, 50));
player.addComponent(new TextureComponent(Components.TEXTURE, "red"));
scene.addEntity(player);
sceneHandler.addScene(scene);
sceneHandler.setCurrentScene(0);

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sceneHandler.draw(ctx);
    playerController.update();
    requestAnimationFrame(animate);
}

animate();