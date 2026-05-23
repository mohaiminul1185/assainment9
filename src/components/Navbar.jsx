import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div className="navbar">

      <h1 className="logo">WarmPaws</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>

    </div>

  );
};

export default Navbar;