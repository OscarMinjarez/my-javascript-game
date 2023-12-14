import Entity from "./entity";

export default class Scene extends Entity {
    constructor(entityId, entityName, sceneName) {
        super(entityId, entityName);
        this.sceneName = sceneName;
        this.entities = [];
    }

    addEntity = (entity) => {
        this.entities.push(entity);
    }
}