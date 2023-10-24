import React from 'react'

const Box = ({ name = 'ㅋㄹㅋㄹㅋㄹ', color = 'yellow', children }) => {
  console.log(typeof color)
  return (
    <div classNmame="box" style={{ backgroundColor: color }} >
      <h1>{name}</h1>
      <h1>{children}</h1>
    </div >
  )
}

// Box.defaultProps = {
//   name: 'サザンオールスターズ、頑張れ！',
//   color: "skyblue",
// }

export default Box