import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import CategoryList from './Category'

ReactDOM.render(
  <React.StrictMode>
    <CategoryList/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);