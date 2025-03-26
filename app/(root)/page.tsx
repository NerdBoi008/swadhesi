'use client'

import useDataStore from "@/lib/store/dataStore";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {

  const { products: productsApi, fetchProducts } = useDataStore();

  const [ products, setProducts ] = useState<Product[] | null>();

  useEffect(() => {
    if (!productsApi) fetchProducts();

    if (productsApi) setProducts(productsApi);
    
  }, [productsApi, fetchProducts]);

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-2">
      <h1 className="font-medium tracking-wide">Whereas recognition of the inherent dignity</h1>
      {products && (
        products?.map((product) => (
          <div key={product.id} className="flex flex-col items-center justify-center border-2">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  )
}