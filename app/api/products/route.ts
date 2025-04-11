import { Product } from "@/types";

const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Dinosaur Print T-Shirt',
    price: 190.99,
    discount: 0.1,
    stock: 15,
    sizes: ['S', 'M', 'L'],
    thumbnailImage: '/images/products/dino-tshirt-thumb.jpg',
    otherImages: ['/images/products/dino-tshirt-1.jpg', '/images/products/dino-tshirt-2.jpg'],
    description: 'Colorful dinosaur print cotton t-shirt for kids. 100% organic cotton.',
    category: 'T-Shirts'
  },
  {
    id: 'prod-2',
    name: 'Unicorn Hoodie',
    price: 340.99,
    discount: 0.15,
    stock: 8,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/unicorn-hoodie-thumb.jpg',
    otherImages: ['/images/products/unicorn-hoodie-1.jpg', '/images/products/unicorn-hoodie-2.jpg'],
    description: 'Soft fleece hoodie with unicorn design. Perfect for chilly days.',
    category: 'Hoodies'
  },
  {
    id: 'prod-3',
    name: 'Striped Cotton Pants',
    price: 240.99,
    discount: 0,
    stock: 22,
    sizes: ['S', 'M', 'L'],
    thumbnailImage: '/images/products/striped-pants-thumb.jpg',
    otherImages: ['/images/products/striped-pants-1.jpg'],
    description: 'Comfortable striped pants with elastic waistband.',
    category: 'Pants'
  },
  {
    id: 'prod-4',
    name: 'Animal Socks (3-Pack)',
    price: 120.99,
    discount: 0.2,
    stock: 30,
    sizes: ['S'],
    thumbnailImage: '/images/products/animal-socks-thumb.jpg',
    otherImages: ['/images/products/animal-socks-1.jpg', '/images/products/animal-socks-2.jpg'],
    description: 'Adorable animal-themed socks pack. Non-slip soles included.',
    category: 'Accessories'
  },
  {
    id: 'prod-5',
    name: 'Rainbow Tutu Dress',
    price: 290.99,
    discount: 0.1,
    stock: 12,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/tutu-dress-thumb.jpg',
    otherImages: ['/images/products/tutu-dress-1.jpg', '/images/products/tutu-dress-2.jpg'],
    description: 'Fluffy rainbow-colored tutu dress for special occasions. Machine washable.',
    category: 'Dresses'
  },
  {
    id: 'prod-6',
    name: 'Space Explorer Pajama Set',
    price: 270.50,
    discount: 0,
    stock: 18,
    sizes: ['S', 'M', 'L'],
    thumbnailImage: '/images/products/space-pajamas-thumb.jpg',
    otherImages: ['/images/products/space-pajamas-1.jpg'],
    description: 'Comfy cotton pajama set with planets and rockets print.',
    category: 'Pajamas'
  },
  {
    id: 'prod-7',
    name: 'Denim Overalls',
    price: 390.99,
    discount: 0.25,
    stock: 7,
    sizes: ['M', 'L'],
    thumbnailImage: '/images/products/denim-overalls-thumb.jpg',
    otherImages: ['/images/products/denim-overalls-1.jpg', '/images/products/denim-overalls-2.jpg'],
    description: 'Durable denim overalls with adjustable straps. Multiple pockets included.',
    category: 'Overalls'
  },
  {
    id: 'prod-8',
    name: 'Shark Swim Trunks',
    price: 220.99,
    discount: 0.15,
    stock: 14,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/swim-trunks-thumb.jpg',
    otherImages: ['/images/products/swim-trunks-1.jpg'],
    description: 'Quick-dry swim trunks with fun shark design. UPF 50+ protection.',
    category: 'Swimwear'
  },
  {
    id: 'prod-9',
    name: 'Bunny Ears Beanie',
    price: 140.99,
    discount: 0.05,
    stock: 25,
    sizes: ['S'],
    thumbnailImage: '/images/products/bunny-beanie-thumb.jpg',
    otherImages: ['/images/products/bunny-beanie-1.jpg'],
    description: 'Warm knit beanie with adorable bunny ears. One size fits most.',
    category: 'Accessories'
  },
  {
    id: 'prod-10',
    name: 'Superhero Cape Set',
    price: 180.99,
    discount: 0.3,
    stock: 9,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/superhero-cape-thumb.jpg',
    otherImages: ['/images/products/superhero-cape-1.jpg', '/images/products/superhero-cape-2.jpg'],
    description: 'Playtime superhero set with velcro-attached cape and mask.',
    category: 'Costumes'
  },
  {
    id: 'prod-11',
    name: 'Organic Cotton Bodysuits (5-Pack)',
    price: 350.99,
    discount: 0,
    stock: 20,
    sizes: ['S'],
    thumbnailImage: '/images/products/bodysuits-thumb.jpg',
    otherImages: ['/images/products/bodysuits-1.jpg'],
    description: 'Softest organic cotton bodysuits for babies. Snap closure at bottom.',
    category: 'Baby'
  },
  {
    id: 'prod-12',
    name: 'Glow-in-the-Dark Sneakers',
    price: 420.99,
    discount: 0.2,
    stock: 11,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/glow-shoes-thumb.jpg',
    otherImages: ['/images/products/glow-shoes-1.jpg', '/images/products/glow-shoes-2.jpg'],
    description: 'Comfortable canvas sneakers that glow in the dark. Non-marking soles.',
    category: 'Shoes'
  },
  {
    id: 'prod-13',
    name: 'Glow-in-the-Dark Sneakers - 2',
    price: 420.99,
    discount: 0.2,
    stock: 0,
    sizes: ['S', 'M'],
    thumbnailImage: '/images/products/glow-shoes-thumb.jpg',
    otherImages: ['/images/products/glow-shoes-1.jpg', '/images/products/glow-shoes-2.jpg'],
    description: 'Comfortable canvas sneakers that glow in the dark. Non-marking soles.',
    category: 'Shoes'
  },
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