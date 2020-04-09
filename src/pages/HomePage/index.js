//module imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../components/Category/style.css";

//component imports
import Category from "../../components/Category";

//store imports
import { selectCategories } from "../../store/categories/selectors";
import { selectBooks } from "../../store/books/selectors";
import { fetchCategories } from "../../store/categories/actions";
import { fetchBooks } from "../../store/books/actions";
import "./style.css"

//Bootstrap imports
import Carousel from "react-bootstrap/Carousel";

export default function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selectBooksSelector = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const selectBooksOnSale = selectBooksSelector.filter((book) => {
    return book.price_percentage !== 100;
  });

  return (
    <div>
      <Carousel style={{ minHeight: "700px", marginBottom: "60px" }} className="animated">
        {selectBooksOnSale.map((book) => {
          return (
            <Carousel.Item
              key={book.id}
              style={{
                backgroundColor: "#eaebe4",
                textAlign: "center",
                minHeight: "700px",
              }}
            >
              <img
                src={book.imageUrl}
                alt={book.name}
                style={{ maxHeight: "500px" }}
              />
              <Carousel.Caption
                style={{ position: "static", marginBottom: "20px" }}
              >
                <h3 style={{ color: "black" }}>{book.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="box">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
