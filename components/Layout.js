import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { IntercomProvider, useIntercom } from "react-use-intercom";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Layout({ children, account }) {
  const { data: user } = useSWR("/api/user", fetcher);
  const { data: accounts } = useSWR("/api/user/accounts", fetcher);

  if (!user || !accounts) {
    return <p>Loading...</p>;
  }

  return (
    <IntercomProvider
      appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID}
      autoBoot={true}
      autoBootProps={{
        userId: user.id,
        email: user.email,
        name: `${user.first_name} ${user.last_name}`,
        company: {
          companyId: account.id,
          name: account.name,
        },
        companies: accounts.map((account) => ({
          companyId: account.id,
          name: account.name,
        })),
      }}
    >
      <div>
        <Navbar user={user} account={account} />
        {children}
        <SideNav user={user} account={account} />
      </div>
    </IntercomProvider>
  );
}
