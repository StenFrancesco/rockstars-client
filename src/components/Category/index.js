import React from "react"


import "./style.css"

export default function Category({ category }) {

  return (
 
    <div className="category">
    <img width="300px" src={category.imageUrl} alt={category.name} />
    <h3 style={{fontSize: "16px"}}>{category.name}</h3>
    <br />
    
  </div>
  )
}