import React, { useEffect, useState } from "react";
import { useProductContext } from "../../../contexts/ProductContext";
import { Button, Image, Table } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

export default function Products() {
  const [products, setProducts] = useState([]);

  const { getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts(({ data }) => {
      console.log(data.products);
      setProducts(data.products);
    });
  }, []);

  return (
    <>
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
            {products.map(
              (
                {
                  id,
                  title,
                  category,
                  availabilityStatus,
                  brand,
                  stock,
                  rating,
                  price,
                  thumbnail,
                },
                i
              ) => (
                <tr key={i}>
                  <th>{id}</th>
                  <th className="text-nowrap">{title}</th>
                  <th>{category}</th>
                  <th>{availabilityStatus}</th>
                  <th>{brand}</th>
                  <th className={stock < 10 ? "text-danger" : ""}>{stock}</th>
                  <th>{rating}</th>
                  <th>{price}</th>
                  <th>
                    <Image className="img-fluid" width={75} src={thumbnail} />
                  </th>
                  <th>
                    <div className="d-flex align-items-center my-auto">
                      <Button variant="primary">
                        <BsEye />
                      </Button>
                      <Button variant="success">
                        <BiEdit />
                      </Button>
                      <Button variant="danger">
                        <BiTrash />
                      </Button>
                    </div>
                  </th>
                </tr>
              )
            )}
          </tbody>
        </Table>
      )}
    </>
  );
}
