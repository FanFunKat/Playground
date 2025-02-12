import NavigationContext from "../context/navigation";
import { useContext } from "react";

export function useNavigation() {
  return useContext(NavigationContext);
}