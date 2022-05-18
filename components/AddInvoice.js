import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function AddInvoice({ account }) {
  const [invoiceSent, setInvoiceSent] = useState(false);
  const [featureTriggered, setFeatureTriggered] = useState({});
  const [payingTriggered, setPayingTriggered] = useState(false);
  const [churnTriggered, setChurnTriggered] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    clearForm();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`/api/add-invoice`, {
      body: JSON.stringify({
        client_email: e.target.email.value,
        accountId: account.id,
        invoice_price: e.target.price.value,
        services: e.target.services.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setInvoiceSent(true);
    clearForm();
  }

  async function handleTriggerFeature(e) {
    e.preventDefault();
    await fetch(`/api/trigger-feature`, {
      body: JSON.stringify({
        featureName: e.target.id,
        accountId: account.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setFeatureTriggered({ success: true, name: e.target.name });
  }

  const clearForm = () => {
    formRef.current.reset();
  };

  async function handlePayButton() {
    await fetch(`/api/start-paying`, {
      body: JSON.stringify({
        accountId: account.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setPayingTriggered(true);
  }

  async function handleChurnButton() {
    await fetch(`/api/churn`, {
      body: JSON.stringify({
        accountId: account.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setChurnTriggered(true);
  }

  return (
    <div>
      <div className="container my-5 col-12">
        <div>
          <div className="mb-3">
            <button
              name="Feature 1"
              id="feature1"
              className="btn btn-primary"
              onClick={(e) => handleTriggerFeature(e)}
            >
              Feature 1
            </button>
            <button
              name="Feature 2"
              id="feature2"
              className="btn btn-primary"
              onClick={(e) => handleTriggerFeature(e)}
            >
              Feature 2
            </button>
            <button
              name="Feature 3"
              id="feature3"
              className="btn btn-primary"
              onClick={(e) => handleTriggerFeature(e)}
            >
              Feature 3
            </button>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <button
              className="btn btn-success"
              type="button"
              onClick={handlePayButton}
            >
              Start paying
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleChurnButton}
            >
              Consider churning
            </button>
          </div>
        </div>
        <p className="font-weight-bold text-center">{account.name}</p>
        {invoiceSent ? (
          <div className="my-2" id="form-submitted">
            <div className="alert alert-success" role="alert">
              The invoice was successfully sent.
            </div>
          </div>
        ) : null}
        {payingTriggered ? (
          <div className="my-2" id="form-submitted">
            <div className="alert alert-success" role="alert">
              You are now a customer!
            </div>
          </div>
        ) : null}
        {churnTriggered ? (
          <div className="my-2" id="form-submitted">
            <div className="alert alert-success" role="alert">
              You are about to churn!
            </div>
          </div>
        ) : null}
        {featureTriggered.success ? (
          <div className="my-2" id="page-changed">
            <div className="alert alert-success" role="alert">
              {featureTriggered.name} was successfully triggered.
            </div>
          </div>
        ) : null}
        <div className="card p-5">
          <div className="card-title text-center">
            <h1>Journy.io's Invoice Application</h1>
          </div>
          <form
            ref={formRef}
            id="invoice-form"
            className="col-12"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form-group">
              <label htmlFor="email">Client email address</label>
              <input
                className="form-control"
                name="email"
                id="email"
                placeholder="name@example.com"
                type="email"
                required={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="services">Services bought</label>
              <textarea
                className="form-control"
                name="services"
                id="services"
                placeholder="Services"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Invoice price</label>
              <input
                className="form-control"
                name="price"
                id="price"
                placeholder="1337"
                type="number"
                required
              />
            </div>
            <div className="text-right">
              <button
                className="btn btn-success"
                id="invoice-form"
                type="submit"
              >
                Create Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
