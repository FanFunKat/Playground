import { Button } from './components/Button'
import { GoBell, GoAlert, GoThumbsup } from "react-icons/go";

function App() {
  return (
    <>
      <div>
        <Button primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div><Button secondary>Secondary</Button></div>
      <div>
        <Button success>
          <GoThumbsup />
          Success
        </Button>
      </div>
      <div><Button warning>Warning</Button></div>
      <div>
        <Button danger outline>
          <GoAlert />
          Danger
        </Button>
      </div>
    </>
  );
}

export default App
