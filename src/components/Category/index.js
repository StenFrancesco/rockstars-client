import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function Category({ category }) {

  return (
    <Link to={`/books/${category.name}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="category">
        <img width="300px" src={category.imageUrl} alt={category.name} />
        <h2><strong>{category.name}</strong></h2>
        <br />
      </div>
    </Link>
  )
}