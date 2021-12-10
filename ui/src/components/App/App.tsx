import React from "react";
import OrderEntry from "../OrderEntry/OrderEntry";
import SummaryForm from "../SummaryForm/SummaryForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <OrderEntry />
      <SummaryForm />
    </div>
  );
}

export default App;
