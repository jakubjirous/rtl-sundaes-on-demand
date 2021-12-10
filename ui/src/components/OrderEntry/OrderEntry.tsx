import React from "react";
import { OptionType } from "../../context/type";
import Options from "../Options/Options";

function OrderEntry() {
  return (
    <>
      <Options optionType={OptionType.TOPPINGS} />
      <Options optionType={OptionType.SCOOPS} />
    </>
  );
}

export default OrderEntry;
