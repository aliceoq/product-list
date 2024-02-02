import { Product } from "../../type/Product";
import "./ProductDetailedCard.css";

interface ProductDetailedCardProps {
  product: Product;
  onAddCart?: () => void;
}

const ProductDetailedCard = ({ product }: ProductDetailedCardProps) => {
  return (
    <div>
      <div className="detailed-container">
        <img src={product.PictureURL} alt={product.Name} />
        <div>
          <h1>{product.Name}</h1>
          <p>{product.Description}</p>
          <p>Rating: {product.RatingAvg ?? product["Rating Avg"]}</p>
        </div>
        <div>
          <p>${product.Price}</p>
          <p>${product["Retail Price"]}</p>
          <p>{product.Stock > 0 ? product.Stock : "Out of stock"}</p>
        </div>
      </div>
      <div>
        <p>Brand: {product.Brand}</p>
        <p>Color: {product.Color}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetailedCard;
