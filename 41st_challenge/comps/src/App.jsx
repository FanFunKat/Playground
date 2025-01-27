import { Button } from './components/Button'

function App() {
  return (
    <>
      <div><Button primary rounded>Primary</Button></div>
      <div><Button secondary>Secondary</Button></div>
      <div><Button success>Success</Button></div>
      <div><Button warning>Warning</Button></div>
      <div><Button danger outline>Danger</Button></div>
    </>
  );
}

export default App
