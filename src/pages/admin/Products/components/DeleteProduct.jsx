import { useFormik } from "formik";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useProductContext } from "../../../../contexts/ProductContext";

export default function DeleteProduct({ product }) {
  const { deleteProduct } = useProductContext();
  const { id, title } = product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <BiTrash />
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
          <p>Confirm to delete</p>
          <p className="text-danger fs-3">{title}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteProduct(id, (res) => {
            console.log(res);
            res.status == 200 && handleClose();
          })}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
