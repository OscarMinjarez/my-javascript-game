import Player from "../entities/Player"
import Scene from "../entities/Scene";
import Entities from "./EntitiesConstants";

export default class EntityFactory {
    static getPlayer = (id, name) => {
        return new Player(id, Entities.PLAYER, name);
    }

    static getScene = (id, name) => {
        return new Scene(id, Entities.SCENE, name);
    }
}