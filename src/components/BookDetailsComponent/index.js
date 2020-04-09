import React from "react";
import "./style.css";

function BookDetailsComponent({ book }) {
  const price = (book.price * book.price_percentage) / 100;
  const averageRating = calcAverage() || 0;

  function calcAverage() {
    let total = 0;
    for (let i = 0; i < book.reviews.length; i++) {
      total += book.reviews[i].rating;
    }
    return total / book.reviews.length;
  }

  return (
    <div>
      <div className="grid-container">
        <div className="item1">
          <h1>{book.name}</h1>
          <hr />
          <h2>Author: {book.author}</h2>
          <hr />
          <h3>{book.category.name}</h3>
          <br />
          <img
            style={{ marginLeft: "80px" }}
            width="300px"
            src={book.imageUrl}
            alt={book.name}
          />
          <h3>Reviews</h3>
          {book.reviews.map((review) => {
            return (
              <div key={review.id} className="review">
                <p>{review.user.first_name}</p>
                <p>Rating: {review.rating}</p>
                <p style={{ fontSize: "16px" }}>{review.comment}</p>
              </div>
            );
          })}
        </div>
        <div className="item2">
          <h2>Rating: {averageRating}</h2>
          <br />
          <hr />
          <br />
          <h3>Description</h3>
          <br />
          <hr />
          <p>{book.description}</p>
          <hr />
          <br />
          <h3>Price: €{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsComponent;
