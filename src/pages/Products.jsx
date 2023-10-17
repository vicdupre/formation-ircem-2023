import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Chargement....</p>;
  }

  return (
    <>
      <h2>Liste des produits</h2>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={"/product/" + product.id}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
