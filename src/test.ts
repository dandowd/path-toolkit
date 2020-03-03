import { path, Node } from './path';

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
  }
];

let nodes: Node[] = [
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

console.log(path(orders, nodes, 0));
