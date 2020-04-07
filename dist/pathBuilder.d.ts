import { INode } from './path';
export interface ISearchNode {
    prop: string;
    id: string | number;
}
export declare class NodeBuilder {
    protected nodes: INode[];
    constructor(nodes?: INode[]);
    static create: () => NodeBuilder;
    select: (nodeName: string) => SelectBuilder;
    index: (index: number) => NodeBuilder;
    apply: (start: any) => (action: (node: INode) => any) => any;
}
export declare class SelectBuilder extends NodeBuilder {
    searchFor: (prop: string, id: string | number) => NodeBuilder;
}
