import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Item } from "../../mock/handlers";
import ScoopOption from "../ScoopOption/ScoopOption";

export enum OptionType {
  TOPPINGS = "toppings",
  SCOOPS = "scoops",
}

interface OptionsProps {
  optionType: OptionType;
}

function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = () => {
      axios
        .get<Item[]>(`${process.env.REACT_APP_SERVER}/${optionType}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          // TODO: handle response error (Jakub Jirous 2021-12-09 16:40:51)
          console.log(error);
        });
    };

    fetchItems();
  }, [optionType]);

  // TODO: replace `null` with ToppingOption when available (Jakub Jirous 2021-12-09 16:46:11)
  const optionItems = items.map((item, index) => {
    return optionType === OptionType.SCOOPS ? (
      <ScoopOption key={index} name={item.name} imagePath={item.imagePath} />
    ) : null;
  });

  return <Row>{optionItems}</Row>;
}

export default Options;
