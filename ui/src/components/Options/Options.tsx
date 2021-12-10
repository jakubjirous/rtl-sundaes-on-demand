import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Item } from "../../mock/handlers";
import AlertBanner from "../AlertBanner/AlertBanner";
import ScoopOption from "../ScoopOption/ScoopOption";
import ToppingOption from "../ToppingOption/ToppingOption";

export enum OptionType {
  TOPPINGS = "toppings",
  SCOOPS = "scoops",
}

interface OptionsProps {
  optionType: OptionType;
}

function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = () => {
      axios
        .get<Item[]>(`${process.env.REACT_APP_SERVER}/${optionType}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.warn(error);
          setError(true);
        });
    };

    fetchItems();
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const optionItems = items.map((item, index) => {
    return optionType === OptionType.SCOOPS ? (
      <ScoopOption key={index} name={item.name} imagePath={item.imagePath} />
    ) : (
      <ToppingOption key={index} name={item.name} imagePath={item.imagePath} />
    );
  });

  return <Row>{optionItems}</Row>;
}

export default Options;
