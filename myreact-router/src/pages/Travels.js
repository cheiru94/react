import React, { useEffect, useState } from 'react';
import Travel from '../components/Travel';


/* const travels =[
  {id:'1', name:'한국',imglink:'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'},
  {id:'2',name:'미국',imglink:'https://cdn.pixabay.com/photo/2018/08/15/17/17/mount-rushmore-3608620_1280.jpg'},
  {id:'3',name:'일본',imglink:'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg'},
];  */

export default function Travels() {
  const [travels, setTravels] = useState([]);
  const [flag, setFlag] = useState(false); // 🟢 1. state로 눌렀냐 안 눌렀냐 상태 관리 

  //  const name='한국'
  //  const img='https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'

  /* 🟢 1. useEffect 사용 - 함수 불러 사용 */
  useEffect(() => {
    clickHan();
  }, [])

  /* 🟢 2. useEffect 사용 - 함수 즉시 실행 */
  // useEffect(() => {
  //   (async function () {   
  //     const response = await fetch("http://localhost:3100/travels");
  //     const jsonData = await response.json();
  //     setTravels([...jsonData]);

  //     setFlag(prev => !prev)
  //   })()
  // }, [])

  /* 🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
    // ussEffect 의 콜백함수에는 async를 사용할 수 없다!! 에라 떠뿌더라
    Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
  */
  // useEffect(async () => {
  //   const response = await fetch("http://localhost:3100/travels");
  //   const jsonData = await response.json();
  //   setTravels([...jsonData]);

  //   setFlag(prev => !prev)
  // }, []);

  /* 🟢 함수로 따로 사용 */
  async function clickHan(e) {
    /* npx json-server --watch db.json --port 3100 
       만든 json 폴더에서 서버를 실행 시켜야 한다
    */
    const response = await fetch("http://localhost:3100/travels");
    const jsonData = await response.json();
    setTravels([...jsonData]);

    setFlag(prev => !prev) // 🟢 2. 버튼 누름에 따라 적절한 true , false 부여 
  }



  // 백업 용
  // async function clickHan(e) {
  //   const response = await fetch("http://localhost:3100/travels");
  //   const jsonData = await response.json();
  //   setTravels([...jsonData]);

  //   setFlag(prev => !prev) // 🟢 2. 버튼 누름에 따라 적절한 true , false 부여 
  // }


  return (<div className='container mt-5'>
    <button
      onClick={() => { setFlag(p => !p) }}
      // onClick={clickHan}
      className='btn btn-outline-primary mybtn'>
      {flag ? "여행지 사진" : "여행지 데이터 불러오기"}
    </button>
    <hr />
    {/* <Travel name={name} img={img} />
    <Travel name={name} img={img} />
    <Travel name={name} img={img} /> 
    jsx에서 js코드 실행코드는 {}내에서 작성
      key props는 리액트에서 성능 이슈로 사용
      일반적인 props로 사용 불가
    */}
    {
      flag && // 🟢 3. true면 보여라, 아이면 보이지 마라 
      travels.map((t) => {
        return (
          <Travel key={t.id} idn={t.id} name={t.name} img={t.imglink} />
        );
      })
    }

  </div>);
}