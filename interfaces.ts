export interface BeforeCall {
    iid: string;
    path: string[];
    args: any[];
    
    src: { host: string; port: string; },    
}

export interface AfterCall {
    iid: string;
    path: string[];
    result: any;
    args: any[];
    
    src: { host: string; port: string; },    
}

export interface AfterError {
    iid: string;
    path: string[];
    error: any;
    args: any[];
    
    src: { host: string; port: string; },    
}