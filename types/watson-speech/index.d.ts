// Type definitions for watson-speech 0.38
// Project: http://watson-speech.mybluemix.net/
// Definitions by: Jonathan Gawrych <https://github.com/JonathanGawrych>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Transform } from 'stream';

export interface SpeechToText {
    recognizeMicrophone: require('./recognize-microphone'),
    recognizeFile: require('./recognize-file'),
    getModels: require('./get-models'),

    WebAudioL16Stream: require('./webaudio-l16-stream'),
    RecognizeStream: require('./recognize-stream'),
    FilePlayer: require('./file-player'),
    FormatStream: require('./format-stream'),
    TimingStream: require('./timing-stream'),
    ResultStream: require('./result-stream'),
    SpeakerStream: require('./speaker-stream'),
    WritableElementStream: require('./writable-element-stream'),
    getUserMedia: require('get-user-media-promise'),
    MicrophoneStream: require('microphone-stream'),
    Buffer: Buffer
}

export class WebAudioL16Stream extends Transform {

}
