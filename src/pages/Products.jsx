import { useContext } from "react";
import { Link } from "react-router-dom";
import { FakeStoreContext } from "../contexts/FakeStoreContext";

const Products = () => {
  const products = useContext(FakeStoreContext);

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
