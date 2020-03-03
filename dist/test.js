"use strict";
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
    },
    {
        name: 'item'
    }
];
console.log(path_1.path(orders, nodes, 0));
