export = getModels;

// TODO: double check this type
export interface Models {
    url: string,
    rate: number,
    name: string,
    language: string,
    description: string
}

export interface TokenOptions {
    url?: string;
    token: string;
}

export interface AccessTokenOptions {
    url?: string;
    accessToken: string;
}

declare function getModels(options: TokenOptions | AccessTokenOptions): Promise<Models[]>;
