import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    //const getProduct = async () => {}
    async function getProduct() {
      setLoading(true);
      const res = await axios.get(
        "https://fakestoreapi.com/products/" + productId
      );
      if (res.data === "") {
        setLoading(false);
        throw new Error("Product not found");
      }
      console.log(res);
      setProduct(res.data);
      setLoading(false);
    }

    getProduct();
  }, []);

  return loading ? (
    <p>Chargement...</p>
  ) : (
    <>
      <div>
        <h2>
          {product?.title} - {product.price}€
        </h2>
        <img width={250} height={250} src={product.image} />
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default Product;
