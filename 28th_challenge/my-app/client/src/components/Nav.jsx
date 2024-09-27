import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { authUser } = useContext(UserContext);
  return (
    <nav>
      {
        authUser ? (
          <>
            <span>Welcome {authUser.username}</span>
            <Link to="/settings">Settings</Link>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <>
            <Link className="signup" to="/signup">Sign Up</Link>
            <Link className="signin" to="/signin">Sign In</Link>
          </>
        )
      }
    </nav>
  )
}

export default Nav;