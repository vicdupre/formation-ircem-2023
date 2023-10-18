import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const FakeStoreContext = createContext();

const useFakeStore = () => useContext(FakeStoreContext);

const FakeStoreContextProvider = (props) => {
  const { children } = props;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  /* loading ? (
    <h1 data-testid="fakeStoreLoading">Chargement...</h1>
  ) : ( */
  return (
    <FakeStoreContext.Provider value={products}>
      {children}
    </FakeStoreContext.Provider>
  );
};

FakeStoreContextProvider.propTypes = {
  children: PropTypes.element,
};

export { FakeStoreContext, FakeStoreContextProvider, useFakeStore };
