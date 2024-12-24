import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsEye } from "react-icons/bs";

export default function ShowProduct({ product }) {
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BsEye />
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
          <p className="text-center">
            <Image src={thumbnail} />
          </p>
          <p>Product ID: {id}</p>
          <p>Product Title: {title}</p>
          <p>Product Category: {category}</p>
          <p>Product Availability Status: {availabilityStatus}</p>
          <p>Product Brand: {brand}</p>
          <p>Product Stock: {stock}</p>
          <p>Product Rating: {rating}</p>
          <p>Product Price: {price}</p>
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
