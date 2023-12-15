import RenderScene from "../systems/RenderScene";
import EntityFactory from "../utils/EntityFactory";

export default class SceneHandler {
    static SCENES = [];
    static CURRENT_SCENE;

    static createScene = (id, name) => {
        const scene = EntityFactory.getScene(id, name);
        SceneHandler.SCENES.push(scene);
        return scene;
    }

    static setCurrentScene = (index) => {
        if (index >= 0 && index < SceneHandler.SCENES.length) {
            SceneHandler.CURRENT_SCENE = SceneHandler.SCENES[index];
        }
    }

    static draw = (context) => {
        RenderScene.draw(SceneHandler.CURRENT_SCENE, context);
    }
}