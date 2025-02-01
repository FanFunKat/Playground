import { Accordion } from "./components/accordion"

function App() {

  const items = [
    {
      id: 1,
      label: "label1",
      content: "content1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      label: "label2",
      content: "content2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      label: "label3",
      content: "content3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  )
}

export default App
