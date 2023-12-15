import ComponentFactory from "../utils/ComponentFactory";
import EntityFactory from "../utils/EntityFactory";

export default class PlayerHandler {
    static PLAYERS = []

    static createPlayer = (id, name, xPos, yPos, color) => {
        const player = EntityFactory.getPlayer(id, name);
        player.addComponent(ComponentFactory.getPositionComponent(xPos, yPos));
        player.addComponent(ComponentFactory.getTextureComponent(color));
        PlayerHandler.PLAYERS.push(player);
        return player;
    }

    static getPlayer = (id) => {
        return PlayerHandler.PLAYERS.filter((p) => id === p.id)[0];
    }
}