import React, { useEffect } from 'react'
import {useState} from 'react'



function UseEfect() {
  const [firstname, setFirstname] = useState("Cihan");
  const [lastname, setLastname] = useState("Ünal");


 useEffect (() => {
    console.log("useEffect always works")
  });
  useEffect (() => {
    console.log("It works when first rendered")
  },[]);
  useEffect (() => {
    console.log("It runs when it is first rendered and the first name state value changes.")
  },[firstname]);
  useEffect (() => {
    console.log("It runs when it is first rendered and the last name state value changes.")
  },[lastname]);


  return (
    <div>
      <button onClick={
        () => {
          setFirstname("Martin")
        }
      }>change name</button>
      <button onClick={
        () => {
          setLastname("Kruss")
        }
      }>change name</button>
    </div>
  )
}

export default UseEfect
