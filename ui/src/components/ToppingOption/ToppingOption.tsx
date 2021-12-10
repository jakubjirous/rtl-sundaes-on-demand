import React from "react";
import { Col, Form, Row } from "react-bootstrap";

interface ToppingOptionProps {
  name: string;
  imagePath: string;
  updateItem: (itemName: string, newItemCount: number) => void;
}

function ToppingOption({ name, imagePath, updateItem }: ToppingOptionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(name, +event.target.value);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs={6} style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs={5} style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
