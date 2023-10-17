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
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <h1>Chargement...</h1>
  ) : (
    <FakeStoreContext.Provider value={products}>
      {children}
    </FakeStoreContext.Provider>
  );
};

FakeStoreContextProvider.propTypes = {
  children: PropTypes.element,
};

export { FakeStoreContext, FakeStoreContextProvider, useFakeStore };