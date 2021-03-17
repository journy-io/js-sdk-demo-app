import React from "react";
import AddInvoice from "../../components/AddInvoice";
import { server } from "../../config";
import accounts from "../../accounts.json";
export default function user({ user }) {
  const [active, setActive] = React.useState(0);
  const [userAccounts, setAccounts] = React.useState([]);
  const [invoiceSent, setInvoiceSent] = React.useState(false);

  React.useEffect(() => {
    getAccounts();
    console.log(user.id);
  }, []);

  const getAccounts = () => {
    let accountArray = [];
    for (let i = 0; i < accounts.length; i++) {
      for (let k = 0; k < accounts[i].users.length; k++) {
        if (accounts[i].users[k].id === user.id) {
          accountArray.push(accounts[i]);
        }
      }
    }
    setAccounts(accountArray);
  };

  return (
    <div>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-content">
          <p>{user.name}</p>
          <div className="avatar"></div>
        </div>
      </nav>

      {userAccounts[active] ? (
        <AddInvoice
          account={userAccounts[active]}
          setInvoiceSent={setInvoiceSent}
          invoiceSent={invoiceSent}
        />
      ) : null}

      <div className="sidenav">
        {userAccounts.map((account, index) => {
          return (
            <p
              key={account.id}
              onClick={() => {
                setActive(index);
                setInvoiceSent(false);
              }}
              style={{
                cursor: "pointer",
                color: active === index ? "purple" : "",
              }}
            >
              {account.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/users`);
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/users/${params.id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};
