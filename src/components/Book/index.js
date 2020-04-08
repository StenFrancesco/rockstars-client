import React from "react";
import "./style.css"

function Book({ book }) {
  return (
    <div className="book">
      <img width="150px" src={book.imageUrl} alt={book.author} />
      <h3 style={{fontSize: "16px"}}>{book.name}</h3>
      <br />
      <p>{book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Genre: {book.category.name}</p>
    </div>
  );
}

export default Book;
