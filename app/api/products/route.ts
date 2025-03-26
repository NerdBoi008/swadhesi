import { Product } from "@/types";

const mockProducts: Product[] = [
    {
      id: 'prod-1',
      name: 'Dinosaur Print T-Shirt',
      price: 19.99,
      discount: 0.1, // 10% discount
      stock: 15,
      sizes: ['S', 'M', 'L'],
      thumbnailImage: '/images/products/dino-tshirt-thumb.jpg',
      otherImages: [
        '/images/products/dino-tshirt-1.jpg',
        '/images/products/dino-tshirt-2.jpg'
      ],
      description: 'Colorful dinosaur print cotton t-shirt for kids. 100% organic cotton.',
      category: 'T-Shirts'
    },
    {
      id: 'prod-2',
      name: 'Unicorn Hoodie',
      price: 34.99,
      discount: 0.15, // 15% discount
      stock: 8,
      sizes: ['S', 'M'],
      thumbnailImage: '/images/products/unicorn-hoodie-thumb.jpg',
      otherImages: [
        '/images/products/unicorn-hoodie-1.jpg',
        '/images/products/unicorn-hoodie-2.jpg'
      ],
      description: 'Soft fleece hoodie with unicorn design. Perfect for chilly days.',
      category: 'Hoodies'
    },
    {
      id: 'prod-3',
      name: 'Striped Cotton Pants',
      price: 24.99,
      discount: 0, // No discount
      stock: 22,
      sizes: ['S', 'M', 'L'],
      thumbnailImage: '/images/products/striped-pants-thumb.jpg',
      otherImages: [
        '/images/products/striped-pants-1.jpg'
      ],
      description: 'Comfortable striped pants with elastic waistband.',
      category: 'Pants'
    },
    {
      id: 'prod-4',
      name: 'Animal Socks (3-Pack)',
      price: 12.99,
      discount: 0.2, // 20% discount
      stock: 30,
      sizes: ['S'], // One-size (adjust if needed)
      thumbnailImage: '/images/products/animal-socks-thumb.jpg',
      otherImages: [
        '/images/products/animal-socks-1.jpg',
        '/images/products/animal-socks-2.jpg'
      ],
      description: 'Adorable animal-themed socks pack. Non-slip soles included.',
      category: 'Accessories'
    }
];
  
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


/**
 * GET endpoint for products
 * @url /api/products
 * @returns Product list
*/
export async function GET() {
    try {
        await delay([200, 300, 500][Math.floor(Math.random() * 3)]); // Simulate network delay

        console.log({
            output: "Fetching products..."
        });

        const products: Product[] = mockProducts;

        const productsWithDiscount = products.map((product) => {
            const discountedPrice = product.price - product.price * product.discount;
            return { ...product, discountedPrice };
        });
        
        return Response.json(
            productsWithDiscount, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'public, max-age=3600' // Cache response for 1 hour
                }
            }
        );

    } catch (error) {
        console.error("Error fetching products", error);
        return Response.json(
            { error: "Error fetching products" },
            { status: 500 }
        );
    }
}