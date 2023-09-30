/* 🟢 [1] function 컴포넌트명(props) {return 결과;} */

import { Children } from 'react'


// import React from 'react'

// const Welcome = () => {
//   return (
//     <>
//       <p>안녕하세요, 김종률 교수님? 감사합니다!</p>
//     </>
//   )
// }

// export default Welcome

/* 🟢 [2] const 컴포넌트 = fucntion(props){return;} */
// const Welcome = function () {
//   return (
//     <>
//       <p>안녕하세요, 김종률 교수님? 감사합니다!</p>
//     </>
//   )
// }

// export default Welcome;


/* [3] */
export default function Welcome({ city, pop }) {
  console.log(Children)

  return (
    < p > 앗싸 살아있네, {city}아인교, 인구 몇이고 ?? {pop}만명</p >
  )
}


// export defualt const welcome = (props)
// [1]  방식으로 맨 마지막 코드를 통합해서 정의
// [4]  export default function 컴포넌트명 (props) {return 결과;}