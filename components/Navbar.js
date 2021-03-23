import { useRouter } from "next/router";

export default function Navbar({ user }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout");
    router.push("/");
  };

  return (
    <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-content">
        <p>
          {user.first_name} {user.last_name}
        </p>
        <div className="avatar" />
        <button onClick={handleLogout} className="btn btn-warning">
          Logout
        </button>
      </div>
    </nav>
  );
}
