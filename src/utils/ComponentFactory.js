import Components from "./ComponentsConstants"
import PositionComponent from "../components/PositionComponent"
import TextureComponent from "../components/TextureComponent";

export default class ComponentFactory {
    static getPositionComponent = (x, y) => {
        return new PositionComponent(Components.POSITION, x, y);
    }

    static getTextureComponent = (color) => {
        return new TextureComponent(Components.TEXTURE, color);
    }
}