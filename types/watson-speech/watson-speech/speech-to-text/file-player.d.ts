
export = FilePlayer;

declare class UrlPlayer {
    constructor(url: string);

    stop(): void;
}

declare class FilePlayer {
    static ERROR_UNSUPPORTED_FORMAT: 'UNSUPPORTED_FORMAT';
    static getContentType(file: BlobPart): Promise<string>;

    static playFile(file: string): Promise<UrlPlayer>;
    static playFile(file: BlobPart, contentType?: string): Promise<FilePlayer>;

    constructor(file: BlobPart, contentType: string);

    stop(): void;
}
