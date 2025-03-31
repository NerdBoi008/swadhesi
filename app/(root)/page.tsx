'use client'

import useDataStore from "@/lib/store/dataStore";
import { Product } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { yanoneKaffeesatz } from "../fonts";
import { Button } from "@/components/ui/button";

export default function Home() {

  const { products: productsApi, fetchProducts } = useDataStore();
  const [products, setProducts] = useState<Product[] | null>();



  useEffect(() => {
    if (!productsApi) fetchProducts();

    if (productsApi) setProducts(productsApi);
    
  }, [productsApi, fetchProducts]);  

  return (
    <main className="relative flex flex-1 flex-col space-y-6">
      {/* Hero Section */}      
      <section className="flex gap-6 justify-between container-x-padding pt-3 flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col items-center justify-center sm:flex-col sm:items-start gap-4">
          <div>
            {/* Desktop Text */}
            <p className="hidden md:block text-wrap text-2xl lg:text-4xl align-baseline">
              <span className="text-5xl lg:text-6xl font-bold text-[#E07A5F]">Discover</span> timeless pieces{" "}
              <span className="text-4xl lg:text-5xl font-bold text-[#2a9d8f]">crafted</span> for comfort and{" "}
              <span className="text-4xl lg:text-5xl font-bold text-[#e63946]">style</span>.
            </p>
            <p className="hidden md:block text-muted-foreground mt-3 text-sm">Limited edition designs now available.</p>

            {/* Mobile Text */}
            <p className="block md:hidden text-2xl align-baseline">
              <span className="text-4xl font-bold text-[#E07A5F]">Discover</span> comfort &{" "}
              <span className="text-4xl font-bold text-[#e63946]">style</span>.
            </p>
            <p className="block md:hidden text-muted-foreground mt-2 text-xs">New designs are here.</p>
          </div>
          <Button>SHOP THE COLLECTION</Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full items-end sm:items-center">
          {/* First Image - Left */}
          <div className="relative h-0 pb-[125%]"> {/* 4:5 aspect ratio */}
            <Image
              src="/cdn-imgs/hero_img_6.jpg"
              alt="hero-img"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Image - Center (Taller) */}
          <div className="relative h-0 pb-[140%] col-span-1 row-span-1"> {/* 5:7 aspect ratio */}
            <Image
              src="/cdn-imgs/hero_img_5.jpg"
              alt="hero-img"
              fill
              className="object-cover hover:grayscale transition-all duration-300"
            />
          </div>

          {/* Third Image - Right (Grayscale) */}
          <div className="relative h-0 pb-[130%]"> {/* ~3:4 aspect ratio */}
            <Image
              src="/cdn-imgs/hero_img_7.jpg"
              alt="hero-img"
              fill
              className="object-cover object-[50%_0%] grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      
      {/* Products */}
      <section className="container-x-padding flex flex-col items-center justify-center gap-4 mt-6">
        {/* Products Heading */}
        <div className="text-center">
          <h2 className={`${yanoneKaffeesatz.className} text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider`}>New Arrivals</h2>
        </div>
      </section>

      {/* section */}
      <section className="h-lvw">

      </section>
    </main>
  )
}