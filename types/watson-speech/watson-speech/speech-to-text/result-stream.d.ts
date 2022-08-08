import { Transform, TransformOptions } from 'stream';
import promise from './to-promise';

declare class ResultStream extends Transform {
    constructor(options?: TransformOptions);

    promise: typeof promise
}
