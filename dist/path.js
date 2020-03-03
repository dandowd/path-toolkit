"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function path(current, nodes, action) {
    return function (nodeIndex) {
        if (!nodes[nodeIndex]) {
            if (!nodes[nodeIndex + 1] && action) {
                console.log(current);
                current = action(current);
                console.log(current);
            }
            return current;
        }
        if (!nodes[nodeIndex].name) {
            var next = current.find(function (n) { return n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id; });
            return path(next, nodes, action)(nodeIndex + 1);
        }
        else if (nodes[nodeIndex].name && !nodes[nodeIndex].idProp) {
            return path(current[nodes[nodeIndex].name], nodes, action)(nodeIndex + 1);
        }
        else {
            var next = current[nodes[nodeIndex].name].find(function (n) { return n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id; });
            return path(next, nodes, action)(nodeIndex + 1);
        }
    };
}
exports.path = path;
function getPath(current, nodes) {
    return path(current, nodes)(0);
}
exports.getPath = getPath;
function changePath(current, nodes, action) {
    return path(current, nodes, action)(0);
}
exports.changePath = changePath;
