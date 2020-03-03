export interface Node {
    name?: string;
    idProp?: string;
    id?: string | number;
}
export declare function path(current: any, nodes: Node[], action?: (current: any) => any): (nodeIndex: any) => any;
export declare function getPath(current: any, nodes: Node[]): any;
export declare function changePath(current: any, nodes: Node[], action: (current: any) => any): any;
