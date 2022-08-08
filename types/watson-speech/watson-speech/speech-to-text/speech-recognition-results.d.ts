// todo: fill these out better

export interface SpeechRecognitionWordAlternative {
    word: string;
    confidence: number;
}

export interface SpeechRecognitionWordAlternatives {
    start_time: number;
    end_time: number;
    alternatives: SpeechRecognitionWordAlternative[];
}

export interface SpeechRecognitionAlternative {
    confidence?: number;
    timestamps?: [string, number, number][]
    word_confidence?: [string, number][]
	transcript: string;
}

export interface SpeachRecognitionKeywordResult {
    normalized_text: string;
    start_time: number;
    confidence: number;
    end_time: number;
}

export interface SpeachRecognitionKeywordResults {
    [keyword: string]: SpeachRecognitionKeywordResult[]
}

export interface SpeechRecognitionResult {
	final: boolean;
    alternatives: SpeechRecognitionAlternative[];
    word_alternative?: SpeechRecognitionWordAlternatives;
    keywords_result?: SpeachRecognitionKeywordResults;
}

export interface SpeachRecognitionSpeakerLabel {
    from: number;
    to: number;
    speaker: number;
    confidence: number;
    final: boolean;
}

export interface SpeechRecognitionResults {
	result_index: number;
    results: SpeechRecognitionResult[];
    speaker_labels?: SpeachRecognitionSpeakerLabel[];
}
