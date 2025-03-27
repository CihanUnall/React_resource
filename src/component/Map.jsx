import React from 'react'

export default function Map() {
    let names = ["Cihan", "Martin", "Manuel"];
  return (
    <div>
      {
        names.map((name, index) => {
          return <p style={{
            color: "red",
            fontSize: "20px",
            backgroundColor: "yellow",
            textAlign:"left"
          }} key={index}>Name: {name}</p>
        })
      }
    </div>
  )
}
