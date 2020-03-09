"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("./path");
var orders = [
    {
        orderId: 1,
        lines: [
            {
                lineId: 1,
                item: 'order 1, item 1',
                discounts: []
            },
            {
                lineId: 2,
                item: 'order 1, item 2',
                discounts: []
            }
        ]
    },
    {
        orderId: 2,
        lines: [
            {
                lineId: 1,
                item: 'order 2, item 1',
                discounts: [{ amount: 30 }]
            },
            {
                lineId: 2,
                item: 'order 2, item 2',
                discounts: []
            }
        ]
    },
    {
        orderId: 3,
        lines: []
    }
];
var nodes = [
    {
        searchFor: {
            prop: 'orderId',
            id: 2
        }
    },
    {
        name: 'lines'
    }
];
var removalNode = {
    searchFor: {
        prop: 'lineId',
        id: 2
    }
};
function removeFromArray(node) {
    return function (current) {
        if (node.searchFor) {
            var index = current.findIndex(function (n) { return n[node.searchFor.prop] === node.searchFor.id; });
            return __spreadArrays(current.slice(0, index), current.slice(index + 1));
        }
    };
}
var newTest = path_1.changePath(orders, nodes, removeFromArray(removalNode));
console.log(newTest[1].lines);
