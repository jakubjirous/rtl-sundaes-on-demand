import React from "react";
import { Col } from "react-bootstrap";
import { Item } from "../../mock/handlers";

interface ScoopOptionProps {
  item: Item;
}

function ScoopOption({ item }: ScoopOptionProps) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`${process.env.REACT_APP_SERVER}/${item.imagePath}`}
        alt={`${item.name} scoop`}
        style={{ width: "75%" }}
      />
    </Col>
  );
}

export default ScoopOption;
