export interface Node {
    name?: string;
    index?: number;
    searchFor?: {
        prop: string;
        id: string | number;
    };
}
export declare function path(current: any, nodes: Node[], action: (current: any) => any): (nodeIndex: number) => any;
export declare function changePath(current: any, nodes: Node[], action: (current: any) => any): any;
