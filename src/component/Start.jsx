import React from 'react'

export default function Start() {
let a = 10;
const firstName ="Cihan";

let x= 60;
let y= 80;

let result = true;



  return (
    <div>
        {/* example */}
        <p>a variable : {a} </p>
        <p>Customer name : {firstName}</p>
        <p>Average : {(x+y)/2}  </p>

      {result ? <p>If the result is `true` you see this text.</p> : <p>If the result is `false` you see this text.</p>}

      {
        (x+y)/2 >=50 ? <p>Passed</p> : <p>Failed</p>
      }



    </div>
  )
}
