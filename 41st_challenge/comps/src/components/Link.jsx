import { useContext } from "react";
import NavigationContext from "../context/navigation";

export function Link({ to, children }) {
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  }

  const { navigate } = useContext(NavigationContext);

  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};