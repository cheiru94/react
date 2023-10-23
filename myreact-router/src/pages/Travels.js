import React from 'react';
import Travel from '../components/Travel';

const travels = [

  { id: '1', name: '한국', img: 'https://cdn.pixabay.com/photo/2018/09/09/08/24/sunset-3664096_1280.jpg' },
  { id: '2', name: '미국', img: 'https://cdn.pixabay.com/photo/2016/11/29/12/16/buildings-1869425_1280.jpg' },
  { id: '3', name: '일본', img: 'https://cdn.pixabay.com/photo/2016/11/14/03/43/kimono-1822520_1280.jpg' }

]

export default function Travels() {
  // const name = '한국'
  // const img = 'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'
  return (<div className='container mt-5'>
    <button className='btn btn-outline-primary'>
      여행지 데이터 불러오기
    </button>
    <hr />
    {/* <Travel name={name} img={img} />
    <Travel name={name} img={img} />
    <Travel name={name} img={img} /> */}
    {/*
     🟢 JSX에서 JavaScript코드 실행은 { }내에서 작성 🟢 
        key props는 리엑트에서 성능 이슈로 사용
        일반적은 props로 사용불가
    */}
    {
      travels.map((t) => {
        //     react에서는 반드시 key 값이 있어야 한다.  key는 완전히 react 내부용이다
        return (<Travel key={t.name} idn={t.id} name={t.name} img={t.img} />);
      })
    }
  </div>);
}

