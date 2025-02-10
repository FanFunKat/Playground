import { useContext } from "react";
import NavigationContext from "../context/navigation";

export function Link({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  }

  const { navigate } = useContext(NavigationContext);

  return (
    <a onClick={handleClick}>
      {children}
    </a>
  );
};