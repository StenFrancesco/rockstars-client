import React from "react";

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
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          <FontAwesomeIcon icon={faYoutubeSquare} size="lg" />
        </Card.Text>
        <Card.Text id="subscribe">
          <strong>Subscribe to our email:</strong>
        </Card.Text>
        <input type="text" placeholder="e-mail" />
      </Card>
    </div>
  );
}
