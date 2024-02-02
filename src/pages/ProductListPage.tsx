import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "./../data/productList.json";

function ProductListPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>ProductListPage</div>
      <div className="product-list-container">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product.ProductID}
              name={product.Name}
              price={product.Price}
              retailPrice={product["Retail Price"]}
              thumbnailURL={product.ThumbnailURL}
              onClick={(id) => navigate(`/${id}`)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductListPage;
