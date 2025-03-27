import React from 'react'

function Container({children}) {
    console.log(children)
  return (
    <div style={{
        backgroundColor:"red",
        padding:"20px",
        margin:"20px"
    }}>
      


     {children}
       
    </div>
  )
}

export default Container
