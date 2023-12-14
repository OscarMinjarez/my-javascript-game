import RenderEntity from "./RenderEntity";

export default class RenderScene {
    static draw = (scene, context) => {
        scene.entities.forEach(entity => {
            RenderEntity.draw(entity, context);
        });
    }
}