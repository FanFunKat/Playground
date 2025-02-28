import { Button } from '../components/Button';
import { useReducer } from 'react';
import { Panel } from '../components/Panel';

const reducer = (state, action) => {
  //
}

export function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setVAlueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    // setCount(count + 1);
  };

  const decrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setVAlueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setVAlueToAdd(0);
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input className='p-1 m-3 bg-gray-50 border border-gray-300' type='number' value={state.valueToAdd || ""} onChange={handleChange} />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
};