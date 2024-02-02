import products from "./../data/productList.json";
import { useParams } from "react-router-dom";
import ProductDetailedCard from "../components/ProductDetailedCard/ProductDetailedCard";

function ProductPage() {
  const params = useParams();
  const id = params.id ? parseInt(params.id) : undefined;
  const product = id ? products.find((e) => e.ProductID === id) : undefined;
  /*  if (!product) redirect('/');*/

  if (!product) return <></>;
  return <ProductDetailedCard product={product} />;
}

export default ProductPage;
