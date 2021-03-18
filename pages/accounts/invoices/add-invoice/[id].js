import AddInvoice from "../../../../components/AddInvoice";
import { server } from "../../../../config";
import Layout from "../../../../components/layout";
import React from "react";

export default function Account({ account }) {
  React.useEffect(() => {
    console.log(account);
  });

  return (
    <Layout>
      <AddInvoice account={account}></AddInvoice>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/accounts`);

  const accounts = await res.json();
  const paths = accounts.map((account) => ({
    params: { id: account.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${server}/api/accounts/invoices/add-invoice/${params.id}`
  );
  const account = await res.json();
  return {
    props: {
      account,
    },
  };
};
