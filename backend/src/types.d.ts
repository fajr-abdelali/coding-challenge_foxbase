export interface Product {
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