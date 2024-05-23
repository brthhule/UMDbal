class BuildingsGraph {
    nodes;

    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        this.nodes.set(node.getName(), node);
    }

    getNode(name) {
        return this.nodes.get(name);
    }
}

BuildingsGraph;