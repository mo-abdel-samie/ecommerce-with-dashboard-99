import { useFormik } from "formik";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useProductContext } from "../../../../contexts/ProductContext";

export default function EditProduct({ product }) {
  const { updateProduct } = useProductContext();
  const {
    id,
    title,
    description,
    category,
    availabilityStatus,
    brand,
    stock,
    rating,
    price,
    thumbnail,
  } = product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateForm = useFormik({
    initialValues: {
      title: title,
      description: description,
      category: category,
      availabilityStatus: availabilityStatus,
      brand: brand,
      stock: stock,
      rating: rating,
      price: price,
      thumbnail: thumbnail,
    },
    onSubmit: (values) => {
      console.log(values);
      updateProduct(id, {...values, id: 10});
    },
  });

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <BiEdit />
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product title"
                {...updateForm.getFieldProps("title")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Product description"
                {...updateForm.getFieldProps("description")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Product Price"
                {...updateForm.getFieldProps("price")}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={updateForm.handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
