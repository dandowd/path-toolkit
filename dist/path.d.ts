export interface Node {
    name?: string;
    idProp?: string;
    id?: string | number;
}
export declare function path(current: any, nodes: Node[], nodeIndex: number): any;
