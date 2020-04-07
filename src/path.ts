export interface INode {
  select?: string;
  index?: number;
  searchFor?: {
    prop: string;
    id: string | number;
  };
}

export function path(
  current: any,
  nodes: INode[],
  action: (current: any) => any
) {
  return (nodeIndex: number) => {
    if (!nodes[nodeIndex]) {
      return action(current);
    }

    if (nodes[nodeIndex].index) {
      //Current is an array
      let nextIndex = nodes[nodeIndex].index;

      let nextPath = path(current[nextIndex], nodes, action)(nodeIndex + 1);

      return [
        ...current.slice(0, nextIndex),
        nextPath,
        ...current.slice(nextIndex + 1),
      ];
    } else if (nodes[nodeIndex].select) {
      let nextPath = path(
        current[nodes[nodeIndex].select],
        nodes,
        action
      )(nodeIndex + 1);

      return { ...current, [nodes[nodeIndex].select]: nextPath };
    } else {
      //Current is an array
      let nextIndex = current.findIndex(
        (n) =>
          n[nodes[nodeIndex].searchFor.prop] === nodes[nodeIndex].searchFor.id
      );

      let nextPath = path(current[nextIndex], nodes, action)(nodeIndex + 1);

      return [
        ...current.slice(0, nextIndex),
        nextPath,
        ...current.slice(nextIndex + 1),
      ];
    }
  };
}

export function changePath(
  current: any,
  nodes: INode[],
  action: (current: any) => any
) {
  return path(current, nodes, action)(0);
}
