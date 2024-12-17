import { createContext, useContext, useState } from "react";
import MainApi from "../apis/MainApi";

const ProductContext = createContext({
  getAllProducts: () => {},
  getSingleProduct: () => {},
  searchByProductName: () => {},
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = (cb) => {
    MainApi.get("/products")
      .then((res) => cb(res))
      .catch((err) => console.log(err));
  };

  const getSingleProduct = (id, cb) => {
    MainApi.get("/products/" + id)
      .then((res) => cb(res))
      .catch((err) => console.log(err));
  };

  const searchByProductName = (q, cb) => {
    MainApi.get("/products/search?q=" + q)
      .then((res) => cb(res))
      .catch((err) => console.log(err));
  };

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        getSingleProduct,
        searchByProductName,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
