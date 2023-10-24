import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';


/* 🟢 특정 엘리먼트를 선택 useRef 🟢*/
/* 자식 요소도 건들여 보기  */
const App = () => {
  const inputRef = useRef();


  // useEffect 
  useEffect(() => {
    console.log(inputRef.current)
    // inputRef.current.focus();
  }, []); //  1번만 실행

  const inputId = () => {

    console.log(inputRef.current.value)
    console.log(inputRef.current.value.length)
    console.log(inputRef.current.value.size)
    if (inputRef.current.value.length > 8) {
      alert('아이디의 길이는: 8이하')
      inputRef.current.value = null;
    }
  };


  return (
    <>
      <form action="">
        {/* <fieldset>은 HTML에서 관련된 폼 요소들을 그룹화하는 데 사용되는 태그입니다. 
         <fieldset>은 일련의 관련된 입력 필드를 하나의 그룹으로 묶어서 
         구조적으로 표현할 수 있도록 도와줍니다. */}
        <fieldset style={{ padding: '50px' }}>
          <legend>회원가입</legend>
          {/* JSX : 자바스크립트의 for과 같기 때문에 html이라 명시해서 htmlFor로 명시한다 */}
          <label htmlFor="mid">ID</label> :
          <input
            type="text"
            ref={inputRef} // 리액트의 input 엘리먼트가 된다. 
            size='24'
            style={{ padding: "10px" }}
            autoComplete='off'
            id='mid'
            placeholder='ID를 입력하세요...'
            onChange={inputId}
          />

          <br /> <br />

          <legend htmlFor="email">e-mail</legend>
          {/* JSX : 자바스크립트의 for과 같기 때문에 html이라 명시해서 htmlFor로 명시한다 */}
          <input
            type="text"
            id='email'
            // ref={inputRef} // 리액트의 input 엘리먼트가 된다. 
            size='30'
            style={{ padding: "10px" }}
            autoComplete='off'
            placeholder='ID를 입력하세요...'
            onChange={inputId}
          />


        </fieldset>
      </form>
    </>
  )
};



ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App />
  </>
);