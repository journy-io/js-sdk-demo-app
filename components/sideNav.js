import React, { useState, useEffect } from "react";
import { server } from "../config";
import ActiveLink from "./ActiveLink";
import getAccountUsers from "../util/getAccountUsers";
import { useRouter } from "next/router";

function SideNav({ user }) {
  const [userAccounts, setAccounts] = useState([]);
  const [accountUsers, setAccountUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAccounts();
  }, []);

  useEffect(() => {
    const accountId = router.asPath.slice(-1);
    const users = getAccountUsers(accountId);
    setAccountUsers(users);
  }, [router.asPath]);

  const getAccounts = async () => {
    await fetch(`${server}/api/user-accounts`)
      .then((res) => {
        res.json().then((data) => {
          return setAccounts(data.userAccounts);
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleAccountSwitch = async (accountId) => {
    try {
      const res = await fetch(`${server}/api/login-account`, {
        body: JSON.stringify({
          accountId,
          userId: user.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      await res.json();
      await setShowModal(false);
      await Router.push(`accounts/invoices/add-invoice/${accountId}`);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="sidenav">
      <h4>Your Accounts</h4>
      {userAccounts.map((account) => {
        return (
          <ActiveLink
            activeClassName="active"
            key={account.id}
            href={`/accounts/invoices/add-invoice/${account.id}`}
          >
            <div className="accounts">
              <a onClick={() => handleAccountSwitch(account.id)}>
                {account.name}
              </a>
              {router.asPath ===
              `/accounts/invoices/add-invoice/${account.id}` ? (
                <div>
                  <h6>-Team Members-</h6>
                  {accountUsers.map((user) => {
                    return (
                      <p
                        key={user.id}
                        style={{ color: "white", fontSize: "10" }}
                      >
                        {user.first_name}
                      </p>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </ActiveLink>
        );
      })}
    </div>
  );
}

export default SideNav;
