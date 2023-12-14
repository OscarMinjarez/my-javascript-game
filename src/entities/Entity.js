export default class Entity {
    constructor(entityId, entityName) {
        this.entityId = entityId;
        this.entityName = entityName;
        this.components = [];
    }

    addComponent = (component) => {
        this.components.push(component);
    }

    removeComponent = (name) => {
        this.components = this.components.filter((c) => name !== c.name);
    }

    getComponent = (name) => {
        return this.components.filter((c) => name === c.name)[0];
    }

    hasComponent = (name) => {
        return this.components.filter((c) => name === c.name).length > -1;
    }
}