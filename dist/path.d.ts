export interface Node {
    name?: string;
    searchFor?: {
        prop: string;
        id: string | number;
    };
}
export declare function path(current: any, nodes: Node[], action?: (current: any) => any): (nodeIndex: number) => any;
export declare function getPath(current: any, nodes: Node[]): any;
export declare function changePath(current: any, nodes: Node[], action: (current: any) => any): any;
