import { Transform, TransformOptions, TransformCallback } from 'stream';
import { SpeechRecognitionResults } from './speech-recognition-results';
import promise from './to-promise';

interface FormatStreamOptions extends TransformOptions {
    model: string;
    hesitation: string;
    objectMode: boolean;
}

declare class FormatStream extends Transform {
    constructor(opts?: FormatStreamOptions);

    clean(text: string): string;
    capitalize(text: string): string;
    period(text: string): string;
    transformString(chunk: any, encoding: BufferEncoding, next: () => TransformCallback);
    transformObject(result: SpeechRecognitionResults, encoding: BufferEncoding, next: () => TransformCallback);
    formatString(str: string, isInterim: boolean): string;
    formatResult(data: SpeechRecognitionResults): SpeechRecognitionResults;
    promise: typeof promise
}
