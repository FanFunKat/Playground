import { Button } from '../components/Button';
import { useReducer } from 'react';
import { Panel } from '../components/Panel';
import { produce } from 'immer';

const INCREMENT_COUNT = "increment-count"
const DECREMENT_COUNT = "decrement-count"
const CHANGE_VALUE = "change-value"
const SUBMIT_VALUE = "submit-value"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1
      return;
    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return;
    case SUBMIT_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

export function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setVAlueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT
    })
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setVAlueToAdd(value);
    dispatch({
      type: CHANGE_VALUE,
      payload: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setVAlueToAdd(0);
    dispatch({
      type: SUBMIT_VALUE
    })
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