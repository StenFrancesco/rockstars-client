import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { setMessage } from "../../store/appState/actions";

export default function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !password ||
      !street ||
      !postalCode ||
      !houseNumber ||
      !city ||
      !country
    ) {
      dispatch(setMessage("danger", true, "Please fill in all the fields!"));
    } else {
      dispatch(
        signUp(
          firstName,
          lastName,
          phone,
          email,
          password,
          street,
          postalCode,
          houseNumber,
          city,
          country
        )
      );

      setfirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPassword("");
      setStreet("");
      setPostalCode("");
      setHouseNumber("");
      setCity("");
      setCountry("");
    }
  }

  return (
    <div>
      <Jumbotron>
        <h1>Signup</h1>
      </Jumbotron>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 mb-5">
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              value={firstName}
              onChange={(event) => setfirstName(event.target.value)}
              type="text"
              placeholder="Enter firstname"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder="Enter lastname"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              type="text"
              placeholder="Enter phone"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="street">
          <Form.Label>Street</Form.Label>
          <Form.Control
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            placeholder="Street"
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="postalCode">
            <Form.Label>Postal code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
              type="text"
              placeholder="Postal code"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="houseNumber">
            <Form.Label>House number</Form.Label>
            <Form.Control
              value={houseNumber}
              onChange={(event) => setHouseNumber(event.target.value)}
              type="text"
              placeholder="House number"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="City"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              type="text"
              placeholder="Country"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted">
          We'll never share your data with anyone else.
        </Form.Text>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </div>
  );
}

// <Form.Check
// className="mb-3"
// required
// label="Agree to terms and conditions"
// feedback="You must agree before submitting."
// />
