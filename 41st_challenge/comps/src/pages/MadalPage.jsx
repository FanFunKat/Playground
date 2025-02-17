import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useState } from "react";

export function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I Accept</Button>
    </div>
  );

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Modal Content</p>
  </Modal>;

  return (
    <div>
      <Button onClick={handleClick} primary >Open Modal</Button>
      {showModal && modal}
    </div>
  );
}