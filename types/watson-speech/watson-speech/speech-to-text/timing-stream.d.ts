import { Transform, TransformOptions } from 'stream';
import { SpeechRecognitionResults } from './speech-recognition-results';
import promise from './to-promise';

interface TimingStreamOptions extends TransformOptions {
    emitAt: typeof TimingStream.START | typeof TimingStream.END;
    delay: number;
}

declare class TimingStream extends Transform {
    static START: 1;
    static END: 2;
    static TimingLabelsSorter(a: {from: number, to: number}, b: {from: number, to: number}): number;

    options: TimingStreamOptions;
    startTime: number;
    stopped: boolean;
    timeout: number | null;

    constructor(options?: TimingStreamOptions);

    getMessageTime(msg: SpeechRecognitionResults): number;
    getDelayMs(msg: SpeechRecognitionResults): number;
    setStartTime(time?: number): void;
    promise: typeof promise
    stop(): void;
}
