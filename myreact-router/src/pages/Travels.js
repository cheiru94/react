import React from 'react';
import Travel from '../components/Travel';

export default function Travels() {
  const name = '한국'
  const img = 'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_1280.jpg'
  return (<div className='container mt-5'>
    <button className='btn btn-outline-primary'>
      여행지 데이터 불러오기
    </button>
    <hr />
    <Travel name={name} img={img} />
    <Travel name={name} img={img} />
    <Travel name={name} img={img} />
  </div>);
}

