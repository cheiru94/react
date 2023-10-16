
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";


// 강의 자료 참고 
// const el = React.createElement;
// el(
//   'h1', props, 'test'
// );



/* 🟢 [1] if 문 사용 */
// const App = () => {
//   let result = null;
//   const loginCheck = 'y';


//   if (loginCheck === 'y') {
//     result = <h3>이재일님 환영 합니다.</h3>
//   } else {
//     result = <h3>단디 입력 안하나 마 </h3>
//   }
// return result;
// }


/* 🟢 [2] 삼항 연산자 or &&(AND) */
// const App = () => {
//   let loginCheck = 'y';
//   return (
//     <>
//       {
//         loginCheck === 'y' ? <h3>이재일님 환영 합니다.</h3> : <h3>디 입력 안하나 마 </h3>
//       }
//       {loginCheck === 'y' && <h3>이재일님 환영 합니다.</h3>}
//     </>
//   )
// }

/* 🟢 [3] IIFE (Immediately Invoked Function Expression)  : 즉시 호출되는 함수 표현식*/
// 형식 : (이름없는 함수 정의) ()
// 이름없는 함수를 정의하고 곧 바로 호출
const App = () => {
  const loginCheck = 'y';

  return (<>
    {
      // JSX내에서 JS 코드 실행
      (() => { // 이름없는 함수 정의

        //if 문, 삼항 연산자 , && 사용가능하다
        // return loginCheck === 'y' && <h1>안녕 하시소</h1>
        return loginCheck === 'y' ? <h1>이재일님 환영 합니다</h1> : <h2>안녕하시소!</h2>

      })()  // 정의와 함께 여기서 바로 호출한다는 의미
    }

  </>)
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App />

  </>
);