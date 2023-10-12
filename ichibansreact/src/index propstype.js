import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


const TestProps = (props) => {
  return (
    <>
      <p>1번쨰 프롭 : {props.first}</p>
      <p>2번쨰 프롭 : {props.second}</p>
      {/* <p>3번쨰 프롭 : {props.third}</p>    => 오류 발생! 자식 객체로는 직접 렌더링 불가!!*/}
      <p>3번쨰 프롭 색상 : {props.third.color}, 크기: {props.third.fontSize}</p>
      <p>4번쨰 프롭 색상 : {props.fort.color}, 크기: {props.fort.fontSize}</p>
    </>
  )
}
const obj = {
  color: "qwe",
  fontSize: 27,
}
const obj2 = {
  color: "qwe",
  fontSize: true,
}


TestProps.propTypes = {
  first: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  second: PropTypes.oneOf(['m', 'w', 'e']).isRequired,
  third: PropTypes.shape({ color: PropTypes.string, fontSize: PropTypes.number }),
  forth: PropTypes.objectOf(PropTypes.string)
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <TestProps first={[1, 2, "ef"]} second="e" third={obj} fort={obj2} />
  </>
);