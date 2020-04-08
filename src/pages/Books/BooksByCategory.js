import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import Book from "../../components/Book/index";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";
import { useParams } from "react-router-dom"

export default function BooksByCategory() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  console.log("books is:", books)

  const { name } = useParams();

  const selectCategoryOfBook = books.filter((bookCat) => {
    return bookCat.category.name === name
  })

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Books</h1>
      </Jumbotron>

      <div className="box">
        {selectCategoryOfBook.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}