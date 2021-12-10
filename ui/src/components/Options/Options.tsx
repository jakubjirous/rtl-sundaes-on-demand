import React from "react";

export enum OptionType {
  TOPPINGS = 1,
  SCOOPS = 1,
}

interface OptionsProps {
  optionType: OptionType;
}

function Options({ optionType }: OptionsProps) {
  return <></>;
}

export default Options;
