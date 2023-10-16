
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";


// // [1] with JSX
// const element1 = (

//   <h1 className="App" >
//     ヨンジン専門大学　コンピューター情報系列 JI-A(AI SW)クラス
//   </h1>

// )

// // [2] Non JSX
// const element2 = React.createElement(
//   'h1',
//   { className: 'App', name: 'ichiban' },
//   'ヨンジン専門大学　コンピューター情報系列 JI- A(AI SW)クラス', '영진전문대학교 컴퓨터 정보계열', '이재일'

// );

// /* 어떤 내용이 찍히는지 확인해보자 */
// console.log(typeof (element1));  // object
// console.log(typeof (element2));  // object
// console.log(element1.props.className);  //App
// console.log(element2.props.className);  //App
// console.log(element1.children);  //undefined
// console.log(element2.children);  //undefined
// console.log(element2.props.name);  //ichiban
// console.log(element1);
// console.log(element2);

// /* 10. 컴포넌트 구현시 Non-JSX    vs    With JSX */
// // ReactDOM.createRoot(document.querySelector('#root')).render(
// //   // element1   --> 근냥 순수하게 이렇게 써도 안의 내용이 잘 나온다
// //   // element2

// //   <>
// //     {element1}
// //     {element2}
// //   </>
// // ) 


// [1] Function style -non JSX
const Greeting1 = (props) => {
  const ch = ['안녕', '소프트뱅크 합격', '축하한다, ', props.name, '!']   // 스프레드 연산저를 이렇게 배열 처리해서 사용할 수 있다.
  return (
    React.createElement('div', { id: "hello" }, [...ch])  //왜 다시 배열로 묶나? 
  );
};
/* 
   [...ch]와 같이 다시 한 번 더 배열로 묶어주는 이유는 모든 텍스트를 하나의 div 태그 안에 넣기 위함입니다. 
   [...ch]처럼 작성하면 ch배열 내부의 모든 값들이 별도의 자식 노드가 아니라 하나의 div 태그 안에 들어갑니다.
*/

// [2]  class style          React.Component로 부터 상속을 받는다. 
class Greeting2 extends React.Component { // 추상 클래스를 상속 받는 개념이다.
  render() { // 추상 메서드 개념이다.
    //                                            🟢 this를 붙여줘야 한다 🟢
    const ch = ['안녕', '소프트뱅크 합격', '축하한다, ', this.props.name, '!']   // 스프레드 연산저를 이렇게 배열 처리해서 사용할 수 있다.
    return (
      React.createElement('div', { id: "hello" }, [...ch])  //왜 다시 배열로 묶나?
    );
  }
}
console.log(React);

// [3] function type with JSX
const Greeting3 = (props) => {
  return (
    <>
      <div id='hello3'>
        {`안녕 소프트뱅크 ${props.name} 님`}
      </div>
    </>
  )
}

function Ichiban(props) {
  return (
    <div style={{ background: props.background }} >
      <h1 style={{ color: props.color }}>이재일 너는 너무 `{props.content}해!!`</h1>
    </div>
  )
}


Ichiban.defaultProps = {
  color: "blue",
  background: "yellow"
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <Greeting1 name='이재일' />
    <Greeting2 name='이재성' />
    <Greeting3 name='가자가자' />
    <Greeting3 name='이상열' />
    <Greeting3 name='박은영' />
    <Ichiban content='섹시' />

  </>
);