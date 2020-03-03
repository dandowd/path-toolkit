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
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("./path");
var orders = [
    {
        orderId: 1,
        lines: [
            {
                lineId: 1,
                item: 'order 1, item 1'
            },
            {
                lineId: 2,
                item: 'order 1, item 2'
            }
        ]
    },
    {
        orderId: 2,
        lines: [
            {
                lineId: 1,
                item: 'order 2, item 1'
            },
            {
                lineId: 2,
                item: 'order 2, item 2'
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
        idProp: 'orderId',
        id: 2
    },
    {
        name: 'lines',
        idProp: 'lineId',
        id: 2
    }
];
function change(current) {
    return __assign(__assign({}, current), { lineId: '3' });
}
console.log(path_1.changePath(orders, nodes, change));
console.log(orders[1].lines[1]);
