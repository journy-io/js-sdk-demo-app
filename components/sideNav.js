import React, { useEffect } from "react";
import ActiveLink from "./ActiveLink";
import { server } from "../config";

function SideNav() {
  const [userAccounts, setAccounts] = React.useState([]);

  useEffect(() => {
    getAccounts();
  }, []);

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

  return (
    <div className="sidenav">
      {userAccounts.map((account) => {
        return (
          <ActiveLink
            activeClassName="active"
            key={account.id}
            href={`/accounts/invoices/add-invoice/${account.id}`}
          >
            <a>{account.name}</a>
          </ActiveLink>
        );
      })}
    </div>
  );
}

export default SideNav;
