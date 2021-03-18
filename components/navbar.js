export default function Navbar({ user }) {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-content">
        <p>{user.name}</p>
        <div className="avatar"></div>
      </div>
    </nav>
  );
}
