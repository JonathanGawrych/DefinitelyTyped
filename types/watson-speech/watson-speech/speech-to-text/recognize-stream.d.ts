import { Duplex, DuplexOptions, TransformCallback } from 'stream';
import { SpeechRecognitionResults } from './speech-recognition-results';
import promise from './to-promise';
import { w3cwebsocket } from 'websocket';

interface RecognizeStreamBaseOptions extends DuplexOptions {
    url?: string;
    headers?: w3cwebsocket.http.OutgoingHttpHeaders;
    token?: string;
    watsonToken?: string;
    accessToken?: string;
    model?: string;
    languageCustomizationId?: string;
    acousticCustomizationId?: string;
    baseModelVersion?: string;
    xWatsonLearningOptOut?: boolean;
    xWatsonMetadata?: string;
    contentType?: string;
    customizationWeight?: number;
    inactivityTimeout?: number;
    interimResults?: boolean;
    keywords?: string;
    keywordsThreshold?: number;
    maxAlternatives?: number;
    wordAlternativesThreshold?: number;
    wordConfidence?: boolean;
    timestamps?: boolean;
    profanityFilter?: boolean;
    smartFormatting?: boolean;
    speakerLabels?: boolean;
    grammarName?: string;
    redaction?: boolean;
    processingMetrics?: boolean;
    processingMetricsInterval?: number;
    audioMetrics?: boolean;
    silent?: boolean;
}

type RecognizeStreamObjectModeOptions = RecognizeStreamBaseOptions & ({
    readableObjectMode: true;
} | {
    objectMode: true;
});

type RecognizeStreamStringModeOptions = RecognizeStreamBaseOptions & {
    readableObjectMode?: false;
    objectMode?: false;
};

declare class BaseRecognizeStream extends Duplex {
    static ERROR_UNRECOGNIZED_FORMAT: 'UNRECOGNIZED_FORMAT';
    static getContentType(buffer: Buffer): string|undefined;

    options: RecognizeStreamOptions;
    listening: boolean;
    initialized: boolean;
    finished: boolean;
    socket: w3cwebsocket;

    initialize(): void;
    sendJSON(msg: any): void;
    sendData(msg: ArrayBufferView | ArrayBuffer | Buffer | {toString: (...args: any[]) => string}): void;
    afterSend(next: () => void): void;
    stop(): void;
    finish(): void;
    promise: typeof promise;

    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'open', listener: () => void): this;
    on(event: 'close', listener: (code: number, reason: string) => void): this;
    on(event: 'message', listener: (/*things here*/) => void): this;
    on(event: 'listening', listener: () => void): this;
    on(event: 'send-json', listener: (msg: any) => void): this;
    on(event: 'send-data', listener: (msg: ArrayBufferView | ArrayBuffer | Buffer | {toString: (...args: any[]) => string}) => void): this;
    on(event: 'stop', listener: () => void): this;
}

declare class RecognizeStreamObjectMode extends BaseRecognizeStream {
    constructor(opts?: RecognizeStreamObjectModeOptions);

    on(event: 'data', listener: (data: SpeechRecognitionResults) => void): this;
}

declare class RecognizeStreamStringMode extends BaseRecognizeStream {
    constructor(opts?: RecognizeStreamStringModeOptions);

    on(event: 'data', listener: (transcript: string) => void): this;
}

const RecognizeStream: {
    new(opts: RecognizeStreamObjectModeOptions): RecognizeStreamObjectMode;
    new(opts: RecognizeStreamStringModeOptions): RecognizeStreamStringMode;
};
