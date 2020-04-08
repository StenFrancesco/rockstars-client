import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectBookDetails } from "../../store/books/selectors";
import { fetchBooks } from "../../store/books/actions";

import BookDetailsComponent from "../../components/BookDetailsComponent/index";
import Loading from "../../components/Loading";

function BookDetails() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const bookDetails = useSelector(selectBookDetails(bookId));

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const showDetails = bookDetails ? <BookDetailsComponent /> : <Loading />;

  console.log("bookId: ", bookId);

  return (
    <>
      <Jumbotron>
        <h1>Book Title</h1>
        <h1>Author</h1>
      </Jumbotron>
      <div>{showDetails} </div>
    </>
  );
}

export default BookDetails;
