import React from "react";
import './App.css'
import data from "./data.json";
console.log(data);

export const App = () => {
  return (
    <div className='container'>
      {data.map((name) => {
        return (
          <div className='text'>
            <h3>{name.name.first}</h3>
            <h4>{name.name.last}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default App;
