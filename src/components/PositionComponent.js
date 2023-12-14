import Component from "./component";

export default class PositionComponent extends Component {
    constructor(componentName, x, y) {
        super(componentName);
        this.x = x;
        this.y = y;
    }
}