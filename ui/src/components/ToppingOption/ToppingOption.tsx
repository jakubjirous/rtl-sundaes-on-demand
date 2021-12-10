import React from "react";
import { Col } from "react-bootstrap";

interface ToppingOptionProps {
  name: string;
  imagePath: string;
}

function ToppingOption({ name, imagePath }: ToppingOptionProps) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
    </Col>
  );
}

export default ToppingOption;
