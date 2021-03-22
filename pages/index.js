import React, { useState } from "react";
import { server } from "../config";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import ChooseAccount from "../components/ChooseAccount";

export default function Home() {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${server}/api/login-user`, {
        body: JSON.stringify({
          email: e.target.email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      await res.json().then((user) => {
        fetch(`${server}/api/user-accounts`)
          .then((result) => {
            result.json().then((data) => {
              setLoggedInUser(user);
              setShowModal(true);
              setUserAccounts(data.userAccounts);
            });
          })
          .catch((er) => {
            console.log(er);
          });
      });
    } catch (err) {
      setError(true);
    }
  };

  const loginAccount = async (accountId) => {
    try {
      await fetch(`${server}/api/login-account`, {
        body: JSON.stringify({
          accountId,
          userId: loggedInUser.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      await setShowModal(false);
      await Router.push(`accounts/invoices/add-invoice/${accountId}`);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <ChooseAccount
        showModal={showModal}
        setShowModal={setShowModal}
        userAccounts={userAccounts}
        loginAccount={loginAccount}
      />
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
          {error ? <p className="error-message">Unknown user</p> : null}
        </div>
      </div>
    </div>
  );
}
