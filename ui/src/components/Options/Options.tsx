import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { PricePerItem } from "../../context/constancts";
import {
  formatCurrency,
  useOrderDetailsContext,
} from "../../context/OrderDetails";
import { OptionType } from "../../context/type";
import { Item } from "../../mock/handlers";
import AlertBanner from "../AlertBanner/AlertBanner";
import ScoopOption from "../ScoopOption/ScoopOption";
import ToppingOption from "../ToppingOption/ToppingOption";

interface OptionsProps {
  optionType: OptionType;
}

function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<boolean>(false);

  // @ts-ignore
  const [orderDetails, updateItemCount] = useOrderDetailsContext();

  useEffect(() => {
    const fetchItems = () => {
      axios
        .get<Item[]>(`${process.env.REACT_APP_SERVER}/${optionType}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    };

    fetchItems();
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const title =
    optionType[0].toUpperCase() + optionType.slice(1).toLocaleLowerCase();

  const optionItems = items.map((item, index) => {
    return optionType === OptionType.SCOOPS ? (
      <ScoopOption
        key={index}
        name={item.name}
        imagePath={item.imagePath}
        updateItem={(itemName, newItemCount) =>
          updateItemCount(itemName, newItemCount, optionType)
        }
      />
    ) : (
      <ToppingOption
        key={index}
        name={item.name}
        imagePath={item.imagePath}
        updateItem={(itemName, newItemCount) =>
          updateItemCount(itemName, newItemCount, optionType)
        }
      />
    );
  });

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(PricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(orderDetails?.totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}

export default Options;
