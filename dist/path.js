"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function path(current, nodes, nodeIndex) {
    if (!nodes[nodeIndex]) {
        return current;
    }
    if (!nodes[nodeIndex].name) {
        var next = current.find(function (n) { return n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id; });
        return path(next, nodes, nodeIndex + 1);
    }
    else if (nodes[nodeIndex].name && !nodes[nodeIndex].idProp) {
        return path(current[nodes[nodeIndex].name], nodes, nodeIndex + 1);
    }
    else {
        var next = current[nodes[nodeIndex].name].find(function (n) { return n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id; });
        return path(next, nodes, nodeIndex + 1);
    }
}
exports.path = path;
