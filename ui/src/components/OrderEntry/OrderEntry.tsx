import React from "react";
import Options, { OptionType } from "../Options/Options";

function OrderEntry() {
  return (
    <>
      <Options optionType={OptionType.TOPPINGS} />
      <Options optionType={OptionType.SCOOPS} />
    </>
  );
}

export default OrderEntry;
