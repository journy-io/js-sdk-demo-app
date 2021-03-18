import React from "react";
import { server } from "../config";
import Navbar from "./navbar";
import SideNav from "./sideNav";

export default function Layout({ children }) {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    await fetch(`${server}/api/user`)
      .then((res) => {
        res.json().then((data) => {
          return setUser(data.user);
        });
      })
      .catch((er) => {
        console.log(er);
      });
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
