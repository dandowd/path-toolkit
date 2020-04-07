import { changePath, removeFromArray } from './index';
import { NodeBuilder } from './pathBuilder';

interface Line {
  lineId: number;
  item: string;
  discounts?: Discount[];
}

interface Order {
  orderId: number;
  lines: Line[];
}

interface Discount {
  amount: number;
}

let orders: Order[] = [
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

let alteredPath = NodeBuilder.create()
  .index(1)
  .select('lines')
  .searchFor('lineId', 3)
  .apply(orders)((current) => ({ ...current, lineId: 8 }));

console.log(alteredPath[1].lines);
