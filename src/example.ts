import { changePath, Node } from './path';

interface Line {
  lineId: number;
  item: string;
}

interface Order {
  orderId: number;
  lines: Line[];
}

let orders: Order[] = [
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

let nodes: Node[] = [
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
  }
];

function change(current) {
  return { ...current, lineId: 3 };
}

let newTest = changePath(orders, nodes, change);
console.log(newTest[1].lines);
