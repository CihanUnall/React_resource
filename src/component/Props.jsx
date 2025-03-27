import React from 'react'

function Props(props) {
    console.log(props)

const {name, age}=props;
// probs içerisindeki objeden name ve age öğelerini map yapıyor. Sadece bu öğeleri kullanıyor. Aşağıdaki gibi kullanılıyor.

  return (
<>


    <div style={{
        backgroundColor:"aqua"
    }} >
      <div>Name : {props.name}</div>
      <div>Age : {props.age}</div>
    </div>
    <div 
     style={{
        backgroundColor:"yellow"
    }}>
    <div >Name : {name}</div>
      <div>Age : {age}</div>
    </div>
  
</>
  )
}

export default Props
