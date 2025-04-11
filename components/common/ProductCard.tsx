import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { ShoppingBasketIcon } from 'lucide-react';
import CustomButton from './CustomButton';

interface ProductCardProps extends Omit<Product, 'id'>, React.ComponentPropsWithoutRef<'div'> {
    id: string; 
}

const ProductCard = ({
    name,
    price,
    className,
    discount,
    otherImages,
    thumbnailImage,
    ...divProps
}: ProductCardProps) => {
    const discountedPrice = price * (1 - (discount || 0));

    return (
        <div 
            className={`group ${className} flex flex-col w-full flex-1 max-w-96 cursor-pointer justify-start items-center`} 
            {...divProps}
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
                <CustomButton
                    className='absolute invisible group-hover:visible bottom-0 left-0 right-0 p-2 m-4 flex items-center justify-center gap-2'
                    onClick={() => {
                        
                    }}
                >
                    Quick Shop
                    <ShoppingBasketIcon className="hidden group-hover:block size-4.5"/>
                </CustomButton>
            </div>
          
            <div className="flex flex-col justify-center items-center font-semibold text-xs sm:text-sm md:text-base mt-2">
                <h3 className="text-wrap text-center">{name}</h3>
                <div className="flex items-center sm:gap-2 flex-col sm:flex-row">
                    {discount ? (
                        <>
                            <span className="">₹{discountedPrice.toFixed(2)}</span>
                            <span className="text-xs line-through text-gray-500">₹{price.toFixed(2)}</span>
                            <span className="text-green-700 font-bold">{(discount * 100).toFixed(2)}% off</span>
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