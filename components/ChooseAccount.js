import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ChooseAccount({
  showModal,
  setShowModal,
  accounts,
  onSwitchAccount,
}) {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please select an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {accounts.map((account) => {
            return (
              <Button
                key={account.id}
                onClick={() => onSwitchAccount(account.id)}
              >
                {account.name}
              </Button>
            );
          })}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}
