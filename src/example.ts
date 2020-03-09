import { changePath, Node, removeFromArray } from './path';

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

let nodes: Node[] = [
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

let removalNode = {
  searchFor: {
    prop: 'lineId',
    id: 2
  }
};

let newTest = changePath(orders, nodes, removeFromArray(removalNode));
console.log(newTest[1].lines);
