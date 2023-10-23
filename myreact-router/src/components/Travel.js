import React from 'react';

export default function Travel({ name, img }) {
  return (
    <>
      <h1>여행지소개</h1>
      <h3>{name}</h3>
      <img src={img} width='100%' />
    </>
  )
}