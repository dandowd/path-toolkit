export interface Node {
  name?: string;
  index?: number;
  searchFor?: {
    prop: string;
    id: string | number;
  };
}

export function path(
  current: any,
  nodes: Node[],
  action: (current: any) => any
) {
  return (nodeIndex: number) => {
    if (!nodes[nodeIndex]) {
      return action(current);
    }

    if (!nodes[nodeIndex].name) {
      //Current is an array
      let nextIndex;
      if (nodes[nodeIndex].index) {
        nextIndex = current.findIndex(
          n =>
            n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id
        );
      } else {
        nextIndex = nodes[nodeIndex].index;
      }

      let nextPath = path(current[nextIndex], nodes, action)(nodeIndex + 1);

      return [
        ...current.slice(0, nextIndex),
        nextPath,
        ...current.slice(nextIndex + 1)
      ];
    } else if (nodes[nodeIndex].name && !nodes[nodeIndex].searchFor) {
      let nextPath = path(
        current[nodes[nodeIndex].name],
        nodes,
        action
      )(nodeIndex + 1);

      return { ...current, [nodes[nodeIndex].name]: nextPath };
    } else {
      let nextIndex;
      //Current is an object with an array
      if (nodes[nodeIndex].searchFor) {
        nextIndex = current[nodes[nodeIndex].name].findIndex(
          n =>
            n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id
        );
      } else {
        nextIndex = nodes[nodeIndex].index;
      }

      let nextPath = path(
        current[nodes[nodeIndex].name][nextIndex],
        nodes,
        action
      )(nodeIndex + 1);

      return {
        ...current,
        [nodes[nodeIndex].name]: [
          ...current[nodes[nodeIndex].name].slice(0, nextIndex),
          nextPath,
          ...current[nodes[nodeIndex].name].slice(nextIndex + 1)
        ]
      };
    }
  };
}

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

export function changePath(
  current: any,
  nodes: Node[],
  action: (current: any) => any
) {
  return path(current, nodes, action)(0);
}
