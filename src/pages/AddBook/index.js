import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import { addBook } from "../../store/addBook/actions";
import { fetchCategories } from "../../store/categories/actions";
import { selectCategories } from "../../store/categories/selectors";

export default function AddBookForm() {
  const { token } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const categories = useSelector(selectCategories)

  const [ISBN, setISBN] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price_discount, setPrice_discount] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();
  const admin = user.isAdmin;
  const price_percentage = 100 - price_discount;

  if (token === null || admin === false) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      addBook(
        ISBN,
        name,
        author,
        description,
        price,
        imageUrl,
        categoryId,
        price_percentage
      )
    );
  }
  return (
    <>
      <Jumbotron>
        <h1>Add a new book</h1>
      </Jumbotron>
      <Form as={Col} md={{ span: 6, offset: 3 }}>
        <Form.Group>
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            value={ISBN}
            onChange={(event) => setISBN(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Book name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            step="0.01"
            placeholder=""
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="http://"
          />
          {imageUrl ? (
            <Col className="mt-4" md={{ span: 8, offset: 2 }}>
              <Image src={imageUrl} alt="preview" thumbnail />
            </Col>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}>
              <option defaultValue='select' >select</option>
          {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price discount persentage</Form.Label>
          <Form.Control
            value={price_discount}
            onChange={(event) => setPrice_discount(event.target.value)}
            type="number"
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
