import { Node } from './path';

export function removeFromArray(node: Node) {
  return current => {
    if (node.index) {
      return [
        ...current.slice(0, node.index),
        ...current.slice(node.index + 1)
      ];
    }

    if (node.searchFor) {
      let index = current.findIndex(
        n => n[node.searchFor.prop] === node.searchFor.id
      );
      return [...current.slice(0, index), ...current.slice(index + 1)];
    }
  };
}

export function insertIntoArray(newItem, index?) {
  return current => {
    if (index) {
      return [...current.slice(0, index), newItem, ...current.slice(index + 1)];
    } else {
      return [...current, newItem];
    }
  };
}
