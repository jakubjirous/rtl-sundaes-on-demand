import React from "react";
import { Col, Form } from "react-bootstrap";

interface ToppingOptionProps {
  name: string;
  imagePath: string;
  updateItem: (itemName: string, newItemCount: number) => void;
}

function ToppingOption({ name, imagePath, updateItem }: ToppingOptionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(name, +event.target.checked ? 1 : 0);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
