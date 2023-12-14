export default class InputHandler {
    static keys = {};

    static keyDown = (e) => {
        InputHandler.keys[e.code] = true;
    }

    static keyUp = (e) => {
        InputHandler.keys[e.code] = false;
    }

    static isKeyDown = (keyCode) => {
        return InputHandler.keys[keyCode] === true;
    }
}