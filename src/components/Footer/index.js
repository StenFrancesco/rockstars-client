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
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Text id="follow-us">
          <strong>Follow us on:</strong>
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faInstagramSquare} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Card.Text>
      </Card>
    </div>
  );
}
