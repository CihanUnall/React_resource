import React from 'react'
import { useState } from 'react';

// useState hook'u ile birlikte fonksiyonel componentlerde state kullanımı sağlanır.


export default function UseState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Cihan")
  const [age, setAge] = useState(20)

  const handleChange=()=>{
    setName("Ünal")
  }


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((x) => x + 1)}>
          count is {count}
        </button>
        <button onClick={handleChange}>
          Change Name
        </button>
        <button onClick={() => setAge(40)}>
          Change Age    
        </button>
        <hr />

        <div>{name}</div>
        <div>{age}</div>
      <hr />
     
     
      </div>
     
    </>
  )
}
