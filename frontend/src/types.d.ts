interface OptionType {
    id: number
    text: string;
    next: string;
}

interface Questionnaire {
    [key: string]: {
        type: string;
        text: string;
        options: OptionType[];
    };
}
