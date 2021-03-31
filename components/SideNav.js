import React, { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";

function SideNav({ user }) {
  const [accounts, setAccounts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAccounts().finally(() => {});
  }, []);

  const getAccounts = async () => {
    const accounts = await (await fetch("/api/user/accounts")).json();
    setAccounts(accounts);
  };

  const handleAccountSwitch = async (newAccountId) => {
    const oldAccountId = router.asPath.slice(-1);
    await fetch("/api/switch-account", {
      body: JSON.stringify({
        newAccountId,
        oldAccountId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    router.push(`/accounts/invoices/add-invoice/${newAccountId}`);
  };

  return (
    <div className="sidenav">
      <h4>Your Accounts</h4>
      {accounts.map((account) => {
        return (
          <ActiveLink
            activeClassName="active"
            key={account.id}
            href={`/accounts/invoices/add-invoice/${account.id}`}
          >
            <div className="accounts">
              <button
                type="button"
                style={{ border: "none", background: "none", padding: 0 }}
                onClick={() => handleAccountSwitch(account.id)}
              >
                {account.name}
              </button>
              {router.asPath ===
              `/accounts/invoices/add-invoice/${account.id}` ? (
                <div>
                  <h6>-Team Members-</h6>
                  {account.users.map((user) => {
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
