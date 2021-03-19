import Router from "next/router";
import { server } from "../config";

export default function Navbar({ user }) {
  const handleLogout = async () => {
    await fetch(`${server}/api/logout`)
      .then(() => {
        Router.push("/");
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-content">
        <p>
          {user.first_name} {user.last_name}
        </p>
        <div className="avatar"></div>
        <button onClick={handleLogout} className="btn btn-warning">
          Logout
        </button>
      </div>
    </nav>
  );
}
