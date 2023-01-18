import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Cart from "../routes/cart";

function ModalDemo(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Cart
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
