import React, { useState, useEffect } from "react";
//import './TravelForm.css';
import styles from "./TravelForm.module.css";

import Travels, { exptravels } from "./Travels";

export default function TravelForm() {
  const [travels, setTravels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/travels")  // Promise 처리, GET /travels    Read하는 엔드포인트
      .then((response) => response.json())
      .then((jsonData) => setTravels([...jsonData]));
  }, []);

  const clickHandlerModity = (data, event) => {
    console.log(data, event);
  };


  return (
    <div className="container mt-5">
      {/* container는 내부에 내용을 포함한다는 의미
      mt: margin top */}
      <h3>TravelForm페이지</h3>
      <hr />
      {/*     <form action="">
      <p><input className={styles.inputBox}
        type="text" name='name' placeholder='여행지 국가이름' autoComplete='off'/></p>
      <p><input className={styles}
        type="text" name='image' placeholder='여행지 대표이미지' autoComplete='off'/></p>
    </form> */}

      <form className={styles}
        onSubmit={
          (event) => {
            event.preventDefault(); // reload 방지
            const id = event.target.id.value;
            const name = event.target.name.value;
            const image = event.target.image.value;
            console.log(id, name, image);
            const newArticle = {
              id: parseInt(id),                   // key명과 value의 변수명이 같으면 생략가능
              name,
              imglink: image
            };
            /*             console.log(exptravels);
                        console.log(newArticle);
                        exptravels.push(newArticle);  // 단순 배열 변경으로 렌더링 못함--> useState처리
                        console.log(exptravels); */

            //travels = [travels,newArticle];  // 에러: useState는 setter를 이용해야 함

            /*             setTravels([  // useState의 setter를 이용
                        //travels,     // 에러 발생하지 않고 배열에 추가 되지만, 렌더링 안됨
                        ...travels,
                        newArticle]
                        ); */


            // 🟢 fetch로 POST /travels (Create하는 엔드포인트) 로 newArticle을 전송하여 서버에 반영 🟢
            fetch(  // 🟢create
              "http://localhost:3100/travels",
              { // Option 객체
                method: 'POST', // PUT, 🟡PATCH , DELETE -> CRUD를 위한 메서드
                // 덮어씀, 일부분만 수정
                headers: { "Content-type": "application/json", }, //HTTP Request Header 설정
                body: // body , params(:data) , query(url에서 ? 뒤에 key=value&...) 로주는 방법이 있다
                  JSON.stringify(newArticle)   // ify = make 의 의미가 있다.  // 직렬화(Serialization) : 통신하려고 객체를 문자열로 만들어서 보내는 것
              }
              // fetch 메솓의 결과 값이 response에 들어온다
            ).then((response) => { console.log(response); });




            setTravels([...travels, newArticle]);

            /* 이렇게 초기화 하는 것은 너무 귀찮다.. 라이브러리가 있다. */
            // event.target.id.value = ' ';
            // event.target.name.value = ' ';
            // event.target.image.value = ' ';

            event.target.reset(); // form 
            // event.target --> <form></form> 의 엘리먼트 객체
            console.log(event.target); // form 



          }
        }

      >
        <div className="input-group input-group-lg mb-2">
          {/* lg: large,  sm: small        mb: margin bottom */}
          <span className="input-group-text">인덱스번호</span>
          <input className="form-control" type="text" name='id' autoComplete='off' />
        </div>
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text">여행지 국가</span>
          <input className="form-control" type="text" name="name" autoComplete='off' />
        </div>
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text">대표 이미지</span>
          <input className="form-control" type="text" name="image" autoComplete='off' />
        </div>
        <input type="submit" className="btn btn-dark" value="여행정보입력" />
        <hr />
        {/* {console.log(exptravels)} */}

        {/*         <ul style={{listStyle:'none'}}>
          <li>
            <span style={{display:'inline-block', width:'140px'}}>
              1.&nbsp; 
            </span>
            <span style={{display:'inline-block', width:'140px', fontWeight:'bolder'}}>korea
            </span>
            <img width='30%' src="https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg" alt="" />
          </li>
          <li >
            <span style={{display:'inline-block', width:'140px'}}>
              2.&nbsp; 
            </span>
            <span style={{display:'inline-block', width:'140px', fontWeight:'bolder'}}>america
            </span>
            <img width='30%' src="https://cdn.pixabay.com/photo/2018/08/15/17/17/mount-rushmore-3608620_1280.jpg" alt="" />
          </li>
        </ul> */}




        <ul style={{ listStyle: "none", paddingLeft: "40px" }}>
          {//exptravels.map(
            travels.map(
              (t) => (
                <li key={t.id} style={{ position: "relative" }} > {/* 🟡 부모의 상대적인 위치로 */}
                  {/* 숫자, 나라 */}
                  <span style={{ display: "inline-block", width: "140px" }}>
                    {t.id}.
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "140px",
                      fontWeight: "bolder",
                      marginBottom: "70px",
                      textTransform: "capitalize",
                    }}
                  >
                    {t.name}
                  </span>

                  {/* 이미지 */}
                  <img height="140px" width="30%" src={t.imglink} alt="" />

                  {/* 버튼 */}
                  <div>
                    <button
                      className='btn btn-outline-info'
                      style={{
                        position: 'absolute', top: '50px', right: '100px', zIndex: '2'
                      }}/* 🟡 자식의 절대적인 위치 */
                      onClick={(ev) => {
                        clickHandlerModity(t, ev);
                      }}
                    >수정</button>
                  </div>
                </li>
              )
            )}
        </ul>
      </form>
    </div>
  );
}
