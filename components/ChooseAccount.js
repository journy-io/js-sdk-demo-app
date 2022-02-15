import Link from "next/link";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ChooseAccount({ showModal, setShowModal, accounts }) {
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
              <div key={account.id}>
                <Link
                  href={`/accounts/invoices/add-invoice/${account.id}`}
                  passHref
                >
                  <Button variant="link">{account.name}</Button>
                </Link>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}
