import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().finally(() => {});
  }, []);

  const getUser = async () => {
    const response = await (await fetch("/api/user")).json();
    setUser(response);
  };

  return (
    <>
      {user ? (
        <div>
          <Navbar user={user} />
          {children}
          <SideNav user={user} />
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
