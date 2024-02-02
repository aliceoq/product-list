import "./ProductCard.css";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  retailPrice: number;
  thumbnailURL: string;
  onClick: (id: number) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  retailPrice,
  thumbnailURL,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="container">
      <div className="tile-container">
        <img src={thumbnailURL} alt={name} />
        <div>
          <h2>{name}</h2>
          <div className="price-container">
            <p>${price}</p>
            <p className="retail-price">${retailPrice}</p>
          </div>
        </div>
      </div>
      <button className="details-button" onClick={() => onClick(id)}>View details</button>
    </div>
  );
};

export default ProductCard;
