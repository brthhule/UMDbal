export class BuildingNode {
    name;
    description;
    map;

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.map = new Map();
    }

    getName() {
        return this.name;
    }

    addEdge(node, distance) {
        let buildingName = node.name;

        if (this.map.has(buildingName)) {
            return;
        }

        this.map.set(buildingName, distance);
    }

    getEdge(buildingName) {
        return this.map.get(buildingName);
    }

    getMap() {
        return this.map;
    }
}


