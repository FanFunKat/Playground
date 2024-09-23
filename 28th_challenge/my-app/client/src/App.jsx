import { Route, Routes } from "react-router-dom"

// App Components
import Header from "./components/Header"
import Home from "./components/Home"
import UserSignIn from "./components/UserSignIn"
import UserSignOut from "./components/UserSignOut"
import UserSignUp from "./components/UserSignUp"
import Settings from "./components/Settings"
import Authenticated from "./components/Authenticated"
import NotFound from "./components/NotFound"

function App() {

  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authenticated" element={<Authenticated />} />
        <Route path="signin" element={<UserSignIn />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="signout" element={<UserSignOut />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
