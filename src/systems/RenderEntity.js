import Components from "../utils/ComponentsConstants";

export default class RenderEntity {
    static draw = (entity, context) => {
        if (!RenderEntity.validateEntity(entity)) {
            throw Error("We can't render the entity");
        }
        const positionComponent = entity.getComponent(Components.POSITION);
        const textureComponent = entity.getComponent(Components.TEXTURE);
        context.fillStyle = textureComponent.color;
        context.beginPath();
        context.fillRect(positionComponent.x, positionComponent.y, 50, 50);
    }

    static validateEntity = (entity) => {
        return entity.hasComponent(Components.POSITION) && entity.hasComponent(Components.TEXTURE);
    }
}