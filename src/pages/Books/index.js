import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";

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
        <h1>Books will come here</h1>
      </Jumbotron>

      
    </div>
  );
}

export default Books;
