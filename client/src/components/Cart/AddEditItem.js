import React, { useContext, useEffect, useState } from "react";
import Button from "../lib/Button";
import Modal from "../lib/Modal";
import Form from "./Form";
import { ListContext } from "../../contexts/ListContext";

export default function AddEditItem({ theme, item = false }) {
  const [modal, setModal] = useState(item);
  const { addElement, editElement } = useContext(ListContext);

  useEffect(() => {
    setModal(item);
  }, [item]);

  const onSubmit = (values) => {
    if (modal === true) {
      addElement({ id: Date.now(), ...values });
    } else {
      editElement(values);
    }
  };

  return (
    <div>
      <Button title="add product" onClick={() => setModal(true)} />
      <Modal title="Add Product" open={modal} onClose={() => setModal(false)}>
        <Form onSubmit={onSubmit} selectedValue={modal} />
      </Modal>
    </div>
  );
}
