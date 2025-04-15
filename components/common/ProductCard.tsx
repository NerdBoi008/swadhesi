import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { ShoppingBasketIcon } from 'lucide-react';
import CustomButton from './CustomButton';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useRouter } from 'next/navigation';
import { buildUrl } from '@/lib/utils';

interface ProductCardProps extends Omit<Product, 'id'>, React.ComponentPropsWithoutRef<'div'> {
    id: string; 
}

const ProductCard = ({
    id,
    name,
    price,
    className,
    discount,
    otherImages,
    thumbnailImage,
    recommendedProducts,
    category,
    ...divProps
}: ProductCardProps) => {
    const router = useRouter();

    const discountedPrice = price * (1 - (discount || 0));

    return (
        <div 
            className={`group ${className} flex flex-col w-full flex-1 max-w-96 cursor-pointer justify-start items-center`} 
            {...divProps}
            onClick={() => {
                router.push(buildUrl(`products/${category}/product-details`, { productId: id }));
            }}
        >
            <div className='overflow-hidden relative w-full'>
                <Image
                    // src={thumbnailImage || '/cdn-imgs/hero_img_5.jpg'}
                    src={'/cdn-imgs/hero_img_5.jpg'}
                    alt={name}
                    height={600}
                    width={400}
                    className='object-cover w-full transition-transform duration-300 group-hover:scale-105'
                />
                <TooltipProvider delayDuration={1550}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <CustomButton
                                className='absolute invisible group-hover:visible bottom-0 right-0 m-4 flex items-center justify-center gap-2'
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.stopPropagation();
                                }}
                            >
                                <ShoppingBasketIcon className="size-4.5"/>
                            </CustomButton>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                        <p>Quick shop</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                
            </div>
          
            <div className="flex flex-col justify-center items-center font-semibold text-xs sm:text-sm md:text-base mt-2">
                <h3 className="text-wrap text-center">{name}</h3>
                <div className="flex items-center sm:gap-2 flex-col sm:flex-row">
                    {discount ? (
                        <>
                            <span className="">₹{discountedPrice.toFixed(2)}</span>
                            <span className="text-xs line-through text-gray-500">₹{price.toFixed(2)}</span>
                            <span className="text-green-700 font-bold">{(discount * 100).toFixed(0)}% off</span>
                        </>
                    ) : (
                        <span>₹{price.toFixed(2)}</span>
                    )}
                </div>
            </div>
      </div>
      
  )
}

export default ProductCard;