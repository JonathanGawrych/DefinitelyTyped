import { SpeechRecognitionResults } from "./speech-recognition-results";

export = noTimestamps;
declare function noTimestamps(data: SpeechRecognitionResults): boolean;

declare namespace noTimestamps {
    export const ERROR_NO_TIMESTAMPS: 'NO_TIMESTAMPS';
}
