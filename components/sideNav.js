import React from "react";
import accounts from "../accounts.json";
import ActiveLink from "./ActiveLink";

function SideNav({ user }) {
  const [userAccounts, setAccounts] = React.useState([]);
  React.useEffect(() => {
    getAccounts();
  }, [user]);
  const getAccounts = () => {
    let accountArray = [];
    for (let i = 0; i < accounts.length; i++) {
      for (let k = 0; k < accounts[i].users.length; k++) {
        if (user && accounts[i].users[k].id === user.id) {
          accountArray.push(accounts[i]);
        }
      }
    }
    setAccounts(accountArray);
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
