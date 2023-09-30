/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_propsValidation';
//import App from './App';
// import App from './App.js'; //상기 소스코드와 같은 효과


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  //   JSX
   <>
     <App />

   </>  
);
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

const SomeComponent = (props) => {
  //return(<>{props.data[2]}</>)
  return (
    <div>
      <input
        type='text'
        // value = {props.searchText}  value - html OK, jsx- X
        defaultValue={props.searchText}
      />
    </div>
  )
};


/* 🟢 propTypes 부여하기 */
SomeComponent.propTypes = {
  //data:PropTypes.arrayOf(PropTypes.number)
  searchText: PropTypes.oneOf(['male', 'female'])
};


//ReactDOM.createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    {/* <h1>헬로우~~</h1> */}
    {/* <SomeComponent data={[1,2,'3',4,5]} /> */}
    {/* props로 배열전달시 {배열명} */}
    <SomeComponent searchText='female' />
    <SomeComponent searchText='abc' />
  </>
);