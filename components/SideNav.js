import React, { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";

function SideNav({ account }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts().finally(() => {});
  }, []);

  const getAccounts = async () => {
    const accounts = await (await fetch("/api/user/accounts")).json();
    setAccounts(accounts);
  };

  const selectedAccountId = account.id;

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
              <p className="name">{account.name}</p>
              {selectedAccountId === account.id ? (
                <div>
                  <h6>-Team Members-</h6>
                  {account.users.map((user) => {
                    return (
                      <p key={user.id} className="team-member-name">
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
