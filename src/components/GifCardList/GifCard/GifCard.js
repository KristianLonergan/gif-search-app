import React from "react";
import Card from "react-bootstrap/Card";

const GifCard = props => (
  <Card>
    <Card.Img variant="top" href={props.url} src={props.imageUrl} />

    <Card.Body>
      <Card.Text>{props.title.toLowerCase()}</Card.Text>
    </Card.Body>

    <Card.Footer>
      <small className="text-muted">
        View on Giphy:&nbsp;
        <a href={props.url} rel="noopener noreferrer" target="_blank">
          here
        </a>
      </small>
    </Card.Footer>
  </Card>
);

export default GifCard;