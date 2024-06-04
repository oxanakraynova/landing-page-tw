import { categoryImages } from "../enums/CategoryEnum";
import { Product } from "./ProductList";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const truncateString = (string: string, maxLength: number): string => {
    return string.length > maxLength
      ? string.substring(0, maxLength) + "..."
      : string;
  };
  const imageSrc =
    categoryImages[product.category as keyof typeof categoryImages];

  const handleClick = () => {
    if (product.image) {
      window.open(product.image, "_blank");
    }
  };
  return (
    <div className="w-full h-full bg-custom-gradient rounded-lg shadow overflow-hidden text-overflow-elepsis">
      <div className="relative">
        <img
          className="rounded-t-lg object-cover h-52 w-full"
          src={imageSrc}
          alt="Product image"
        />
        <div className="absolute top-8 right-8 text-white">
          <span className="font-bold">{product.rating.rate}/5</span>
        </div>
      </div>
      <div className="p-8 flex flex-col items-start">
        <h5 className="pb-8 text-left text-3xl font-bold tracking-tight text-secondary">
          {truncateString(product.title, 60)}
        </h5>
        <p className="mb-12 text-left text-base font-medium text-secondary">
          {truncateString(product.description, 142)}
        </p>
        <button
          className="inline-flex items-center text-sm font-medium text-center text-white bg-success rounded-lg hover:bg-lime-600 focus:ring-4 focus:outline-none"
          onClick={handleClick}
        >
          Detail produktu
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
