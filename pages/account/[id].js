import React from "react";
import AddInvoice from "../../components/AddInvoice";
import { server } from "../../config";

export default function account({ account }) {
  const [active, setActive] = React.useState(0);
  const [business, setBusiness] = React.useState("Business 1");
  const [invoiceSent, setInvoiceSent] = React.useState(false);
  return (
    <div>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="nav-content">
          <p>{account.name}</p>
          <div className="avatar"></div>
        </div>
      </nav>

      <AddInvoice
        business={business}
        setInvoiceSent={setInvoiceSent}
        invoiceSent={invoiceSent}
      ></AddInvoice>

      <div className="sidenav">
        {account.businesses.map((business, index) => {
          return (
            <p
              key={business.id}
              onClick={() => {
                setActive(index);
                setBusiness(business.name);
                setInvoiceSent(false);
              }}
              style={{
                cursor: "pointer",
                color: active === index ? "purple" : "",
              }}
            >
              {business.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/account`);
  const accounts = await res.json();
  const paths = accounts.map((account) => ({
    params: { id: account.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${server}/api/account/${params.id}`);
  const account = await res.json();
  return {
    props: {
      account,
    },
  };
};
