"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("./path");
var NodeBuilder = /** @class */ (function () {
    function NodeBuilder(nodes) {
        var _this = this;
        this.select = function (nodeName) {
            var newNode = { select: nodeName };
            return new SelectBuilder(__spreadArrays(_this.nodes, [newNode]));
        };
        this.index = function (index) {
            var newNode = { index: index };
            return new NodeBuilder(__spreadArrays(_this.nodes, [newNode]));
        };
        this.apply = function (start) {
            return function (action) {
                return path_1.changePath(start, _this.nodes, action);
            };
        };
        this.nodes = nodes ? nodes : [];
    }
    NodeBuilder.create = function () { return new NodeBuilder(); };
    return NodeBuilder;
}());
exports.NodeBuilder = NodeBuilder;
var SelectBuilder = /** @class */ (function (_super) {
    __extends(SelectBuilder, _super);
    function SelectBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchFor = function (prop, id) {
            var newNode = { searchFor: { prop: prop, id: id } };
            return new NodeBuilder(__spreadArrays(_this.nodes, [newNode]));
        };
        return _this;
    }
    return SelectBuilder;
}(NodeBuilder));
exports.SelectBuilder = SelectBuilder;
