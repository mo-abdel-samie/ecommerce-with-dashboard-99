import { createContext, useContext, useState } from "react";
import MainApi from "../apis/MainApi";

const ProductContext = createContext({
  getAllProducts: () => {},
  getSingleProduct: () => {},
  searchByProductName: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
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

  const updateProduct = (id, updatedProductData) => {
    MainApi.put(`/products/${id}`, updatedProductData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteProduct = (id, cb) => {
    MainApi.delete(`/products/${id}`)
      .then((res) => cb(res))
      .catch((err) => console.log(err));
  };

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        getSingleProduct,
        searchByProductName,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
