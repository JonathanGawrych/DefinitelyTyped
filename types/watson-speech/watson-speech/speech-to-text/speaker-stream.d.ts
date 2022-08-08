import { Transform, TransformOptions } from 'stream';
import { SpeechRecognitionResults } from './speech-recognition-results';
import promise from './to-promise';

interface SpeakerStreamOptions extends TransformOptions {
    speakerlessInterim: boolean;
}

declare class SpeakerStream extends Transform {
    static ERROR_MISMATCH: 'MISMATCH';
    static speakerLabelsSorter(a: {from: number, to: number}, b: {from: number, to: number}): number;

    options: SpeakerStreamOptions;
    mismatchErrorEmitted: boolean;
    extraLabels: boolean;

    constructor(options?: SpeakerStreamOptions);

    isFinal(): boolean;
    buildMessage(): SpeechRecognitionResults|void;
    handleResults(data: SpeechRecognitionResults): void;
    handleSpeakerLabels(data: SpeechRecognitionResults): void;
    promise: typeof promise
}
