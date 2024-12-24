import React, { useEffect, useState } from "react";
import { useProductContext } from "../../../contexts/ProductContext";
import { Button, Image, Table } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import ShowProduct from "./components/ShowProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts(({ data }) => {
      console.log(data.products);
      setProducts(data.products);
    });
  }, [getAllProducts]);

  return (
    <div>
      {console.log("Products")}
      <h1>Products</h1>

      {!products.length > 0 && <p>Loading....</p>}

      {products.length > 0 && (
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#id</th>
              <th>Title</th>
              <th>category</th>
              <th>availabilityStatus</th>
              <th>brand</th>
              <th>stock</th>
              <th>rating</th>
              <th>price</th>
              <th>thumbnail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              const {
                id,
                title,
                category,
                availabilityStatus,
                brand,
                stock,
                rating,
                price,
                thumbnail,
              } = product;

              return (
                <tr key={i}>
                  <td>
                    <p>{id}</p>
                  </td>
                  <td className="text-nowrap">{title}</td>
                  <td>{category}</td>
                  <td>{availabilityStatus}</td>
                  <td>{brand}</td>
                  <td className={stock < 10 ? "text-danger" : ""}>{stock}</td>
                  <td>{rating}</td>
                  <td>{price}</td>
                  <td>
                    <Image className="img-fluid" width={75} src={thumbnail} />
                  </td>
                  <td>
                    <div className="d-flex align-items-center my-auto">
                      <ShowProduct product={product} />
                      <EditProduct product={product} />
                      <DeleteProduct product={product} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
