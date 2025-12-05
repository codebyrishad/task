
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeValue } from "./componenets/firstSlice";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const reduxValue = useSelector((state) => state.first.value);

  function handleSubmit() {
    if (!value.trim()) return;
    dispatch(storeValue(value));
    setValue(""); 
  }

  return (
    <>
      <h2>Info</h2>

      <input
        type="text"
        placeholder="type"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleSubmit}>submit</button>

      <h3>Redux Stored Value:</h3>
      <p>{reduxValue}</p>
    </>
  );
}

export default App;
