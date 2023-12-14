import Component from "./component";

export default class TextureComponent extends Component {
    // TODO: change color for texture
    constructor(componentName, color) {
        super(componentName);
        this.color = color;
    }
}