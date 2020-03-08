"use strict";
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
        name: 'lines',
        searchFor: {
            prop: 'lineId',
            id: 2
        }
    },
    {
        name: 'discounts'
    }
];
function change(current) {
    return [{ amount: 10 }];
}
var newTest = path_1.changePath(orders, nodes, change);
console.log(newTest[1].lines[1]);
