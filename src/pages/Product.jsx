import { useParams } from "react-router-dom";
import { useFakeStore } from "../contexts/FakeStoreContext";

const Product = () => {
  const { productId } = useParams();
  const products = useFakeStore();
  const product = products.find((element) => element.id == productId);

  return (
    <>
      <div>
        <h2>
          {product.title} - {product.price}€
        </h2>
        <img width={250} height={250} src={product.image} />
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default Product;
