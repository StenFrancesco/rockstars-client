import React from "react";
import "./style.css";

function Book({ book }) {
  const salePrice = Math.round((book.price * book.price_percentage))/100
  return (
    <div className="book">
      <img width="150px" src={book.imageUrl} alt={book.author} />
      <h3 style={{ fontSize: "16px" }}>{book.name}</h3>
      <br />
      <p>{book.author}</p>
      <p>Origin price: ${book.price}</p>
      {book.price_percentage === 100 ? null : (
        <p>Sale price: ${salePrice}</p>
      )}
      <p>Genre: {book.category.name}</p>
    </div>
  );
}

export default Book;
