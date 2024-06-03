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
    <>
      <div className="max-w-sm bg-custom-gradient h-fit rounded-lg shadow">
        <div className="relative">
          <a href="#">
            <img className="rounded-t-lg" src={imageSrc} alt="Product image" />
          </a>
          <div className="absolute top-8 right-8 text-white">
            <span className="font-bold">{product.rating.rate}/5</span>
          </div>
        </div>
        <div className="p-8 flex flex-col items-start">
          <a href="#">
            <h5 className="pb-8 text-left text-2xl font-bold tracking-tight text-primary ">
              {truncateString(product.title, 60)}
            </h5>
          </a>
          <p className="mb-3 text-left font-normal text-primary">
            {truncateString(product.description, 142)}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-success rounded-lg hover:bg-lime-600 focus:ring-4 focus:outline-none"
            onClick={handleClick}
          >
            Detail produktu
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
