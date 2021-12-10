import React from "react";
import Options, { OptionType } from "../Options/Options";
import SummaryForm from "../SummaryForm/SummaryForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Options optionType={OptionType.TOPPINGS} />
      <Options optionType={OptionType.SCOOPS} />
      <SummaryForm />
    </div>
  );
}

export default App;
