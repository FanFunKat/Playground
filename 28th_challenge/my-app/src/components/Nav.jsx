import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContrxt";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      {
        user ? (
          <>
            <Link to="/settings">Settings</Link>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <Link className="signin" to="/signin">Sign In</Link>
        )
      }
    </nav>
  )
}

export default Nav;