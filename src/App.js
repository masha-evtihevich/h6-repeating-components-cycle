import React from "react";
import './App.css'
import data from "./data.json";
// Вывести имена и фамилии из массива, который находится во вложениях в json-формате.
export const App = () => {
  return (
    <div className='container'>
      {data.map((name) => {
        return (
          <div className='text' key={name._id}>
            <h3>{name.name.first}</h3>
            <h4>{name.name.last}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default App;
