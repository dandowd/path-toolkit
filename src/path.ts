export interface Node {
  name?: string;
  idProp?: string;
  id?: string | number;
}

export function path(
  current: any,
  nodes: Node[],
  action?: (current: any) => any
) {
  return nodeIndex => {
    if (!nodes[nodeIndex]) {
      if (!nodes[nodeIndex + 1] && action) {
        console.log(current);
        current = action(current);
        console.log(current);
      }
      return current;
    }

    if (!nodes[nodeIndex].name) {
      let next = current.find(
        n => n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id
      );
      return path(next, nodes, action)(nodeIndex + 1);
    } else if (nodes[nodeIndex].name && !nodes[nodeIndex].idProp) {
      return path(current[nodes[nodeIndex].name], nodes, action)(nodeIndex + 1);
    } else {
      let next = current[nodes[nodeIndex].name].find(
        n => n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id
      );
      return path(next, nodes, action)(nodeIndex + 1);
    }
  };
}

export function getPath(current: any, nodes: Node[]) {
  return path(current, nodes)(0);
}

export function changePath(
  current: any,
  nodes: Node[],
  action: (current: any) => any
) {
  return path(current, nodes, action)(0);
}
