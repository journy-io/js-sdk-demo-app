import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ChooseAccount = ({
  showModal,
  setShowModal,
  userAccounts,
  loginAccount,
}) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please Select an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userAccounts.map((account) => {
            return (
              <Button onClick={() => loginAccount(account.id)}>
                {account.name}
              </Button>
            );
          })}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ChooseAccount;
