interface OptionType {
    id: number
    text: string;
    next: string;
}

interface Questionnaire {
    name: string;
    type: string;
    text: string;
    options: OptionType[];
}
