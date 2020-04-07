"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromArray(node) {
    return function (current) {
        if (node.index) {
            return __spreadArrays(current.slice(0, node.index), current.slice(node.index + 1));
        }
        if (node.searchFor) {
            var index = current.findIndex(function (n) { return n[node.searchFor.prop] === node.searchFor.id; });
            return __spreadArrays(current.slice(0, index), current.slice(index + 1));
        }
    };
}
exports.removeFromArray = removeFromArray;
function insertIntoArray(newItem, index) {
    return function (current) {
        if (index) {
            return __spreadArrays(current.slice(0, index), [newItem], current.slice(index + 1));
        }
        else {
            return __spreadArrays(current, [newItem]);
        }
    };
}
exports.insertIntoArray = insertIntoArray;
