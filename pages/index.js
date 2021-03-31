import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import ChooseAccount from "../components/ChooseAccount";
import Image from "next/image";

export default function Home() {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let user;
    try {
      user = await (
        await fetch("/api/login", {
          body: JSON.stringify({
            email: e.target.email.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        })
      ).json();
    } catch (error) {
      setError(true);
    }

    const accounts = await (await fetch("/api/user/accounts")).json();
    setShowModal(true);
    setAccounts(accounts);
  };

  const onSwitchAccount = async (accountId) => {
    await fetch("/api/switch-account", {
      body: JSON.stringify({
        accountId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setShowModal(false);
    router.push(`/accounts/invoices/add-invoice/${accountId}`);
  };

  return (
    <>
      <ChooseAccount
        showModal={showModal}
        setShowModal={setShowModal}
        accounts={accounts}
        onSwitchAccount={onSwitchAccount}
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
