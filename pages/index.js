import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChooseAccount from "../components/ChooseAccount";
import Image from "next/image";
import Analytics from "../components/Analytics";

export default function Home() {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/login", {
        body: JSON.stringify({
          email: e.target.email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (error) {
      setError(true);
    }

    const accounts = await (await fetch("/api/user/accounts")).json();
    setShowModal(true);
    setAccounts(accounts);
  };

  return (
    <>
      <Analytics screenName="Login" />
      <ChooseAccount
        showModal={showModal}
        setShowModal={setShowModal}
        accounts={accounts}
      />
      <div className=" my-5 col-12  text-center">
        <div className="logo">
          <Image src="/logo.png" width={500} height={87} />
        </div>
        <div className="card p-5">
          <div className="card-title text-center ">
            <h1>Journy.io's Accounting for Cool Bands Demo App</h1>
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
          {error ? <p className="error-message">Unknown user</p> : null}
        </div>
      </div>
    </>
  );
}
