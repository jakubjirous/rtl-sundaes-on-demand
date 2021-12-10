import React from "react";
import { Col, Form, Row } from "react-bootstrap";

interface ScoopOptionProps {
  name: string;
  imagePath: string;
  updateItem: (itemName: string, newItemCount: number) => void;
}

function ScoopOption({ name, imagePath, updateItem }: ScoopOptionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateItem(name, +event.target.value);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-scoop-number`}
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

export default ScoopOption;
