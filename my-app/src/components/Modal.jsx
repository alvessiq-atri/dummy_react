import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Cart from "../routes/edit-menu";

function ModalDemo(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const num = 1;

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Cart: {num}
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Your cart</ModalHeader>
        <ModalBody>
          Cart Empty.
          <Cart />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add more ;)
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Order Now!
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDemo;
