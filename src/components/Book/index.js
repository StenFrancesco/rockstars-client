import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Book({ book }) {
  return (
    <div className="book">
      <img width="150px" src={book.imageUrl} alt={book.author} />
      <Link to={`/books/${book.id}`}>
      <h3 style={{fontSize: "16px"}}>{book.name}</h3>
      </Link>
      
      <br />
      <p>{book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Genre: {book.category.name}</p>
    </div>
  );
}

export default Book;
