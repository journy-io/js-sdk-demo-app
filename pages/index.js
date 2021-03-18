import { server } from "../config";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Router from "next/router";

export default function Home() {
  const [error, setError] = React.useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${server}/api/login`, {
        body: JSON.stringify({
          email: e.target.email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      await res.json().then((res) => {
        Router.push(`accounts/invoices/add-invoice/1`);
      });
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <title>Journy.io Node.js SDK demo - Log In</title>

      <div className="container my-5 col-12">
        <div className="card p-5">
          <div className="card-title text-center">
            <h1>Journy.io's invoice application</h1>
          </div>
          <form className="col-12" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                id="email"
                placeholder="name@example.com"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="text-right">
              <button className="btn btn-primary" id="login-form" type="submit">
                Log in
              </button>
            </div>
          </form>
          {error ? <p className="error-message">Email is not correct</p> : null}
        </div>
      </div>
    </div>
  );
}
