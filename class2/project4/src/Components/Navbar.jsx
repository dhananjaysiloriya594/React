import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img src="imgi_1_logo.svg" alt="Logo" />
        <a href="/">Home</a>
        <a href="/">Courses</a>
        <a href="/">Register for free</a>
      </div>

      <div className="right">
        <a href="/">Login</a>
        <a href="/">Sign-Up</a>
      </div>
    </div>
  );
}

export default Navbar;
