import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { server } from "../config";

export default function AddInvoice({ business, invoiceSent, setInvoiceSent }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setInvoiceSent(true);
  //   document.getElementById("invoice-form").reset();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${server}/api/add-invoice`, {
        body: JSON.stringify({
          email: e.target.email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      setInvoiceSent(true);
      document.getElementById("invoice-form").reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container my-5 col-12">
        <p className="font-weight-bold text-center">{business}</p>

        {invoiceSent ? (
          <div className="my-2" id="form-submitted">
            <div className="alert alert-success" role="alert">
              The invoice was successfully sent.
            </div>
          </div>
        ) : null}

        <div className="card p-5">
          <div className="card-title text-center">
            <h1>Journy.io's invoice application</h1>
          </div>
          <form
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
                required
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
              ></textarea>
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
