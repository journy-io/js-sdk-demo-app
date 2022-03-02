import AddInvoice from "../../../../components/AddInvoice";
import Layout from "../../../../components/Layout";
import React from "react";
import accounts from "../../../../data/accounts.json";

export default function Account({ account }) {
  return (
    <Layout account={account} screenName="Main screen">
      <AddInvoice account={account} />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const account = accounts.find((account) => account.id === params.id);

  return {
    props: {
      account,
    },
  };
};
