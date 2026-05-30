import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>SkillSwap</h2>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;