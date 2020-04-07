import { INode, changePath } from './path';

export interface ISearchNode {
  prop: string;
  id: string | number;
}

export class NodeBuilder {
  protected nodes: INode[];

  constructor(nodes?: INode[]) {
    this.nodes = nodes ? nodes : [];
  }

  public static create = () => new NodeBuilder();

  public select = (nodeName: string) => {
    const newNode: INode = { select: nodeName };
    return new SelectBuilder([...this.nodes, newNode]);
  };

  public index = (index: number) => {
    const newNode: INode = { index: index };
    return new NodeBuilder([...this.nodes, newNode]);
  };

  public apply = (start: any) => {
    return (action: (node: INode) => any) =>
      changePath(start, this.nodes, action);
  };
}

export class SelectBuilder extends NodeBuilder {
  public searchFor = (prop: string, id: string | number) => {
    const newNode: INode = { searchFor: { prop, id } };
    return new NodeBuilder([...this.nodes, newNode]);
  };
}
