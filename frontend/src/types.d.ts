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

interface Product {
    id: Int
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
}

interface Rating {
    rate: Float
    count: Int
}
