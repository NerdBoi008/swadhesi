export type CartItem = {
    id: string;
    quantity: number;
    size: 'S' | 'M' | 'L';
    color: string;
    price: number;
    name: string;
    thumbnailImage: string;
    stock: number;
    discount: number;
};

export type Cart = {
    cart: Set<CartItem>;
};
