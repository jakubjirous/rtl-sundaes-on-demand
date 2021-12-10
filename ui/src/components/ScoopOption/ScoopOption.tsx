import React from "react";
import { Col } from "react-bootstrap";

interface ScoopOptionProps {
  name: string;
  imagePath: string;
}

function ScoopOption({ name, imagePath }: ScoopOptionProps) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: "75%" }}
      />
    </Col>
  );
}

export default ScoopOption;
