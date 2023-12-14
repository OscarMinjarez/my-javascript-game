export default class Vector2Utils {
    static normalize = (dx, dy) => {
        if (dx !== 0 && dy !== 0) {
            const length = Math.sqrt(dx * dx + dy * dy);
            dx /= length;
            dy /= length;
        }
        return { dx, dy };
    }
}