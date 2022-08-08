import { RecognizeStreamObjectModeOptions, RecognizeStreamStringModeOptions, RecognizeStreamObjectMode, RecognizeStreamStringMode } from "./recognize-stream";

interface RecognizeMicrophoneBaseOptions {
    token: string;
    accessToken: string;
    url?: string;
    keepMicrophone?: boolean;
    mediaStream?: MediaStream;
}

type RecognizeMicrophoneRecognizeStreamObjectModeOptions = RecognizeMicrophoneBaseOptions & RecognizeStreamObjectModeOptions;
type RecognizeMicrophoneRecognizeStreamStringModeOptions = RecognizeMicrophoneBaseOptions & RecognizeStreamStringModeOptions;

type RecognizeMicrophoneResultsBySpeakerObjectModeOptions = RecognizeMicrophoneRecognizeStreamObjectModeOptions & SpeakerStreamOptions & {
    resultsBySpeaker: true;
}
type RecognizeMicrophoneResultsBySpeakerStringModeOptions = RecognizeMicrophoneRecognizeStreamStringModeOptions & SpeakerStreamOptions & {
    resultsBySpeaker: true;
}

type RecognizeMicrophoneFormatObjectModeOptions = RecognizeMicrophoneRecognizeStreamObjectModeOptions & SpeakerStreamOptions & {
    resultsBySpeaker: true;
}
type RecognizeMicrophoneFormatStringModeOptions = RecognizeMicrophoneRecognizeStreamStringModeOptions & SpeakerStreamOptions & {
    resultsBySpeaker: true;
}

type AddStopAndRecognizeStream<T, S> = T & {
    stop(): void;
    recognizeStream: S;
}

export = recognizeMicrophone;
declare function recognizeMicrophone(options: RecognizeMicrophoneResultsBySpeakerObjectModeOptions): AddStopAndRecognizeStream<RecognizeStreamObjectMode, RecognizeStreamObjectMode>;
declare function recognizeMicrophone(options: RecognizeMicrophoneResultsBySpeakerStringModeOptions): AddStopAndRecognizeStream<RecognizeStreamStringMode, RecognizeStreamStringMode>;
declare function recognizeMicrophone(options: RecognizeMicrophoneRecognizeStreamObjectModeOptions): AddStopAndRecognizeStream<RecognizeStreamObjectMode, RecognizeStreamObjectMode>;
declare function recognizeMicrophone(options: RecognizeMicrophoneRecognizeStreamStringModeOptions): AddStopAndRecognizeStream<RecognizeStreamStringMode, RecognizeStreamStringMode>;
