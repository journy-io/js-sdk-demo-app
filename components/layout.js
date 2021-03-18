import React from "react";
import { server } from "../config";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

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
          <SideNav />
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
