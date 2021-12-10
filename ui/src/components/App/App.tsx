import React from "react";
import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "../../context/OrderDetails";
import OrderEntry from "../OrderEntry/OrderEntry";
import SummaryForm from "../SummaryForm/SummaryForm";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
        <SummaryForm />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
