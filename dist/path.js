"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function path(current, nodes, action) {
    return function (nodeIndex) {
        var _a, _b;
        if (!nodes[nodeIndex]) {
            return action(current);
        }
        if (!nodes[nodeIndex].name) {
            //Current is an array
            var nextIndex = current.findIndex(function (n) {
                return n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id;
            });
            var nextPath = path(current[nextIndex], nodes, action)(nodeIndex + 1);
            return __spreadArrays(current.slice(0, nextIndex), [
                nextPath
            ], current.slice(nextIndex + 1));
        }
        else if (nodes[nodeIndex].name && !nodes[nodeIndex].searchFor) {
            var nextPath = path(current[nodes[nodeIndex].name], nodes, action)(nodeIndex + 1);
            return __assign(__assign({}, current), (_a = {}, _a[nodes[nodeIndex].name] = nextPath, _a));
        }
        else {
            var nextIndex = void 0;
            //Current is an object with an array
            if (nodes[nodeIndex].searchFor) {
                nextIndex = current[nodes[nodeIndex].name].findIndex(function (n) {
                    return n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id;
                });
            }
            else {
                nextIndex = nodes[nodeIndex].index;
            }
            var nextPath = path(current[nodes[nodeIndex].name][nextIndex], nodes, action)(nodeIndex + 1);
            return __assign(__assign({}, current), (_b = {}, _b[nodes[nodeIndex].name] = __spreadArrays(current[nodes[nodeIndex].name].slice(0, nextIndex), [
                nextPath
            ], current[nodes[nodeIndex].name].slice(nextIndex + 1)), _b));
        }
    };
}
exports.path = path;
function changePath(current, nodes, action) {
    return path(current, nodes, action)(0);
}
exports.changePath = changePath;
