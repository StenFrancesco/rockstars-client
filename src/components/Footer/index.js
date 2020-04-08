import React from "react";
import { Link } from "react-router-dom";

// Styling
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function (props) {
  return (
    <div className="footer-container">
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Contactdetails</strong>
          </ListGroup.Item>
          <ListGroup.Item>Naritaweg 10</ListGroup.Item>
          <ListGroup.Item>Sloterdijk</ListGroup.Item>
          <ListGroup.Item>1043 BX</ListGroup.Item>
          <ListGroup.Item>Amsterdam</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Customer service</strong>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Ordering & Delivery</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Payment</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Returnings</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Warranty</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Text id="follow-us">
          <strong>Follow us on:</strong>
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faLinkedin} size="40px" />
          <FontAwesomeIcon icon={faInstagramSquare} size="40px" />
          <FontAwesomeIcon icon={faFacebookSquare} size="40px" />
          <FontAwesomeIcon icon={faYoutubeSquare} size="40px" />
        </Card.Text>
      </Card>
    </div>
  );
}
