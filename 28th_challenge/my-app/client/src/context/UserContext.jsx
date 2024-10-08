import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { api } from "../utils/apiHelper";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const cookie = Cookies.get("authenticatedUser");
  const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);

  const signIn = async (credentials) => {

    // const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

    // const fetchOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //     "Authorization": `Basic ${encodedCredentials}`
    //   }
    // };

    const response = await api("/users", "GET", null, credentials);
    if (response.status === 200) {
      const user = await response.json();
      setAuthUser(user);
      Cookies.set("authenticatedUser", JSON.stringify(user), { expires: 1 });
      return user;
    } else if (response.status === 401) {
      return
    } else {
      throw new Error();
    }
  }

  const signOut = () => {
    setAuthUser(null);
    Cookies.remove("authenticatedUser");
  }

  return (
    <UserContext.Provider value={{
      authUser,
      actions: {
        signIn,
        signOut
      }
    }}>
      {props.children}
    </UserContext.Provider>
  );
}