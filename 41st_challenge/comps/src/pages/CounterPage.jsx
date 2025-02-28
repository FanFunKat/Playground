import { Button } from '../components/Button';
import { useReducer } from 'react';
import { Panel } from '../components/Panel';

const INCREMENT_COUNT = "increment-count"
const DECREMENT_COUNT = "decrement-count"
const CHANGE_VALUE = "change-value"
const SUBMIT_VALUE = "submit-value"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case SUBMIT_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default:
      throw new Error("unexpected action type" + action.type)
  }
};

export function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setVAlueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
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