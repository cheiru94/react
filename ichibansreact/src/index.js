import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';




const App = () => {
  const [n, setN] = useState(0);

  // 렌더링 되지 않는다.( 근데 안에 설정한 로직은 움직이고 있다.)
  const todoIdx = useRef(0); // todoIdx = { current:0 } 의 의미가 된다
  console.log(todoIdx);


  /* 1 */
  // useEffect(() => {
  //   console.log('렌더링 했음');
  // });

  /* 2 */
  useEffect(() => {
    console.log('렌더링 했음');
  }, [n]);

  /* 3 */
  useEffect(() => {
    console.log('렌더링 했음');
  }, [todoIdx.current]);


  const addTodo = () => {
    todoIdx.current = todoIdx.current + 1;
    // console.log(todoIdx);
    console.log(todoIdx.current);
  }


  return (
    <>
      <h1>카운터: {n}</h1>
      <button onClick={() => setN(n + 1)} > +1 </button>
      <hr></hr>

      <h1>todoIdx:{todoIdx.current}</h1>
      <button onClick={addTodo} > 새로할 일 추가 </button>
    </>
  )
};

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App />
  </>
);