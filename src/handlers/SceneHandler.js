import RenderScene from "../systems/RenderScene";

export default class SceneHandler {
    constructor() {
        this.scenes = [];
        this.currentScene;
    }

    addScene = (scene) => {
        this.scenes.push(scene);
    }

    setCurrentScene = (index) => {
        if (index >= 0 && index < this.scenes.length) {
            this.currentScene = this.scenes[index];
        }
    }

    draw = (context) => {
        RenderScene.draw(this.currentScene, context);
    }
}