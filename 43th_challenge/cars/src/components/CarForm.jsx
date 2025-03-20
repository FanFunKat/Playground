import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store";

export function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name || "";
  });
  const cost = useSelector((state) => {
    return state.form.cost || 0;
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  return (
    <div className="car-form">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange} />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number" />
          </div>
        </div>
      </form>
    </div>
  )
}