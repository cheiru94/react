import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
// import { } from "./components/selfcheck";

const App = () => {
  return (
    <div>index</div>
  )
}

// 원래 모습
/* const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
) */


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App />
  </>
);

