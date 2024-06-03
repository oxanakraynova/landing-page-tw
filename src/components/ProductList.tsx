import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

interface ProductCardListProps {
  sortingOption: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: Rating;
  category: string;
}

interface Rating {
  count: number;
  rate: number;
}

function ProductCardList({ sortingOption }: ProductCardListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit] = useState<number>(6);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    fetchProducts();
  }, [sortingOption, offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 6);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortingOption === "best") {
      return b.rating.rate - a.rating.rate;
    } else if (sortingOption === "worst") {
      return a.rating.rate - b.rating.rate;
    }
    return 0;
  });

  return (
    <>
      <div className="flex flex-wrap -mx-2 sm:-mx-3 md:-mx-4 lg:-mx-5">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="w-full px-2 sm:w-1/2 sm:px-3 md:w-1/3 md:px-4 lg:w-1/3 lg:px-5"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer onClick={handleLoadMore} />
    </>
  );
}

export default ProductCardList;
