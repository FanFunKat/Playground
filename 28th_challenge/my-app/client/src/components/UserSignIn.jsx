import { useRef, useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

const UserSignIn = () => {
  const { actions } = useContext(UserContext);
  const { accentColor } = useContext(ThemeContext);

  const username = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  // Event Handlers
  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      username: username.current.value,
      password: password.current.value
    }

    try {
      const user = await actions.signIn(credentials);
      if (user) {
        navigate("/authenticated");
      } else {
        setErrors(["Sign-in was unsuccessful"]);
      }
      //TODO: Get user from UserContext
      // success (user !== nul) -> navigate("/authenticated");
      // failure (user === null) -> update errors state;
    } catch (error) {
      console.log(error);
      navigate("/error");
    }

    // actions.signIn(username.current.value, password.current.value);
    // navigate("/");
  }

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="bounds">
      <div className="grid-33 centered signin">
        <h1>Sign In</h1>
        <div>
          {errors.length ? (
            <div>
              <h2 className="validation--errors--label">Validation errors</h2>
              <div className="validation-errors">
                <ul>
                  {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
              </div>
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              required
              type="text"
              ref={username}
              placeholder="Username" />
            <input
              id="password"
              required
              type="password"
              ref={password}
              placeholder="Password" />
            <div className="pad-bottom">
              <button className="button" type="submit" style={{ background: accentColor }}>Sign In</button>
              <button className="button button-secondary" style={{ color: accentColor }} onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
        <p>
          Don't have a user account? <Link style={{ color: accentColor }} to="/signup">Click here</Link> to sign up!
        </p>
      </div>
    </div>
  );
}

export default UserSignIn;