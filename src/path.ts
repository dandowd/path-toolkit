export interface Node {
  name?: string;
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
      let nextIndex = current.findIndex(
        n =>
          n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id
      );

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
      //Current is an object with an array
      let nextIndex = current[nodes[nodeIndex].name].findIndex(
        n =>
          n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id
      );

      let nextPath = path(
        current[nodes[nodeIndex].name][nodeIndex],
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

export function changePath(
  current: any,
  nodes: Node[],
  action: (current: any) => any
) {
  return path(current, nodes, action)(0);
}
