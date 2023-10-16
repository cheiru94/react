
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";


// [1] with JSX
const element1 = (

  <h1 className="App" >
    ヨンジン専門大学　コンピューター情報系列 JI-A(AI SW)クラス
  </h1>

)

// [2] Non JSX
const element2 = React.createElement(
  'h1',
  { className: 'App', name: 'ichiban' },
  'ヨンジン専門大学　コンピューター情報系列 JI- A(AI SW)クラス', '영진전문대학교 컴퓨터 정보계열', '이재일'

);

/* 어떤 내용이 찍히는지 확인해보자 */
console.log(typeof (element1));  // object
console.log(typeof (element2));  // object
console.log(element1.props.className);  //App
console.log(element2.props.className);  //App
console.log(element1.children);  //undefined
console.log(element2.children);  //undefined
console.log(element2.props.name);  //ichiban
console.log(element1);
console.log(element2);


/* 10. 컴포넌트 구현시 Non-JSX    vs    With JSX */
// ReactDOM.createRoot(document.querySelector('#root')).render(
//   // element1   --> 근냥 순수하게 이렇게 써도 안의 내용이 잘 나온다
//   // element2

//   <>
//     {element1}
//     {element2}
//   </>
// ) 


// ReactDOM.createRoot().render() 함수는 하나의 React 요소만 렌더링할 수 있습니다. 
ReactDOM.createRoot(document.querySelector('#root')).render(
  // element1, // 제일 먼저 출력한 놈이 젤 먼저 나온다.
  // element2,
  // element1,
  // element1,  // // 이렇게 4개를 호출해도 결국에는 1개만 나온다.........
  // 3   // -> 가능
  //{3}  // -> 불가  = ReactDOM.createRoot().render() 함수는 React 요소를 인수로 받아야 합니다. 숫자, 문자열, 배열 등의 일반 JavaScript 값은 직접 렌더링할 수 없습니다.


);