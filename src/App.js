import Header from "./Components/Header";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=100`
      );
      const res = await get.json();
      setData(res);
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state + 1)}>Click Me {state}</button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
