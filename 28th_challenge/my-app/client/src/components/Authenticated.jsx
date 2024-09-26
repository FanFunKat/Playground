import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Authenticated = () => {
  const { autUser } = useContext(UserContext);
  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>{autUser.name} is Authenticated</h1>
        <p>Your username is {autUser.username}</p>
        <p>Head over to Settings to change up your preferences</p>
      </div>
    </div>
  );
}

export default Authenticated;