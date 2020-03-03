export interface Node {
  name?: string;
  idProp?: string;
  id?: string | number;
}

export function path(current: any, nodes: Node[], nodeIndex: number) {
  if (!nodes[nodeIndex]) {
    return current;
  }

  if (!nodes[nodeIndex].name) {
    let next = current.find(
      n => n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id
    );
    return path(next, nodes, nodeIndex + 1);
  } else if (nodes[nodeIndex].name && !nodes[nodeIndex].idProp) {
    return path(current[nodes[nodeIndex].name], nodes, nodeIndex + 1);
  } else {
    let next = current[nodes[nodeIndex].name].find(
      n => n[nodes[nodeIndex].idProp] === nodes[nodeIndex].id
    );
    return path(next, nodes, nodeIndex + 1);
  }
}
