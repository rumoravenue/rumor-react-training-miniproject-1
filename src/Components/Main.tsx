import React from "react";
import {
  Col,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Stack,
  Button,
} from "react-bootstrap";

interface MainProps {
  bgcolor: string;
}

function Main({bgcolor}:MainProps) {
  return (
    <Container className="main" style={{ backgroundColor: bgcolor }}>
      <div className="part1">
        <input type="checkbox" className="inp" />
      </div>
      <div className="part2">
      <ListGroup variant="flush">
        <ListGroupItem className="title">#1: Item #1</ListGroupItem>
        <ListGroupItem className="desc">Description for item</ListGroupItem>
      </ListGroup>

      </div>


    
    </Container>
  );
}

export default Main;
