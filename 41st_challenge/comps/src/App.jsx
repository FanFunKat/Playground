import { Link } from "./components/Link";
import { Route } from "./components/Route";
import { AccordionPage } from "./pages/AccordionPage";
import { DropdownPage } from "./pages/DropdownPage";

function App() {
  return (
    <>
      <Link to="/accordion">Accordion</Link>
      <Link to="/dropdown">Dropdown</Link>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </>
  )
}

export default App
