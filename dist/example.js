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
var pathBuilder_1 = require("./pathBuilder");
var orders = [
    {
        orderId: 1,
        lines: [
            {
                lineId: 1,
                item: 'order 1, item 1',
                discounts: [],
            },
            {
                lineId: 2,
                item: 'order 1, item 2',
                discounts: [],
            },
        ],
    },
    {
        orderId: 2,
        lines: [
            {
                lineId: 3,
                item: 'order 2, item 1',
                discounts: [{ amount: 30 }],
            },
            {
                lineId: 4,
                item: 'order 2, item 2',
                discounts: [],
            },
        ],
    },
    {
        orderId: 3,
        lines: [],
    },
];
var alteredPath = pathBuilder_1.NodeBuilder.create()
    .index(1)
    .select('lines')
    .searchFor('lineId', 3)
    .apply(orders)(function (current) { return (__assign(__assign({}, current), { lineId: 8 })); });
console.log(alteredPath[1].lines);
