import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import Book from "../../components/Book/index";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";
import { useParams } from "react-router-dom"

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  console.log("books is:", books)

  const { name } = useParams();

  const selectCategoryOfBook = books.filter((bookCat) => {
    console.log(bookCat.category.name)
    return bookCat.category.name === name
  })
  console.log("cat War:", selectCategoryOfBook)

  console.log("name", name)

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

export default Books;
