export type Product = {
    id: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    sizes: ProductSizes[];  // Kids' clothing sizes
    thumbnailImage: string;
    otherImages: string[];
    description: string;
    category: string;
};

export type ProductSizes = 'S' | 'M' | 'L'