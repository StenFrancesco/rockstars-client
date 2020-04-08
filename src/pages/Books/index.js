import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import Book from "../../components/Book/index";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Books</h1>
      </Jumbotron>

      <div className="box">
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Books;
