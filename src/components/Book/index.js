import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Book({ book }) {
  const salePrice = Math.round((book.price * book.price_percentage))/100
  return (
    <div className="book">
      <img width="150px" src={book.imageUrl} alt={book.author} />
    
      <Link to={`/book-details/${book.id}`}>
      <h3 style={{fontSize: "16px"}}>{book.name}</h3>
      </Link>

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
