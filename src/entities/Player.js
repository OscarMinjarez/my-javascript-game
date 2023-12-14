import Entity from "./entity";

export default class Player extends Entity {
    constructor(entityId, entityName, playerName) {
        super(entityId, entityName);
        this.playerName = playerName;
    }
}