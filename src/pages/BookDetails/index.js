import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";

import BookDetailsComponent from "../../components/BookDetailsComponent/index";
import Loading from "../../components/Loading";

function BookDetails() {
  const bookId = parseInt(useParams().bookId);
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState(null);
  const books = useSelector(selectBooks);

  const selectBookDetails = (bookId) => {
    return books.find((book) => book.id === bookId);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    setBookDetails(selectBookDetails(bookId));
  }, [bookId, books]);

  const showDetails = bookDetails ? <BookDetailsComponent book={bookDetails} /> : <Loading />;

  return (
    <>
      {showDetails}
    </>
  );
}

export default BookDetails;
