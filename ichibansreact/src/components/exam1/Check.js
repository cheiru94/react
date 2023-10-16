import React, { useState } from 'react'

const Check = () => {

  const [fruite, setFruite] = useState("사과");
  const onChange = e => { setFruite(e.target.value) };
  const arr = ["사과", "배", "귤"];
  console.log(fruite);
  return (
    <div>
      {arr.map(e => {
        return (
          <lavel ket={e}  >
            <input
              type="radio"
              value={e}
              checked={fruite === e}
              onChange={onChange}
            /> {e}
          </lavel>

        )
      })}
      <h3>{fruite}, 몹시 먹고싶도다</h3>
    </div>
  )
}

export default Check