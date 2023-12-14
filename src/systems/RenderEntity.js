export default class RenderEntity {
    static draw = (entity, context) => {
        if (!RenderEntity.validateEntity(entity)) {
            throw Error("We can't render the entity");
        }
        const positionComponent = entity.getComponent("PositionComponent");
        const textureComponent = entity.getComponent("TextureComponent");
        context.fillStyle = textureComponent.color;
        context.beginPath();
        context.fillRect(positionComponent.x, positionComponent.y, 50, 50);
    }

    static validateEntity = (entity) => {
        return entity.hasComponent("PositionComponent") && entity.hasComponent("TextureComponent");
    }
}