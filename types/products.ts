export type Product = {
    id: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    sizes: ('S' | 'M' | 'L')[];  // Kids' clothing sizes
    thumbnailImage: string;
    otherImages: string[];
    description: string;
    category: string;
};
